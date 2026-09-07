"""Aggregate the Malta Event Edition application export into lib/report-data.ts.

Usage:  python3 scripts/aggregate.py <submissions.csv> [out.json]

The raw export contains personal data (names, emails, phone numbers) and must
NOT be committed. Only the aggregated output is checked in.
"""
import csv, collections, json, statistics, re, datetime, sys

P = sys.argv[1] if len(sys.argv) > 1 else 'submissions.csv'
OUT = sys.argv[2] if len(sys.argv) > 2 else 'report.json'
rows=list(csv.DictReader(open(P,encoding='utf-8-sig')))
K=lambda r,k:(r[k] or '').strip()
by_email={}
for r in rows:
    e=K(r,'What is you best email to get in touch ?').lower()
    if e not in by_email or int(K(r,'score') or 0)>int(K(by_email[e],'score') or 0): by_email[e]=r
U=list(by_email.values()); N=len(U)
pct=lambda n,d: round(100*n/d,1)
strip_emoji=lambda s: re.sub(r'^[^\w$€]+','',s).strip()
clean_tail=lambda s: re.sub(r'\s*[\U0001F000-\U0001FAFF☀-➿️]+\s*$','',strip_emoji(s)).strip()
def L(counter,total=None):
    total=total or sum(counter.values())
    return [{'label':v,'value':n,'share':pct(n,total)} for v,n in counter.most_common()]
def D(key,src=None,clean=lambda s:s):
    src=src if src is not None else U
    return collections.Counter(clean(K(r,key)) for r in src if K(r,key))

IND=[('Financial & professional services',r'financ|invest|private equity|account|legal|law\b|attorney|lawyer|migration|immigration|consult|advisor|advisory|trust|insurance|staffing|recruit|fintech'),
     ('Real estate & construction',r'real estate|construction|architect|property'),
     ('Healthcare & wellness',r'health|medical|physician|cardio|therapist|wellbeing|wellness|nurse|\brn\b|ayurv|acupunct'),
     ('Technology & software',r'software|\bit\b|seo|technolog|\bai\b|legaltech|platform|crypto|blockchain|telecommunication|developer'),
     ('Marketing, media & entertainment',r'marketing|entertainment|media|music|producer|brand|event|design'),
     ('Education & non-profit',r'educat|training|teacher|non-profit|nonprofit|ngo|grant|coach'),
     ('Government & public sector',r'government|public health|police|law enforcement|military|dual-use'),
     ('Travel & hospitality',r'travel|hospitality|boat|charter|yacht|transfer'),
     ('Industrial & engineering',r'engineer|manufactur|electric')]
def industry(r):
    t=(K(r,'What is your professional industry background ?')+' '+K(r,'Your Position')).lower()
    if 'retired' in t: return 'Retired / private wealth'
    for n,p in IND:
        if re.search(p,t): return n
    return 'Other'
def seniority(r):
    p=K(r,'Your Position').lower()
    if 'retired' in p: return 'Retired / private'
    if re.search(r'ceo|founder|owner|president|principal|partner|trustee|managing director|company director',p): return 'Founder / owner / C-suite'
    if re.search(r'investor|investment advisor',p): return 'Investor'
    if re.search(r'director|head of|secretary of state',p): return 'Director / head'
    return 'Manager / professional'
CN={'United States of America':'United States','United Kingdom of Great Britain and Northern Ireland':'United Kingdom'}
ctry=lambda r: CN.get(K(r,"Respondent's country"),K(r,"Respondent's country"))
REGION={'United States':'North America','Canada':'North America','Malta':'Malta',
 'Greece':'Europe (ex-Malta)','United Kingdom':'Europe (ex-Malta)','Ukraine':'Europe (ex-Malta)','Spain':'Europe (ex-Malta)',
 'Poland':'Europe (ex-Malta)','Romania':'Europe (ex-Malta)','Cyprus':'Europe (ex-Malta)','France':'Europe (ex-Malta)',
 'Estonia':'Europe (ex-Malta)','Bulgaria':'Europe (ex-Malta)','Nigeria':'Africa & Middle East','Tunisia':'Africa & Middle East',
 'United Arab Emirates':'Africa & Middle East','Brazil':'Latin America','Dominican Republic':'Latin America',
 'Thailand':'Asia-Pacific','Hong Kong':'Asia-Pacific'}
ISO={'United States':'US','Malta':'MT','United Kingdom':'GB','Greece':'GR','Ukraine':'UA','Nigeria':'NG','Thailand':'TH',
 'Brazil':'BR','Spain':'ES','Poland':'PL','Dominican Republic':'DO','Romania':'RO','Cyprus':'CY','France':'FR',
 'United Arab Emirates':'AE','Canada':'CA','Estonia':'EE','Tunisia':'TN','Hong Kong':'HK','Bulgaria':'BG'}
