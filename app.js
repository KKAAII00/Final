/* ---------- DATA ---------- */
const SKILLS=[
 "Data analysis","Python","Machine learning","AI ethics","Communication","Project management","Leadership","Creative design","Process improvement","Coaching",
 "Microsoft Excel","Bookkeeping","Financial analysis","Budgeting","Accounting software","Customer service","Administration","Documentation","Scheduling","Time management",
 "Digital marketing","Advertising","Content writing","Graphic design","Video editing","Social media","Presentation","Research","Problem solving","Teamwork",
 "Sales","Negotiation","CRM systems","Call handling","Conflict resolution","Customer relationship management","Strategic planning","Decision making","People management","Recruitment",
 "Training delivery","Performance management","Payroll","Employment law","Compliance","Risk assessment","Data privacy","Cybersecurity","Web development","Database management",
 "Networking","Cloud computing","Technical support","Software testing","Systems analysis","UI/UX design","CAD","Technical drawing","Quality assurance","Health and safety",
 "Project coordination","Inventory management","Logistics planning","Supply chain management","Operations management","Food safety","Hospitality service","Tourism planning",
 "Teaching","Curriculum planning","Public speaking","Community engagement","Policy analysis","Environmental awareness","Sustainability","Resource management","Diversity & inclusion",
 "Human rights","Employee wellbeing","Business ethics","Transparency","Risk management","Animal care","Agricultural practices","Conservation","Construction planning","Engineering fundamentals",
 "Patient communication","Clinical documentation","Legal research","Contract management","Manufacturing processes","Maintenance","Procurement","Event planning","Property management","Interviewing"
];
const ESG_CATEGORIES={
 "Environmental (E)":["Sustainability","Climate awareness","Resource management"],
 "Social (S)":["Diversity & inclusion","Human rights","Employee wellbeing"],
 "Governance (G)":["Business ethics","Compliance","Transparency","Risk management"]
};
const ESG_TARGET=3;
const ESG_SKILLS=Object.values(ESG_CATEGORIES).flat();
const ROLES={
 "Senior AI Analyst":{"Data analysis":5,"Python":4,"Machine learning":4,"AI ethics":3,"Communication":3,"Project management":3},
 "HR Business Partner":{"Communication":5,"Coaching":4,"Leadership":3,"Data analysis":3,"Process improvement":3,"AI ethics":2,"Recruitment":4,"Employment law":3,"Performance management":4},
 "Operations Manager":{"Process improvement":5,"Project management":5,"Leadership":4,"Data analysis":3,"Communication":4,"Operations management":5,"Inventory management":3},
 "UX Designer":{"Creative design":5,"Communication":4,"Data analysis":3,"Project management":2,"Process improvement":2,"UI/UX design":5,"Research":4},
 "Team Lead":{"Leadership":5,"Coaching":4,"Communication":4,"Project management":4,"Process improvement":3},
 "Accountant":{"Bookkeeping":5,"Financial analysis":4,"Budgeting":4,"Accounting software":5,"Microsoft Excel":4,"Compliance":4,"Communication":3,"Data analysis":3},
 "Administrative Officer":{"Administration":5,"Documentation":5,"Scheduling":4,"Microsoft Excel":4,"Communication":4,"Time management":4,"Customer service":3},
 "Advertising & Marketing Executive":{"Digital marketing":5,"Advertising":5,"Content writing":4,"Social media":4,"Data analysis":3,"Creative design":3,"Communication":4,"Research":3},
 "Graphic Designer / Media Creator":{"Graphic design":5,"Creative design":5,"Video editing":4,"Content writing":3,"Digital marketing":3,"Presentation":3,"Time management":3},
 "Banking & Finance Officer":{"Financial analysis":5,"Customer service":4,"Compliance":5,"Risk assessment":4,"Microsoft Excel":4,"Data analysis":4,"Communication":4},
 "Call Centre / Customer Experience Officer":{"Customer service":5,"Call handling":5,"Conflict resolution":4,"CRM systems":4,"Communication":5,"Time management":3,"Problem solving":4},
 "CEO / General Manager":{"Strategic planning":5,"Leadership":5,"Decision making":5,"Financial analysis":4,"Communication":5,"People management":5,"Risk management":4,"Project management":4},
 "Community Development Officer":{"Community engagement":5,"Communication":5,"Project coordination":4,"Research":3,"Budgeting":3,"Diversity & inclusion":4,"Presentation":3},
 "Construction Project Coordinator":{"Construction planning":5,"Project coordination":5,"Health and safety":5,"Budgeting":4,"Technical drawing":3,"Communication":4,"Risk assessment":4},
 "Architectural / Interior Designer":{"Creative design":5,"CAD":5,"Technical drawing":5,"Project management":3,"Communication":4,"Research":3},
 "Teacher / Trainer":{"Teaching":5,"Curriculum planning":5,"Communication":5,"Presentation":4,"Coaching":4,"Training delivery":5},
 "Engineer":{"Engineering fundamentals":5,"Problem solving":5,"CAD":4,"Technical drawing":4,"Project management":3,"Quality assurance":4,"Health and safety":4},
 "Agriculture / Conservation Officer":{"Agricultural practices":5,"Animal care":3,"Conservation":5,"Environmental awareness":5,"Resource management":4,"Data analysis":3,"Community engagement":3},
 "Government / Defence Administrator":{"Administration":4,"Policy analysis":5,"Documentation":5,"Compliance":5,"Risk assessment":4,"Communication":4,"Data privacy":4},
 "Healthcare / Medical Administrator":{"Patient communication":5,"Clinical documentation":5,"Health and safety":5,"Administration":4,"Data privacy":5,"Scheduling":4,"Teamwork":4},
 "Hospitality / Tourism Officer":{"Hospitality service":5,"Tourism planning":4,"Customer service":5,"Event planning":4,"Communication":5,"Conflict resolution":4,"Food safety":3},
 "Recruitment Specialist":{"Recruitment":5,"Communication":5,"CRM systems":4,"Employment law":3,"Interviewing":5,"Data analysis":3,"People management":3},
 "IT Support Specialist":{"Technical support":5,"Networking":4,"Cybersecurity":4,"Database management":3,"Cloud computing":3,"Problem solving":5,"Communication":4,"Data privacy":4},
 "Software Developer":{"Web development":5,"Python":4,"Database management":4,"Software testing":4,"Systems analysis":4,"Problem solving":5,"Project management":3},
 "Cybersecurity Analyst":{"Cybersecurity":5,"Networking":4,"Risk assessment":5,"Data privacy":5,"Compliance":4,"Problem solving":4,"Documentation":3},
 "Insurance Adviser":{"Customer relationship management":4,"Customer service":5,"Financial analysis":3,"Compliance":5,"Risk assessment":4,"Communication":5,"Negotiation":3},
 "Legal Assistant":{"Legal research":5,"Contract management":4,"Documentation":5,"Compliance":4,"Communication":4,"Research":5,"Time management":3},
 "Manufacturing Supervisor":{"Manufacturing processes":5,"Quality assurance":5,"Maintenance":3,"Health and safety":5,"Inventory management":4,"Leadership":4,"Process improvement":4},
 "Transport & Logistics Coordinator":{"Logistics planning":5,"Supply chain management":5,"Inventory management":4,"Microsoft Excel":4,"Customer service":3,"Problem solving":4,"Communication":4},
 "Procurement Officer":{"Procurement":5,"Negotiation":4,"Budgeting":4,"Compliance":4,"Supply chain management":4,"Microsoft Excel":3,"Communication":4},
 "Event Coordinator":{"Event planning":5,"Project coordination":5,"Budgeting":4,"Communication":5,"Customer service":4,"Time management":5},
 "Property / Facilities Manager":{"Property management":5,"Maintenance":4,"Budgeting":4,"Health and safety":4,"Customer service":4,"Project coordination":3}
};
const C="https://www.coursera.org/search?query=";
const LEARN={
 "Data analysis":["Applied Data Science","https://www.coursera.org/specializations/data-science-python","Analyse a real HR dataset and present three findings."],
 "Python":["Python for Everybody",C+"python","Automate one weekly report with a short script."],
 "Machine learning":["Neural Networks and Deep Learning","https://www.coursera.org/learn/neural-networks-deep-learning","Build a small prediction model with a mentor."],
 "AI ethics":["Ethical AI Governance","https://www.coursera.org/learn/ai-ethics","Review a current tool against company compliance rules."],
 "Communication":["Effective Communication",C+"business communication","Present results to a manager and collect feedback."],
 "Project management":["Project Management Foundations",C+"project management","Lead a small cross-team project from plan to review."],
 "Leadership":["Leading People and Teams",C+"leading people and teams","Run a team meeting and a one-to-one coaching session."],
 "Creative design":["Design Thinking",C+"design thinking","Redesign one internal form or process screen."],
 "Process improvement":["Lean Six Sigma Basics",C+"lean six sigma","Map one workflow and remove two wasted steps."],
 "Coaching":["Coaching Skills for Managers",C+"coaching skills","Shadow an experienced coach for two sessions."],
 "Sustainability":["Sustainability Foundations",C+"sustainability","Identify one practical sustainability improvement in the employee’s workflow."],
 "Climate awareness":["Climate Change: Science and Impacts",C+"climate change","Assess a relevant climate risk or opportunity with the team."],
 "Resource management":["Resource Efficiency",C+"resource management sustainability","Map resource use in one process and propose a measurable reduction."],
 "Diversity & inclusion":["Diversity and Inclusion",C+"diversity inclusion","Review a team process for access and inclusion barriers."],
 "Human rights":["Business and Human Rights",C+"business human rights","Map human-rights risks in a relevant supplier or business process."],
 "Employee wellbeing":["Workplace Wellbeing",C+"employee wellbeing","Co-design one voluntary team wellbeing improvement and check its impact."],
 "Business ethics":["Business Ethics",C+"business ethics","Work through an ethics scenario using the organization’s code."],
 "Compliance":["Compliance Foundations",C+"compliance fundamentals","Review one role-relevant control with the compliance team."],
 "Transparency":["Transparency and Reporting",C+"business transparency reporting","Practice documenting a decision, its rationale, and relevant disclosures."],
 "Risk management":["Risk Management Foundations",C+"risk management","Build a simple risk register for a project and review mitigations."]
};
const LV=["Not yet","Beginner","Basic","Competent","Advanced","Expert"];
const learnFor=k=>LEARN[k]||[
 `${k} — beginner learning resources`,
 `https://www.coursera.org/search?query=${encodeURIComponent(k)}`,
 `Complete a small, role-related task using ${k.toLowerCase()}, then ask a manager or experienced colleague for feedback.`
];