ST={'california':'California','los angeles':'California','new york':'New York','nyc':'New York','florida':'Florida',
 'miami':'Florida','texas':'Texas','georgia':'Georgia','atlanta':'Georgia','pennsylvania':'Pennsylvania',
 'minnesota':'Minnesota','north carolina':'North Carolina','washington':'Washington','arizona':'Arizona','phoenix':'Arizona'}
def state(r):
    loc=K(r,'Where are you located now 🌏 ?').lower()
    for k,v in ST.items():
        if re.search(r'\b'+re.escape(k)+r'\b',loc): return v
    return 'Other / not specified'
sc=lambda r:int(K(r,'score') or 0)
def avg_by(fn,minimum=1):
    d=collections.defaultdict(list)
    for r in U: d[fn(r)].append(sc(r))
    return [{'label':k,'n':len(v),'avg':round(statistics.mean(v),1)} for k,v in sorted(d.items(),key=lambda kv:-statistics.mean(kv[1])) if len(v)>=minimum]

HELP=[('Relocation & residency','Malta Relocation & Residency'),('Business setup','Malta Business Setup'),
 ('Tax & structuring','Malta Tax & Structuring'),('Real estate','Malta Real Estate'),
 ('Lifestyle & family','Malta Lifestyle Setup'),('Network & partners','Malta Network')]
help_c=collections.Counter(); multi=0
for r in U:
    t=K(r,'What type of help are you looking for and what is your proiroty  ')
    h=[n for n,p in HELP if p in t]
    for x in h: help_c[x]+=1
    if len(h)>1: multi+=1

READY_ORDER=['Already active in Malta','3–6 months — ready to act in Malta','6–9 months — planning the Malta move','9–12 months — exploring Malta options','Not ready yet']
FIN_ORDER=['Capital Allocated','Ready to Invest','Planning Budget','Not Ready Yet']
ready=lambda r: strip_emoji(K(r,'Your Malta Readiness?'))
fin=lambda r: strip_emoji(K(r,'How do you currently see your financial readiness for your Malta plan?'))
mat=[[sum(1 for r in U if ready(r)==ro and fin(r)==fo) for fo in FIN_ORDER] for ro in READY_ORDER]

near=[r for r in U if ready(r) in READY_ORDER[:3]]
capital=[r for r in U if fin(r) in FIN_ORDER[:2]]
both=[r for r in U if ready(r) in READY_ORDER[:3] and fin(r) in FIN_ORDER[:2]]
top=[r for r in U if sc(r)>=52]

sources={'fb':'Meta — Facebook','ig':'Meta — Instagram','substack':'Substack newsletter','chatgpt.com':'AI search (ChatGPT)'}
src=collections.Counter()
for r in U:
    s=K(r,'utm_source').lower()
    src[sources.get(s,'Direct / unattributed' if (not s or '{{' in s) else s)]+=1

days=collections.Counter(K(r,'Submitted at')[:10] for r in rows)
d0=datetime.date.fromisoformat(min(days)); d1=datetime.date.fromisoformat(max(days))
series=[];cum=0;d=d0
while d<=d1:
    n=days.get(d.isoformat(),0);cum+=n;series.append({'date':d.isoformat(),'n':n,'cum':cum});d+=datetime.timedelta(days=1)

QUOTES=[(8,'Owner / therapist','United States'),(20,'Managing director','United States'),(24,'President','United States'),
 (66,'Investor','United States'),(79,'Founder & CEO','Hong Kong'),(30,'Consultant','Brazil'),(13,'Owner, real estate','United States'),
 (59,'Director, architecture','United States'),(71,'Financial advisory','Malta'),(68,'Founder, relocation services','France'),
 (3,'Company director','United Kingdom'),(77,'President, construction','United States')]
quotes=[{'text':rows[i]['What makes you interested in Freedom Business Summit 2026: Malta Event Edition, and what would you like to discover?'].strip().replace('\n',' '),
         'role':role,'country':c,'score':int(rows[i]['score'])} for i,role,c in QUOTES]

usloc_words=('usa','united states','us','america','california','new york','florida','texas','georgia','atlanta','miami','pennsylvania','minnesota','north carolina','washington','arizona','phoenix','los angeles','usa ')
def us_abroad(r):
    loc=K(r,'Where are you located now 🌏 ?').lower()
    return ctry(r)=='United States' and not any(re.search(r'\b'+w.strip()+r'\b',loc) for w in usloc_words)