/* ---------- STATE ---------- */
let S={name:"",role:"",target:"Senior AI Analyst",goals:"",skills:{},esg:{}};
try{const x=JSON.parse(localStorage.getItem("skillgap"));if(x)S=x}catch(e){}
if(!S.esg||typeof S.esg!=="object"||Array.isArray(S.esg))S.esg={};
if(!Array.isArray(S.compareRoles))S.compareRoles=[];
const save=()=>{try{localStorage.setItem("skillgap",JSON.stringify(S))}catch(e){}};
const $=s=>document.querySelector(s);
const toast=m=>{const t=$("#toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let coachMessages=[];
const MAX_CHAT_HISTORY_MESSAGES=6;
const MAX_CHAT_HISTORY_MESSAGE_CHARS=2000;
const dailyCheers=[
 "You don’t have to have it all figured out. One curious step is enough. 🌱",
 "Your future self is already cheering for the effort you’re making today. ✨",
 "Small progress is still progress. Look how far one good habit can take you. 🌈",
 "You bring something unique to the table. Keep making room for it to grow. 🌻",
 "A new skill starts with being brave enough to begin. You’ve got this! 💛"
];
const savedGrowthPlan=()=>{
 try{return JSON.parse(localStorage.getItem("skillgap-growth-plan")||"null")}
 catch(e){return null}
};
const growthSummary=()=>{
 const a=analyse();
 return[
  "SkillGap Analyzer — Career Growth Plan",
  `Employee: ${S.name||"Not provided"}`,
  `Current role: ${S.role||"Not provided"}`,
  `Target role: ${S.target}`,
  `Readiness: ${a.score}%`,
  `Priority gaps: ${a.gaps.slice(0,3).map(g=>g.k).join(", ")||"None identified"}`,
  `Career goals: ${S.goals||"Not provided"}`,
  "Skill ratings:",
  ...a.rows.map(r=>`- ${r.category}: ${r.k}: ${LV[r.have]} (target: ${LV[r.need]})`),
  `ESG assessment: ${esgSummary().rated}/${ESG_SKILLS.length} competencies rated`
 ].join("\n");
};

/* ---------- ANALYSIS ---------- */
function esgRows(){
 return Object.entries(ESG_CATEGORIES).flatMap(([category,skills])=>
  skills.filter(k=>Object.prototype.hasOwnProperty.call(S.esg,k))
   .map(k=>({k,have:+S.esg[k]||0,need:ESG_TARGET,gap:Math.max(0,ESG_TARGET-(+S.esg[k]||0)),category}))
 );
}
function esgSummary(){
 const rows=esgRows();
 const total=rows.reduce((sum,r)=>sum+r.need,0);
 const got=rows.reduce((sum,r)=>sum+Math.min(r.have,r.need),0);
 return{rated:rows.length,score:total?Math.round(got/total*100):null};
}
function analyse(){
 const req=ROLES[S.target]||{};
 const rows=[
  ...Object.keys(req).map(k=>{const have=+S.skills[k]||0,need=req[k];return{k,have,need,gap:Math.max(0,need-have),category:"Role skills"}}),
  ...esgRows()
 ];
 const total=rows.reduce((a,r)=>a+r.need,0)||1;
 const got=rows.reduce((a,r)=>a+Math.min(r.have,r.need),0);
 return{rows,score:Math.round(got/total*100),gaps:rows.filter(r=>r.gap>0).sort((a,b)=>b.gap-a.gap)};
}
function roleFit(role){
 const req=ROLES[role]||{},skills=Object.keys(req);
 const esg=esgRows();
 const total=skills.reduce((sum,k)=>sum+req[k],0)+esg.reduce((sum,r)=>sum+r.need,0)||1;
 const got=skills.reduce((sum,k)=>sum+Math.min(+S.skills[k]||0,req[k]),0)+esg.reduce((sum,r)=>sum+Math.min(r.have,r.need),0);
 return{role,score:Math.round(got/total*100),gaps:[...skills.filter(k=>(+S.skills[k]||0)<req[k]),...esg.filter(r=>r.gap>0).map(r=>r.k)]};
}
const internalMatches=()=>Object.keys(ROLES).filter(role=>role!==S.target).map(roleFit).sort((a,b)=>b.score-a.score).slice(0,3);
const hasSkills=()=>Object.values(S.skills).some(v=>+v>0)||esgRows().length>0;
const needData=()=>`<div class="empty"><b>No skills rated yet.</b> Rate the employee’s role skills or ESG competencies first, then come back for this page. <p style="margin:.6rem 0 0"><a class="btn alt" href="#skills">Rate skills</a></p></div>`;
const selectedRoles=()=>{
 const selected=[...new Set(S.compareRoles.filter(role=>Object.prototype.hasOwnProperty.call(ROLES,role)))];
 return selected.length>=2?selected.slice(0,3):[S.target,...Object.keys(ROLES).filter(role=>role!==S.target)].slice(0,3);
};

/* ---------- VIEWS ---------- */
const V={};
V.home=()=>{
 const analysis=analyse(),ready=hasSkills(),matches=internalMatches();
 const required=Object.keys(ROLES[S.target]||{});
 const rated=required.filter(skill=>Object.prototype.hasOwnProperty.call(S.skills,skill)).length;
 return`
 <section class="dashboard-hero">
  <div><p class="eyebrow">YOUR PEOPLE, THEIR NEXT CHAPTER</p>
   <h1>${S.name?`Welcome back, ${esc(S.name.split(" ")[0])}`:"Make career growth clear and actionable"}</h1>
   <p>Understand strengths, compare realistic next roles, and turn development goals into a plan people can act on.</p>
   <div class="hero-actions"><a class="btn" href="#profile">${S.name?"Edit employee profile":"Create employee profile"}</a><a class="btn ghost" href="#compare">Compare roles <span aria-hidden="true">→</span></a></div>
  </div>
  <aside class="dashboard-highlight"><span class="highlight-kicker">CURRENT GROWTH FOCUS</span><h2>${esc(S.target)}</h2>
   <p>${ready?`${analysis.gaps.length} priority skill gap${analysis.gaps.length===1?"":"s"} to explore`:"Start by rating current skills to see a personalized snapshot."}</p>
   ${ready?`<a href="#gaps">Review skill gaps <span aria-hidden="true">→</span></a>`:`<a href="#skills">Rate skills <span aria-hidden="true">→</span></a>`}
  </aside>
 </section>
 <section class="dashboard-metrics" aria-label="Growth overview">
  <article class="metric-card"><span>ROLE READINESS</span><strong>${ready?`${analysis.score}%`:"—"}</strong><small>${ready?`For ${esc(S.target)}`:"Rate skills to calculate"}</small></article>
  <article class="metric-card"><span>SKILLS RATED</span><strong>${rated}<i> / ${required.length}</i></strong><small>For your target role</small></article>
  <article class="metric-card"><span>PRIORITY GAPS</span><strong>${ready?analysis.gaps.length:"—"}</strong><small>Across rated competencies</small></article>
  <article class="metric-card"><span>ESG SKILLS RATED</span><strong>${esgSummary().rated}<i> / ${ESG_SKILLS.length}</i></strong><small>Competencies assessed</small></article>
 </section>
 <section class="dashboard-section">
   <div class="section-heading"><div><p class="eyebrow">SKILL TRACKER</p><h2>Progress at a glance</h2></div><a href="#skills">Update skill ratings →</a></div>
   ${ready?`<div class="grid">
    <article class="card"><h3>Target-role skill levels</h3><p class="privacy-note">Current level compared with target level (0–5).</p>
     <div style="display:grid;gap:.9rem">${required.slice(0,8).map(skill=>{const have=+S.skills[skill]||0,need=ROLES[S.target][skill];return`<div><div style="display:flex;justify-content:space-between;gap:.6rem;font-size:.9rem"><b>${esc(skill)}</b><span>${have}/5 · target ${need}/5</span></div><div style="position:relative;height:10px;background:var(--surface-2,#edf0f5);border-radius:99px;overflow:hidden;margin-top:.35rem"><div style="height:100%;width:${have/5*100}%;background:var(--accent,#5b63d3);border-radius:99px"></div></div></div>`}).join("")}</div>
    </article>
    <article class="card"><h3>ESG skill tracker</h3><p class="privacy-note">ESG means Environmental, Social and Governance. Target baseline: ${LV[ESG_TARGET]}.</p>
     <div style="display:grid;gap:1rem">${Object.entries(ESG_CATEGORIES).map(([category,skills])=>{const rated=skills.filter(k=>Object.prototype.hasOwnProperty.call(S.esg,k));const avg=rated.length?Math.round(rated.reduce((sum,k)=>sum+(+S.esg[k]||0),0)/rated.length*20):0;return`<div><div style="display:flex;justify-content:space-between;gap:.5rem"><b>${esc(category)}</b><span>${rated.length}/${skills.length} rated</span></div><div style="height:10px;background:var(--surface-2,#edf0f5);border-radius:99px;overflow:hidden;margin-top:.35rem"><div style="height:100%;width:${avg}%;background:var(--accent-2,#249b83);border-radius:99px"></div></div><small>${rated.length?`${avg}% of rating scale`:"Rate skills to track progress"}</small></div>`}).join("")}</div>
    </article>
   </div>`:`<div class="empty">Your skill tracker will appear after you rate skills. <a href="#skills">Rate skills now →</a></div>`}
  </section>
 <section class="dashboard-section">
  <div class="section-heading"><div><p class="eyebrow">YOUR NEXT STEP</p><h2>Make readiness actionable</h2></div><a href="#readiness">Open readiness dashboard →</a></div>
  <div class="action-grid">
   <a class="action-card" href="#readiness"><span class="action-icon">◉</span><span><b>Readiness dashboard</b><small>See skill coverage, gaps, and a focused learning plan</small></span><span class="action-arrow">→</span></a>
   <a class="action-card" href="#skills"><span class="action-icon">◈</span><span><b>Rate skills</b><small>Update role and ESG competencies</small></span><span class="action-arrow">→</span></a>
   <a class="action-card" href="#compare"><span class="action-icon">⇄</span><span><b>Compare roles</b><small>Compare two or three paths together</small></span><span class="action-arrow">→</span></a>
   <a class="action-card" href="#training"><span class="action-icon">▣</span><span><b>Build a learning plan</b><small>Turn top gaps into practical next steps</small></span><span class="action-arrow">→</span></a>
   <a class="action-card" href="#coach"><span class="action-icon">✦</span><span><b>Ask Copilot</b><small>Explore growth questions in a chat</small></span><span class="action-arrow">→</span></a>
  </div>
 </section>
 <section class="dashboard-section">
  <div class="section-heading"><div><p class="eyebrow">POSSIBLE NEXT STEPS</p><h2>Roles to explore</h2></div><a href="#compare">Open role comparison →</a></div>
  <div class="grid">${matches.map((match,index)=>`<article class="card match-card dashboard-match"><span class="match-rank">0${index+1} · ${match.score}% skill fit</span><h3>${esc(match.role)}</h3><p>${match.gaps.length?`Explore ${match.gaps.slice(0,2).map(esc).join(" and ")} as possible development areas.`:"Current ratings meet mapped requirements so far."}</p><button class="btn ghost" type="button" data-compare-role="${esc(match.role)}">Add to comparison</button></article>`).join("")}</div>
 </section>
 <aside class="joy-note" aria-label="Daily encouragement"><span class="joy-note-icon" aria-hidden="true">☀️</span><div><b>A little reminder</b><p>${dailyCheers[new Date().getDate()%dailyCheers.length]}</p></div></aside>`;
};

V.readiness=()=>{
 const analysis=analyse();
 const required=Object.entries(ROLES[S.target]||{});
 const roleRows=required.map(([k,need])=>{
  const rated=Object.prototype.hasOwnProperty.call(S.skills,k),have=rated?(+S.skills[k]||0):0;
  return{k,need,have,rated,gap:Math.max(0,need-have),category:"Role skills"};
 });
 const esgRowsForChart=ESG_SKILLS.map(k=>{
  const rated=Object.prototype.hasOwnProperty.call(S.esg,k),have=rated?(+S.esg[k]||0):0;
  const category=Object.keys(ESG_CATEGORIES).find(name=>ESG_CATEGORIES[name].includes(k));
  return{k,need:ESG_TARGET,have,rated,gap:Math.max(0,ESG_TARGET-have),category:category||"ESG"};
 });
 const chartRows=[...roleRows,...esgRowsForChart].sort((a,b)=>b.gap-a.gap||Number(a.rated)-Number(b.rated));
 const roleRated=roleRows.filter(r=>r.rated).length;
 const isAssessed=r=>r.category==="Role skills"
  ?Object.prototype.hasOwnProperty.call(S.skills,r.k)
  :Object.prototype.hasOwnProperty.call(S.esg,r.k);
 const assessedRows=analysis.rows.filter(isAssessed);
 const matched=assessedRows.filter(r=>r.have>=r.need).length;
 const assessedGaps=analysis.gaps.filter(isAssessed);
 const ratedGaps=assessedGaps.slice(0,3);
 const scoreLabel=analysis.score>=80?"Strong foundation":analysis.score>=50?"Building readiness":"Early development";
 const readinessGroups=[
  {name:"Target-role skills",rows:roleRows,showAll:true},
  ...Object.entries(ESG_CATEGORIES).map(([name,skills])=>({
   name,
   rows:esgRowsForChart.filter(row=>skills.includes(row.k)),
   showAll:false
  }))
 ].map(group=>{
  const rows=group.showAll?group.rows:group.rows.filter(row=>row.rated);
  const possible=rows.reduce((sum,row)=>sum+row.need,0);
  const achieved=rows.reduce((sum,row)=>sum+Math.min(row.have,row.need),0);
  return{...group,progress:possible?Math.round(achieved/possible*100):0,rated:group.rows.filter(row=>row.rated).length,total:group.rows.length,hasRatings:rows.length>0};
 });
 const renderSkillRow=r=>`<div class="readiness-skill ${r.rated?"":"is-unrated"}">
  <div class="readiness-skill-head"><strong>${esc(r.k)}</strong><span class="readiness-status ${r.rated?(r.gap?"needs-growth":"on-target"):"not-rated"}">${r.rated?(r.gap?`${r.gap} level${r.gap===1?"":"s"} to grow`:"On target"):"Not rated"}</span></div>
  <div class="readiness-track" role="img" aria-label="${esc(r.k)}: ${r.rated?`${LV[r.have]} current level`:"not rated"}, ${LV[r.need]} target level"><span class="readiness-fill" style="width:${r.rated?r.have/5*100:0}%"></span><i class="readiness-target" style="left:${r.need/5*100}%"></i></div>
  <div class="readiness-skill-meta"><span>${esc(r.category)}</span><span>${r.rated?`Current: ${esc(LV[r.have])}`:"Add a rating to assess"} · Target: ${esc(LV[r.need])}</span></div>
 </div>`;
 return`<div class="readiness-dashboard">
  <header class="readiness-dashboard-head">
   <div><p class="eyebrow">PEOPLE DEVELOPMENT · SKILL TRACKER</p><h1>Readiness dashboard</h1>
    <p>Role-fit and development signals for <b>${esc(S.name)||"this employee"}</b>, working toward <b>${esc(S.target)}</b>.</p></div>
   <div class="readiness-actions"><a class="btn" href="#skills">Update ratings</a><a class="readiness-role-link" href="#profile">Change target role</a></div>
  </header>
  ${!hasSkills()?`<div class="readiness-empty"><span class="readiness-empty-icon" aria-hidden="true">◈</span><div><b>Your skills dashboard is ready to set up</b><p>Rate role skills or ESG competencies to see readiness, priority development areas, and role-specific practice ideas.</p><a class="btn" href="#skills">Start skills assessment <span aria-hidden="true">→</span></a></div></div>`:`<div class="readiness-content">
  <section class="readiness-kpis" aria-label="Readiness key indicators">
   <article class="readiness-kpi readiness-kpi-score"><span>ROLE READINESS</span><div><strong>${analysis.score}%</strong><span class="readiness-kpi-ring" style="--p:${analysis.score}" aria-hidden="true"></span></div><small>${scoreLabel} · ${esc(S.target)}</small></article>
   <article class="readiness-kpi"><span>ROLE SKILLS RATED</span><strong>${roleRated}<i> / ${required.length}</i></strong><small>Assessment coverage</small></article>
   <article class="readiness-kpi"><span>ASSESSED SKILLS ON TARGET</span><strong>${matched}<i> / ${assessedRows.length}</i></strong><small>Role and rated ESG skills</small></article>
   <article class="readiness-kpi"><span>DEVELOPMENT GAPS</span><strong>${assessedGaps.length}</strong><small>Across assessed skills</small></article>
  </section>
  <section class="readiness-analytics-grid" aria-label="Readiness analysis">
   <article class="readiness-panel readiness-breakdown">
    <div class="readiness-panel-heading"><div><p class="eyebrow">CAPABILITY MAP</p><h2>Priority skill levels</h2><p>Current rating compared with target level.</p></div><span class="readiness-legend"><i></i> Current <b></b> Target</span></div>
    <div class="readiness-chart-rows" role="group" aria-label="Priority skill ratings compared with target levels">${chartRows.slice(0,6).map(renderSkillRow).join("")}</div>
    <details class="readiness-all-skills"><summary>View all ${chartRows.length} role and ESG competencies</summary><div class="readiness-chart-rows" role="group" aria-label="All skill ratings compared with target levels">${chartRows.slice(6).map(renderSkillRow).join("")}</div></details>
   </article>
   <article class="readiness-panel readiness-groups">
    <div class="readiness-panel-heading"><div><p class="eyebrow">DEVELOPMENT AREAS</p><h2>Progress by skill group</h2><p>Weighted progress toward each group’s target.</p></div></div>
    <div class="readiness-group-list">${readinessGroups.map(group=>`<div class="readiness-group">
     <div class="readiness-group-heading"><strong>${esc(group.name)}</strong><span>${group.hasRatings?`${group.progress}%`:"Not rated"}</span></div>
     <div class="readiness-group-track" role="img" aria-label="${esc(group.name)}: ${group.hasRatings?`${group.progress}% progress`:"not rated"}"><span style="width:${group.progress}%"></span></div>
     <small>${group.rated} of ${group.total} competencies rated</small>
    </div>`).join("")}</div>
    <div class="readiness-score-summary"><div class="readiness-ring" style="--p:${analysis.score}" role="img" aria-label="${analysis.score}% readiness"><div><strong>${analysis.score}%</strong><span>role readiness</span></div></div><div><b>${scoreLabel}</b><p>Weighted against the target role’s skill levels${esgSummary().rated?` and ${esgSummary().rated} rated ESG competencies`:""}.</p><a href="#results">View full analysis <span aria-hidden="true">→</span></a></div></div>
   </article>
  </section>
  <p class="readiness-note">Development snapshot only—not a hiring or promotion decision. Unrated role skills count as “Not yet” in the readiness score; unrated ESG skills are excluded.</p>
  <section class="readiness-section">
   <div class="readiness-section-heading"><div><p class="eyebrow">ON-THE-JOB DEVELOPMENT</p><h2>Turn priority gaps into practice</h2></div><a href="#training">All training recommendations <span aria-hidden="true">→</span></a></div>
   ${ratedGaps.length?`<div class="readiness-training-grid">${ratedGaps.map((r,index)=>{const l=learnFor(r.k);return`<article class="readiness-training-card">
    <span class="readiness-step">FOCUS 0${index+1} · ${r.gap} LEVEL${r.gap===1?"":"S"} TO GROW</span><h3>${esc(r.k)}</h3>
    <p><b>Learn:</b> <a href="${esc(l[1])}" target="_blank" rel="noopener noreferrer">${esc(l[0])}</a></p>
    <p><b>Apply at work:</b> ${esc(l[2])}</p>
    <p><b>Check progress:</b> Agree on one observable outcome with a manager or mentor, then update the rating after practice.</p>
   </article>`}).join("")}</div>`:`<div class="readiness-no-gaps"><b>${assessedGaps.length?"Rate current skills to unlock tailored training actions.":"No assessed skill gaps to prioritize yet."}</b><p>${assessedGaps.length?"Unrated skills are not assumed to be a training need.":"Choose a stretch assignment, request feedback, or reassess after the next learning goal."}</p><a class="btn ghost" href="#skills">Review skill ratings</a></div>`}
  </section>
  <section class="readiness-roadmap">
   <div><p class="eyebrow">A SIMPLE DEVELOPMENT CYCLE</p><h2>Learn → practise → demonstrate</h2><p>Use a short, repeatable cycle to connect training with real work.</p></div>
   <ol><li><span>01</span><div><b>Choose one focus</b><small>Agree on a priority skill and a realistic goal.</small></div></li><li><span>02</span><div><b>Practise on the job</b><small>Use a small project, shadowing, or a stretch task.</small></div></li><li><span>03</span><div><b>Review evidence</b><small>Collect feedback, update the rating, and plan the next step.</small></div></li></ol>
  </section></div>`}</div>`;
};

V.profile=()=>`
<h1 style="font-size:2.4rem">Employee Profile</h1>
<p>Tell us who this employee is and where they want to grow. HR and managers can both use this profile.</p>
<p class="notice">Choose from roles across accounting, administration, advertising and media, banking and finance, customer experience, leadership, community services, construction, design and architecture, education, engineering, agriculture and conservation, government, healthcare, hospitality and tourism, HR, IT, insurance, legal, manufacturing, logistics, procurement, and more. Role skill requirements are illustrative and should be tailored to your organisation.</p>
<form id="pf">
  <label for="n">Employee name</label><input type="text" id="n" required value="${esc(S.name)}">
  <label for="r">Current role</label><input type="text" id="r" value="${esc(S.role)}" placeholder="e.g. Data Analyst">
  <label for="t">Target role</label>
  <select id="t">${Object.keys(ROLES).map(r=>`<option ${r===S.target?"selected":""}>${r}</option>`).join("")}</select>
  <label for="g">Career goals and development interests</label><textarea id="g" placeholder="What does this employee want to learn or achieve?">${esc(S.goals)}</textarea>
  <p class="privacy-note">Demo privacy note: this prototype saves profile details in this browser only. Avoid entering sensitive employee or performance information.</p>
  <p style="margin-top:1.2rem"><button class="btn" type="submit">Save and rate skills</button></p>
</form>`;

V.skills=()=>`
<h1 style="font-size:2.4rem">Skills Analysis</h1>
<p>Rate ${esc(S.name)||"the employee"}’s current level in each skill. Move the slider; it saves automatically.</p>
<div class="panel" style="max-width:820px">
${SKILLS.map((k,i)=>{const v=+S.skills[k]||0;return`<div class="skillrow"><label for="s${i}" style="margin:0">${k}</label><input type="range" id="s${i}" min="0" max="5" value="${v}" data-k="${k}"><span class="lvl" id="l${i}">${LV[v]}</span></div>`}).join("")}
</div>
<section class="esg-assessment" id="esg-assessment">
 <p class="eyebrow">ESG · ENVIRONMENTAL, SOCIAL & GOVERNANCE</p>
 <h2>What is ESG?</h2>
 <p><b>ESG</b> stands for <b>Environmental, Social and Governance</b>. It describes how an organisation considers its impact on the environment, how it treats people, and how responsibly it is managed. Examples include reducing waste, supporting employee wellbeing, and following ethical business practices.</p>
 <h2>ESG Skills Assessment</h2>
 <p>Rate ${esc(S.name)||"the employee"}’s current level in these ESG-related competencies. Ratings save automatically. These are development prompts, not a formal ESG audit or compliance certification.</p>
 <div class="notice">For this demo, <b>${LV[ESG_TARGET]}</b> is a shared development baseline for every ESG competency, not a role-specific or regulatory standard. Unrated competencies are excluded from gap and readiness scores until rated.</div>
 ${Object.entries(ESG_CATEGORIES).map(([category,skills])=>`<section class="esg-group"><h2>${category}</h2><div class="panel" style="max-width:820px">${skills.map((k,i)=>{const id=`esg-${category.charAt(0)}-${i}`,ratedSkill=Object.prototype.hasOwnProperty.call(S.esg,k),v=ratedSkill?+S.esg[k]:null;return`<div class="skillrow"><label for="${id}" style="margin:0">${k}</label><select id="${id}" data-esg-k="${k}"><option value="" ${ratedSkill?"":"selected"}>Select level</option>${LV.map((level,rating)=>`<option value="${rating}" ${v===rating?"selected":""}>${level}</option>`).join("")}</select><span class="lvl">Target: ${LV[ESG_TARGET]}</span></div>`}).join("")}</div></section>`).join("")}
 <p class="privacy-note" id="esg-rating-status">${esgSummary().rated} of ${ESG_SKILLS.length} ESG competencies rated. ${ESG_SKILLS.length-esgSummary().rated?`${ESG_SKILLS.length-esgSummary().rated} unrated competencies will not yet affect the analysis.`:"All ESG competencies are included in the analysis."}</p>
</section>
<p style="margin-top:1.2rem"><a class="btn" href="#gaps">See skill gaps</a></p>`;

V.compare=()=>{
 const roles=selectedRoles();
 const skillNames=[...new Set(roles.flatMap(role=>Object.keys(ROLES[role])))];
 const skillRows=skillNames.map(skill=>`<tr><th scope="row">${esc(skill)}</th><td><span class="current-level">${esc(LV[+S.skills[skill]||0])}</span></td>${roles.map(role=>{
  const need=ROLES[role][skill];
  if(!need)return`<td class="not-required">Not required</td>`;
  const have=+S.skills[skill]||0,gap=Math.max(0,need-have);
  return`<td><span class="compare-level">${esc(LV[need])}</span><small class="${gap?"compare-gap":"compare-met"}">${gap?`${gap} level${gap===1?"":"s"} to grow`:"Meets target"}</small></td>`;
 }).join("")}</tr>`).join("");
 const esgRowsHtml=ESG_SKILLS.filter(skill=>Object.prototype.hasOwnProperty.call(S.esg,skill)).map(skill=>{
  const have=+S.esg[skill]||0,gap=Math.max(0,ESG_TARGET-have);
  return`<tr><th scope="row">${esc(skill)} <span class="esg-label">ESG</span></th><td><span class="current-level">${esc(LV[have])}</span></td>${roles.map(()=>`<td><span class="compare-level">${esc(LV[ESG_TARGET])} shared baseline</span><small class="${gap?"compare-gap":"compare-met"}">${gap?`${gap} level${gap===1?"":"s"} to grow`:"Meets target"}</small></td>`).join("")}</tr>`;
 }).join("");
 return`<div class="page-intro"><p class="eyebrow">INTERNAL MOBILITY</p><h1>Compare roles side by side</h1><p>Choose two or three roles to see readiness and skill requirements together. Use the comparison as a conversation starter—not a hiring or promotion decision.</p></div>
 <section class="compare-picker panel"><div class="compare-picker-heading"><div><h2>Choose roles to compare</h2><p>Select two or three. Your current target role is preselected.</p></div><span class="selection-count">${roles.length} of 3 selected</span></div>
  <div class="role-options">${Object.keys(ROLES).map(role=>`<label class="role-option ${roles.includes(role)?"selected":""}"><input type="checkbox" data-compare-role="${esc(role)}" ${roles.includes(role)?"checked":""}><span class="role-option-copy"><b>${esc(role)}</b><small>${Object.keys(ROLES[role]).length} role skills</small></span><span class="role-check" aria-hidden="true">${roles.includes(role)?"✓":"+"}</span></label>`).join("")}</div>
 </section>
 <section class="compare-results"><div class="section-heading"><div><p class="eyebrow">YOUR COMPARISON</p><h2>Readiness at a glance</h2></div><span class="compare-context">${esc(S.name)||"Employee profile"} · ${esgSummary().rated} ESG ratings included</span></div>
  <div class="compare-score-grid">${roles.map(role=>{const fit=roleFit(role);return`<article class="compare-score-card ${role===S.target?"is-target":""}"><div class="compare-card-top"><span class="compare-label">${role===S.target?"CURRENT TARGET":"ROLE OPTION"}</span><button type="button" class="set-target" data-role="${esc(role)}" ${role===S.target?"disabled":""}>${role===S.target?"Selected target":"Set as target"}</button></div><h3>${esc(role)}</h3><div class="compare-score-line"><strong>${fit.score}%</strong><span>readiness</span></div><div class="compare-meter" role="img" aria-label="${fit.score}% skill fit"><span style="width:${fit.score}%"></span></div><p>${fit.gaps.length?`${fit.gaps.length} assessed skill${fit.gaps.length===1?"":"s"} to develop`:"No gaps in assessed skills"}</p></article>`}).join("")}</div>
 </section>
 <section class="compare-table-section"><div class="section-heading"><div><p class="eyebrow">SKILL-BY-SKILL VIEW</p><h2>What each role asks for</h2></div></div>
  <div class="compare-table-wrap"><table class="compare-table"><thead><tr><th scope="col">Skill</th><th scope="col">Current level</th>${roles.map(role=>`<th scope="col">${esc(role)}<small>Target level</small></th>`).join("")}</tr></thead><tbody>${skillRows}${esgRowsHtml}</tbody></table></div>
  <p class="privacy-note">Role requirements are example mappings for this prototype. ESG skills use a shared ${esc(LV[ESG_TARGET])} baseline. Unrated ESG competencies are not included. Verify requirements with your organization before making development decisions.</p>
 </section>`;
};

V.gaps=()=>{
 if(!hasSkills())return`<h1 style="font-size:2.4rem">Skill Gap Analysis</h1>${needData()}`;
 const a=analyse();
 return`<p class="eyebrow">SKILL GAPS · CURRENT LEVEL VS TARGET</p>
 <h1 style="font-size:2.4rem">Skill Gap Analysis</h1>
 <p>A <b>skill gap</b> is the difference between the skills someone has now and the skills needed for a target role. This page helps identify what to practise or learn next.</p>
 <p>${esc(S.name)||"This employee"} compared with the <b>${esc(S.target)}</b> role and the shared ESG development baseline. The dark marker shows the target level.</p>
 <p class="privacy-note">${esgSummary().rated} of ${ESG_SKILLS.length} ESG competencies rated; unrated competencies are excluded. <a href="#skills">Update ratings in Skills Analysis</a></p>
 ${[...new Set(a.rows.map(r=>r.category))].map(category=>`<section class="gap-group"><p class="eyebrow">${category==="Role skills"?"SKILL GAPS":"ESG · ENVIRONMENTAL, SOCIAL & GOVERNANCE"}</p><h2>${esc(category==="Role skills"?"Role skills":"ESG skills")}</h2>${a.rows.filter(r=>r.category===category).map(r=>`<div class="gaprow ${r.gap?"gap":""}">
  <span style="display:flex;justify-content:space-between;gap:1rem"><b>${r.k}</b><span class="tag ${r.gap?"":"ok"}">${r.gap?`Gap of ${r.gap} level${r.gap>1?"s":""}`:"Meets target"}</span></span>
  <div class="track"><div class="fill" style="width:${r.have/5*100}%"></div><div class="mark" style="left:calc(${r.need/5*100}% - 1px)"></div></div>
  <span class="lvl">Now: ${LV[r.have]} · Needed: ${LV[r.need]}</span></div>`).join("")}</section>`).join("")}
 <p><a class="btn" href="#training">Get training recommendations</a></p>`;
};

V.training=()=>{
 if(!hasSkills())return`<h1 style="font-size:2.4rem">Training Recommendations</h1>${needData()}`;
 const a=analyse(),top=a.gaps.slice(0,3);
 const phases=["Review the priority gaps with the employee and agree on goals.","Complete the recommended courses, one skill at a time.","Apply the skills in a practical project with a manager or coach.","Review progress, update the profile, and plan the next role step."];
 return`<h1 style="font-size:2.4rem">Training Recommendations</h1>
 ${top.length?`<p>Recommended from the highest role-skill and rated ESG gaps for <b>${esc(S.target)}</b>.</p>
 <div class="grid">${top.map(r=>{const l=learnFor(r.k);return`<div class="card"><span class="tag">Gap: ${esc(r.k)}</span><p class="lvl">${esc(r.category)}</p><h3 style="margin-top:.6rem">${esc(l[0])}</h3><p><b>Project:</b> ${esc(l[2])}</p><p style="margin-top:.8rem"><a href="${l[1]}" target="_blank" rel="noopener">View course</a></p></div>`}).join("")}</div>`
 :`<div class="empty">No rated gaps found. ${esc(S.name)||"The employee"} meets the targets assessed so far.</div>`}
 <p class="privacy-note">${esgSummary().rated} of ${ESG_SKILLS.length} ESG competencies rated. <a href="#skills">Complete or update ESG ratings in Skills Analysis</a> to include those competencies in recommendations.</p>
 <section style="margin-top:2.5rem"><h2>Professional Roadmap</h2>
 ${phases.map((p,i)=>`<div class="phase"><b>Phase ${i+1}</b><br>${p}</div>`).join("")}</section>
 <p><a class="btn" href="#results">View analysis results</a></p>`;
};

V.coach=()=>`
 <div class="page-intro"><p class="eyebrow">COPILOT GROWTH COACH</p><h1>Talk through your next step</h1><p>Ask follow-up questions, explore roles, or build a practical plan with GitHub Copilot. Your profile and recent chat are sent through the local backend to GitHub Copilot when you send a message.</p></div>
 <div class="copilot-disclaimer notice" id="copilot-status" role="status"><span class="status-pulse"></span><span>Checking local Copilot setup…</span></div>
 <section class="copilot-shell">
  <div class="copilot-prompts"><span class="prompt-heading">START WITH A PROMPT</span>
   <button class="prompt" type="button" data-question="Help me build a practical 30-day development plan for my target role.">Build a 30-day plan <span>→</span></button>
   <button class="prompt" type="button" data-question="Help me prepare a supportive conversation with my manager about career growth.">Prepare for a manager chat <span>→</span></button>
   <button class="prompt" type="button" data-question="Compare my target role with two other roles that could suit my interests.">Explore another career path <span>→</span></button>
   <p class="privacy-note">Messages and this profile context are sent to GitHub Copilot through the local backend. Avoid adding sensitive employee information.</p>
  </div>
  <div class="copilot-chat">
   <div class="chat-header"><div class="copilot-avatar">✦</div><div><b>Copilot</b><small>Career growth assistant · GitHub Copilot SDK</small></div><button type="button" class="clear-chat" data-act="clear-chat">Clear chat</button></div>
   <div class="chat-messages" id="coach-answer" aria-live="polite" aria-relevant="additions text">${coachMessages.length?coachMessages.map(m=>`<div class="chat-message ${m.role==="user"?"user-message":"assistant-message"}"><span>${m.role==="user"?"YOU":"COPILOT"}</span><p>${esc(m.content)}</p></div>`).join(""):`<div class="chat-welcome"><span>✦</span><h2>Your growth is a good place to start.</h2><p>Ask about your skill gaps, a role comparison, a learning plan, or anything you want to explore. Continue with follow-up questions.</p></div>`}</div>
   <form id="coach-form" class="chat-composer"><label class="sr-only" for="coach-question">Message Copilot</label><textarea id="coach-question" rows="2" placeholder="Ask Copilot a question…" required></textarea><button class="btn" type="submit" id="coach-send">Send <span aria-hidden="true">↑</span></button><small>Copilot usage follows your GitHub plan and its model limits. There’s no app-imposed question counter.</small></form>
  </div>
 </section>`;

V.results=()=>{
 if(!hasSkills())return`<h1 style="font-size:2.4rem">Analysis Results</h1>${needData()}`;
 const a=analyse(),name=esc(S.name)||"This employee";
 const msg=a.score>=80?"strong alignment with":a.score>=50?"good progress toward":"early steps toward";
 return`<h1 class="screen-only" style="font-size:2.4rem">Readiness Summary</h1>
 <section class="print-only print-report" aria-label="Printable career growth report">
  <p class="eyebrow">SKILLGAP ANALYZER · EMPLOYEE DEVELOPMENT</p>
  <h1>Career Growth Report</h1>
  <p class="print-date">Prepared ${new Date().toLocaleDateString()}</p>
  <div class="print-profile">
   ${S.name?`<p><b>Employee:</b> ${esc(S.name)}</p>`:""}
   ${S.role?`<p><b>Current role:</b> ${esc(S.role)}</p>`:""}
   <p><b>Target role:</b> ${esc(S.target)}</p>
   <p><b>Readiness:</b> ${a.score}%</p>
   ${S.goals?`<p><b>Career goals:</b> ${esc(S.goals)}</p>`:""}
  </div>
  <h2>Role-skill assessment</h2>
  <table class="print-skills"><thead><tr><th>Skill</th><th>Current level</th><th>Target level</th><th>Assessment</th></tr></thead>
   <tbody>${a.rows.filter(r=>r.category==="Role skills").map(r=>`<tr><td>${esc(r.k)}</td><td>${LV[r.have]}</td><td>${LV[r.need]}</td><td>${r.gap?`Development opportunity (${r.gap} level${r.gap>1?"s":""})`:"Meets target"}</td></tr>`).join("")}</tbody>
  </table>
  <h2>ESG skills assessment</h2>
  <p>${esgSummary().rated} of ${ESG_SKILLS.length} competencies rated; ESG readiness: ${esgSummary().score===null?"Not yet assessed":`${esgSummary().score}%`} (shared ${LV[ESG_TARGET]} baseline).</p>
  <table class="print-skills"><thead><tr><th>Category</th><th>Competency</th><th>Current level</th><th>Target level</th><th>Assessment</th></tr></thead>
   <tbody>${esgRows().map(r=>`<tr><td>${esc(r.category)}</td><td>${esc(r.k)}</td><td>${LV[r.have]}</td><td>${LV[r.need]}</td><td>${r.gap?`Development opportunity (${r.gap} level${r.gap>1?"s":""})`:"Meets target"}</td></tr>`).join("")}</tbody>
  </table>
  <h2>Recommended next steps</h2>
  ${a.gaps.length?`<ol>${a.gaps.slice(0,3).map(r=>`<li><b>${esc(r.k)}:</b> ${esc(learnFor(r.k)[2])}</li>`).join("")}</ol>`:"<p>Discuss a stretch assignment or explore another development goal.</p>"}
  <p class="print-note">Use this assessment as a development conversation aid, not as a hiring, promotion, or performance decision. Review the plan with the employee and manager.</p>
 </section>
 <div class="results screen-only">
  <div><div class="score" style="--p:${a.score}"><div>${a.score}%</div></div></div>
  <div>
   <p>SkillGap Analyzer helps HR teams identify strengths and plan career paths across role skills and ESG competencies. ${name} shows ${msg} the <b>${esc(S.target)}</b> role with <b>${a.score}% readiness</b> across assessed skills.</p>
   <p>${a.gaps.length?`Priority gaps: <b>${a.gaps.slice(0,3).map(g=>g.k).join(", ")}</b>. We recommend targeted learning and practical projects to connect ${name}’s goals and potential to a clear roadmap.`:"No gaps found among assessed competencies. Unrated ESG competencies are excluded; review them in Skills Analysis."}</p>
   <p><b>ESG assessment:</b> ${esgSummary().rated}/${ESG_SKILLS.length} competencies rated${esgSummary().score===null?"":`, ${esgSummary().score}% readiness`}. Unrated competencies are excluded from the overall score.</p>
   ${S.goals?`<p><b>Career goals:</b> ${esc(S.goals)}</p>`:""}
  </div>
 </div>
 <p class="readiness-results-link screen-only"><a class="btn" href="#readiness">Open readiness dashboard <span aria-hidden="true">→</span></a></p>
 <section class="internal-section screen-only"><h2>Other internal growth opportunities</h2>
  <p>These role matches use rated role skills and ESG competencies. Use them to start a conversation, not as a hiring or promotion decision.</p>
  <div class="grid">${internalMatches().map(m=>`<article class="card match-card"><span class="tag ok">${m.score}% skill fit</span><h3>${esc(m.role)}</h3><p>${m.gaps.length?`Skills to explore: ${m.gaps.slice(0,2).map(esc).join(", ")}.`:"Current ratings meet the skills mapped to this role."}</p><button class="btn ghost" type="button" data-role="${esc(m.role)}">Compare this role</button></article>`).join("")}</div>
 </section>
 <section class="noprint screen-only" style="margin-top:2rem"><h2>Save &amp; Share Results</h2>
  <p>HR teams can export results, share progress, and save a growth plan for future career tracking.</p>
  <div class="grid">
   <div class="card"><h3>Download PDF</h3><p>Get a report of this employee’s skills, growth opportunities, and next steps.</p><p style="margin-top:.8rem"><button class="btn" data-act="pdf">Export Report</button></p></div>
   <div class="card"><h3>Share Profile</h3><p>Copy a concise, text-based summary with role, readiness, priority gaps, goals, and rated skills.</p><p style="margin-top:.8rem"><button class="btn alt" data-act="share">Copy Growth Summary</button></p></div>
   <div class="card"><h3>Save Growth Plan</h3><p>Save a dated snapshot of this profile and its readiness analysis in this browser.</p><p style="margin-top:.8rem"><button class="btn ghost" data-act="save">${savedGrowthPlan()?"Update Saved Plan":"Save Growth Plan"}</button></p>${savedGrowthPlan()?`<p class="saved-status">Saved ${esc(new Date(savedGrowthPlan().savedAt).toLocaleString())} on this device.</p>`:""}</div>
  </div></section>`;
};

/* ---------- ROUTER ---------- */
function render(){
 const requested=(location.hash||"#home").slice(1);
 const page=requested==="esg"?"skills":V[requested]?requested:"home";
 $("#app").innerHTML=V[page]();
 document.querySelectorAll("#nav a").forEach(a=>a.classList.toggle("on",a.dataset.p===page));
 const activeLink=document.querySelector(`#nav a[data-p="${page}"]`);
 const pageLabel=activeLink?activeLink.querySelector(".nav-label").textContent:"Home";
 $("#page-label").textContent=pageLabel;
 document.title=page==="home"?"SkillGap Analyzer":`${pageLabel} | SkillGap Analyzer`;
 if(requested==="esg")$("#esg-assessment").scrollIntoView();
 else window.scrollTo(0,0);
 if(page==="coach")updateCopilotStatus();
}
window.addEventListener("hashchange",render);

function updateCopilotStatus(){
 const status=$("#copilot-status");if(!status)return;
 fetch("/api/status").then(response=>{
  if(!response.ok)throw new Error(`Local service returned HTTP ${response.status}`);
  return response.json();
 }).then(data=>{
  status.classList.toggle("service-ready",Boolean(data.available));
  status.innerHTML=`<span class="status-pulse"></span><span>${esc(data.message)}</span>`;
 }).catch(()=>{
  status.classList.remove("service-ready");
  status.innerHTML='<span class="status-pulse"></span><span>Copilot backend is not reachable. Start <code>run.bat</code>, then open its app address. If it selected port 8081, <a href="http://localhost:8081/#coach">open the backend version here</a>.</span>';
 });
}

function showChatMessages(){
 const output=$("#coach-answer");if(!output)return;
 output.innerHTML=coachMessages.map(message=>`<div class="chat-message ${message.role==="user"?"user-message":message.role==="error"?"chat-error":"assistant-message"}"><span>${message.role==="user"?"YOU":message.role==="error"?"NOTICE":"COPILOT"}</span><p>${esc(message.content)}</p></div>`).join("");
 output.scrollTop=output.scrollHeight;
}

async function sendCopilotMessage(){
 const input=$("#coach-question"),button=$("#coach-send"),question=input.value.trim();
 if(!question)return;
 const priorMessages=coachMessages.filter(message=>message.role!=="error");
 const history=priorMessages.slice(-MAX_CHAT_HISTORY_MESSAGES).map(({role,content})=>({
  role,
  content:content.slice(-MAX_CHAT_HISTORY_MESSAGE_CHARS)
 }));
 coachMessages.push({role:"user",content:question});
 showChatMessages();
 input.value="";button.disabled=true;button.textContent="Thinking…";
 const analysis=analyse();
 const profile={
  name:S.name,role:S.role,target:S.target,goals:S.goals,
  skills:S.skills,esg:S.esg,readiness:analysis.score,
  priorityGaps:analysis.gaps.slice(0,5).map(gap=>gap.k)
 };
 try{
  const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
   message:question,profile,history
  })});
  const contentType=response.headers.get("content-type")||"";
  let data=null;
  if(contentType.includes("application/json")){
   try{data=await response.json()}catch{throw new Error(`The local service returned invalid JSON (HTTP ${response.status}).`)}
  }
  if(!response.ok){
   if(response.status===501&&!data){
    throw new Error("This page is connected to a static preview, not the SkillGap backend. Start run.bat and open the address it launches (usually http://localhost:8081/).");
   }
   throw new Error(data?.error||`The local service returned HTTP ${response.status}.`);
  }
  if(!data)throw new Error(`The local service returned an unexpected response (HTTP ${response.status}). Start run.bat and open the address it launches.`);
  if(typeof data.reply!=="string"||!data.reply.trim())throw new Error("Copilot returned an empty reply. Try again.");
  coachMessages.push({role:"assistant",content:data.reply.trim()});
  showChatMessages();
 }catch(error){
  const message=error instanceof TypeError
   ?"Could not reach the local SkillGap backend. Start run.bat, then use the app address opened by the launcher and try again."
   :error.message||"Copilot could not respond. Check the local backend and Copilot CLI sign-in, then try again.";
  coachMessages.push({role:"error",content:message});
  showChatMessages();
 }finally{
  button.disabled=false;button.innerHTML='Send <span aria-hidden="true">↑</span>';input.focus();
 }
}

function buildGrowthPlan(){
 const question=$("#coach-question").value.trim();
 const output=$("#coach-answer");
 if(!question){toast("Pick a prompt or tell us what’s on your mind 💛");return}
 const analysis=analyse();
 const topGap=analysis.gaps[0];
 const bestSkill=analysis.rows.filter(row=>row.have>0).sort((a,b)=>b.have-a.have)[0];
 const topic=question.toLowerCase();
 const isConversation=/manager|conversation|chat|confidence/.test(topic);
 const isPath=/role|path|opportunit|explore/.test(topic);
 const isMonth=/30.day|month|plan/.test(topic);
 const result=document.createElement("article");
 result.className="local-plan";
 const header=document.createElement("div");
 header.className="local-plan-header";
 const icon=document.createElement("span");
 icon.className="local-plan-icon";
 icon.setAttribute("aria-hidden","true");
 icon.textContent=isConversation?"💬":isPath?"🧭":isMonth?"🌱":"✨";
 header.append(icon);
 const title=document.createElement("h2");
 title.textContent=isConversation?"A confidence-boosting conversation":isPath?"A path worth exploring":isMonth?"A gentle 30-day plan":"Your next little win";
 header.append(title);
 result.append(header);
 const intro=document.createElement("p");
 intro.textContent=`A few ideas for growing toward ${S.target}—take what feels right and leave the rest.`;
 result.append(intro);
 const curiosity=document.createElement("p");
 curiosity.className="plan-question";
 curiosity.textContent=`You’re curious about: “${question}”`;
 result.append(curiosity);

 const addSection=(heading,items)=>{
  const section=document.createElement("section");
  section.className="plan-step";
  const h3=document.createElement("h3");
  h3.textContent=heading;
  section.append(h3);
  const list=document.createElement("ul");
  items.forEach(text=>{
   const item=document.createElement("li");
   item.textContent=text;
   list.append(item);
  });
  section.append(list);
  result.append(section);
 };
 if(bestSkill){
  const strength=document.createElement("p");
  strength.className="plan-strength";
  strength.textContent=`🌟 A strength to celebrate: ${bestSkill.k} is already at ${LV[bestSkill.have]}. That’s a lovely place to build from.`;
  result.append(strength);
 }
 if(isConversation){
  addSection("Try opening with a curious question",[
   `“Which part of working toward ${S.target} feels most exciting to you?”`,
   "“What kind of support or practice would make the next step feel achievable?”",
   topGap?`“Would you like to explore a small project in ${topGap.k} together?”`:"“What would you love to try next?”"
  ]);
 }else if(isPath){
  const paths=internalMatches().slice(0,2);
  addSection("Low-pressure ways to explore",[
   ...paths.map(path=>`Explore ${path.role} as a conversation starter (${path.score}% skill fit)—compare the role’s skills and see what sparks interest.`),
   topGap?`Try one small project using ${topGap.k} before making any big decisions.`:"Ask for a short shadowing session or a friendly chat with someone in a role of interest."
  ]);
 }else if(isMonth){
  const first=topGap?learnFor(topGap.k):null;
  addSection("One small step each week",[
   first?`Week 1 · Explore ${first[0]} and choose one idea to try.`:"Week 1 · Pick a stretch task that sounds fun and a little challenging.",
   topGap?`Week 2 · Try it out: ${LEARN[topGap.k][2]}`:"Week 2 · Practice your chosen skill on a real, low-pressure task.",
   "Week 3 · Share what you learned with a supportive teammate and ask for one useful tip.",
   "Week 4 · Celebrate the progress, update the ratings, and choose what you’d like to try next 🎉"
  ]);
 }else{
  addSection("A friendly next step",[
   topGap?`Start with ${topGap.k}: ${LEARN[topGap.k][2]}`:"Explore a stretch project or a new role that sounds energizing.",
   "Keep it small enough to try this week, then notice what felt interesting.",
   "Ask someone you trust for feedback—and remember, progress isn’t a race."
  ]);
 }
 const closing=document.createElement("p");
 closing.className="plan-closing";
 closing.textContent="You don’t need a perfect plan—just a next step that feels like yours. 💛";
 result.append(closing);
 output.replaceChildren(result);
}