data={
 'meta':{'submissions':len(rows),'respondents':N,'duplicates':len(rows)-N,'countries':len(set(ctry(r) for r in U)),
   'from':d0.isoformat(),'to':d1.isoformat(),'days':(d1-d0).days+1,'generated':'2026-09-07'},
 'score':{'avg':round(statistics.mean([sc(r) for r in U]),1),'median':statistics.median([sc(r) for r in U]),
   'max':max(sc(r) for r in U),'min':min(sc(r) for r in U),
   'buckets':L(collections.Counter(('Priority (50+)' if sc(r)>=50 else 'High intent (35–49)' if sc(r)>=35 else 'Developing (25–34)' if sc(r)>=25 else 'Early stage (<25)') for r in U),N),
   'byPersona':avg_by(lambda r:K(r,'Which best describes you?')),
   'byReadiness':avg_by(ready),'byRegion':avg_by(lambda r:REGION.get(ctry(r),'Other')),
   'byIndustry':[x for x in avg_by(industry) if x['n']>=4],'bySeniority':avg_by(seniority)},
 'geo':{'countries':L(collections.Counter(ctry(r) for r in U),N),
   'iso':ISO,
   'regions':L(collections.Counter(REGION.get(ctry(r),'Other') for r in U),N),
   'usStates':L(collections.Counter(state(r) for r in U if ctry(r)=='United States'),sum(1 for r in U if ctry(r)=='United States')),
   'usCitizen':L(collections.Counter(('Non-U.S. citizen' if 'Non-U.S.' in K(r,'Are you a U.S. citizen or resident?') else 'U.S. citizen or resident') for r in U),N),
   'usResidence':L(D('Do you currently live in the U.S.?'),sum(1 for r in U if K(r,'Do you currently live in the U.S.?'))),
   'outsideHome':sum(1 for r in U if us_abroad(r))},
 'income':{'bands':L(D('What is your annual personal income?'),N),
   'financialReadiness':L(D('How do you currently see your financial readiness for your Malta plan?',clean=strip_emoji),N),
   'investment':L(D('Are you considering or already making investments in Malta?',clean=clean_tail),N),
   'capitalReady':len(capital),'capitalReadyShare':pct(len(capital),N)},
 'audience':{'industries':L(collections.Counter(industry(r) for r in U),N),
   'seniority':L(collections.Counter(seniority(r) for r in U),N),
   'persona':L(D('Which best describes you?'),N),
   'family':L(D('Would you relocate to Malta alone or with family?'),sum(1 for r in U if K(r,'Would you relocate to Malta alone or with family?'))),
   'providers':sum(1 for r in U if 'Yes, I provide' in K(r,'Are you a service provider in the Malta mobility, investment, tax, legal, property, or business ecosystem?'))},
 'programs':{'pathway':L(D('Which Malta pathway is most relevant to you?',clean=strip_emoji),N),
   'direction':L(D('Which Malta direction best describes your current focus?',clean=strip_emoji),N),
   'company':L(D('What type of Malta company setup is most relevant to you?',clean=clean_tail),N),
   'help':L(help_c,N),'helpMulti':multi,
   'content':L(D('Would you be interested to get access to Recordings, Playbooks and Audience Insights after the summit  ?',clean=strip_emoji),N)},
 'funnel':{'residency':L(D('What is the status of your Malta residency?',clean=strip_emoji),N),
   'readiness':[{'label':k,'value':sum(1 for r in U if ready(r)==k),'share':pct(sum(1 for r in U if ready(r)==k),N)} for k in READY_ORDER],
   'setup':L(D('How developed is your Malta legal, banking, and tax setup?',clean=strip_emoji),N),
   'active':L(D('How active are you currently in Malta through clients, business setup, residency, or real estate?'),N),
   'relocate12m':L(D('Are you actively considering relocating within 12 months?'),N),
   'matrix':{'rows':READY_ORDER,'cols':FIN_ORDER,'values':mat},
   'nearTerm':len(near),'nearTermShare':pct(len(near),N),
   'qualified':len(both),'qualifiedShare':pct(len(both),N)},
 'top':{'n':len(top),'threshold':52,'avg':round(statistics.mean([sc(r) for r in top]),1),
   'us':sum(1 for r in top if ctry(r)=='United States'),'malta':sum(1 for r in top if ctry(r)=='Malta'),
   'founder':sum(1 for r in top if seniority(r)=='Founder / owner / C-suite'),
   'active':sum(1 for r in top if 'Not active' not in K(r,'How active are you currently in Malta through clients, business setup, residency, or real estate?')),
   'nearTerm':sum(1 for r in top if ready(r) in READY_ORDER[:3])},
 'channel':L(src,N),'timeline':series,'quotes':quotes,
}
json.dump(data,open(OUT,'w'),indent=1,ensure_ascii=False)
print('written',OUT)