document.addEventListener("submit",async e=>{
 if(e.target.id==="coach-form"){e.preventDefault();await sendCopilotMessage();return}
 if(e.target.id!=="pf")return;e.preventDefault();
 S.name=$("#n").value.trim();S.role=$("#r").value.trim();S.target=$("#t").value;S.goals=$("#g").value.trim();
 save();toast("Profile saved — your next chapter starts here! 🌱");location.hash="#skills";
});
document.addEventListener("input",e=>{
 const k=e.target.dataset&&e.target.dataset.k;if(!k)return;
 S.skills[k]=+e.target.value;save();
 e.target.parentElement.querySelector(".lvl").textContent=LV[e.target.value];
});
document.addEventListener("change",e=>{
 const compareRole=e.target.dataset&&e.target.dataset.compareRole;
 if(compareRole){
  let roles=selectedRoles();
  if(e.target.checked){
   if(roles.length>=3){e.target.checked=false;toast("Compare up to three roles at a time.");return}
   roles=[...roles,compareRole];
  }else{
   if(roles.length<=2){e.target.checked=true;toast("Choose at least two roles to compare.");return}
   roles=roles.filter(role=>role!==compareRole);
  }
  S.compareRoles=roles;save();render();return;
 }
 const k=e.target.dataset&&e.target.dataset.esgK;if(!k)return;
 if(e.target.value==="")delete S.esg[k];
 else S.esg[k]=+e.target.value;
 save();
 const note=$("#esg-rating-status");
 const rated=esgSummary().rated;
 note.textContent=`${rated} of ${ESG_SKILLS.length} ESG competencies rated. ${ESG_SKILLS.length-rated?`${ESG_SKILLS.length-rated} unrated competencies will not yet affect the analysis.`:"All ESG competencies are included in the analysis."}`;
});
document.addEventListener("click",e=>{
 const compareButton=e.target.closest("button[data-compare-role]");
 if(compareButton){
  const role=compareButton.dataset.compareRole;
  const roles=selectedRoles();
  if(!roles.includes(role)){
   S.compareRoles=roles.length>=3?[...roles.slice(0,2),role]:[...roles,role];
  }else S.compareRoles=roles;
  save();location.hash="#compare";return;
 }
 const target=e.target.closest("[data-role]");
 if(target){S.target=target.dataset.role;S.compareRoles=[...new Set([S.target,...selectedRoles().filter(role=>role!==S.target)])].slice(0,3);save();location.hash="#compare";return}
 const question=e.target.closest("[data-question]");
 if(question){$("#coach-question").value=question.dataset.question;$("#coach-question").focus();return}
 const clearChat=e.target.closest('[data-act="clear-chat"]');
 if(clearChat){coachMessages=[];showChatMessages();const output=$("#coach-answer");output.innerHTML='<div class="chat-welcome"><span>✦</span><h2>Your growth is a good place to start.</h2><p>Ask about your skill gaps, a role comparison, a learning plan, or anything you want to explore. Continue with follow-up questions.</p></div>';return}
 const action=e.target.closest("[data-act]");
 const act=action&&action.dataset.act;if(!act)return;
 const a=analyse();
 if(act==="pdf")window.print();
 if(act==="save"){
  try{
   localStorage.setItem("skillgap-growth-plan",JSON.stringify({
    savedAt:new Date().toISOString(),
    profile:JSON.parse(JSON.stringify(S)),
    readiness:a.score,
    priorityGaps:a.gaps.slice(0,3).map(g=>g.k)
   }));
   toast("Saved! One more little win for your future ✨");
   render();
  }catch(error){
   toast("Could not save the growth plan. Check browser storage and try again.");
  }
 }
 if(act==="share"){
  const text=growthSummary();
  if(navigator.clipboard){
   navigator.clipboard.writeText(text).then(
    ()=>toast("Growth summary copied."),
    ()=>toast("Copy failed. Check clipboard permission and try again.")
   );
  }else{
   window.prompt("Copy this growth summary:",text);
  }
 }
});
render();

// Sidebar controls: compact mode on desktop and drawer mode on smaller screens.
const sidebar=$("#sidebar"), sidebarToggle=$("#sidebar-toggle"), mobileMenu=$("#mobile-menu");
if(sidebarToggle)sidebarToggle.addEventListener("click",()=>{
 const compact=sidebar.classList.toggle("compact");
 sidebarToggle.setAttribute("aria-expanded",String(!compact));
 sidebarToggle.setAttribute("aria-label",compact?"Expand sidebar":"Collapse sidebar");
 const label=sidebarToggle.querySelector(".toggle-label");if(label)label.textContent=compact?"Expand menu":"Collapse menu";
});
if(mobileMenu)mobileMenu.addEventListener("click",()=>sidebar.classList.toggle("mobile-open"));
document.addEventListener("click",e=>{
 if(window.matchMedia("(max-width: 760px)").matches && sidebar.classList.contains("mobile-open") && !e.target.closest("#sidebar") && !e.target.closest("#mobile-menu"))sidebar.classList.remove("mobile-open");
});
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>sidebar.classList.remove("mobile-open")));
