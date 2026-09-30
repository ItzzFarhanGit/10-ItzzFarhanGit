/* ===== FARVO shared data — edit here, both pages update ===== */
const WA='94773042864';
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

/* live:"" => card shows "Request Demo" (WhatsApp). Put a URL to enable Live Demo. */
const PROJECTS=[
  {t:"Online Bookstore System",c:"web",tag:"Web System",d:"Browse, cart, and order books with an admin-managed catalog.",stack:["PHP","MySQL","Bootstrap"],img:"Online Book StoreSystem.png"},
  {t:"Online Car Booking System",c:"web",tag:"Booking Platform",d:"Vehicle listing, availability, and booking workflow.",stack:["PHP","MySQL","JS"],img:"Online Car Booking System.png"},
  {t:"Online Clinic Management System",c:"mgmt",tag:"Management",d:"Patient records, appointments, and doctor scheduling.",stack:["PHP","MySQL"],img:"Online Clinic Management System .png"},
  {t:"Eastern Business Directory",c:"web",tag:"Directory",d:"Searchable local business listing platform.",stack:["PHP","MySQL"],img:"Eastern Business Directory.png"},
  {t:"Employee Management System",c:"mgmt",tag:"Management",d:"Staff records, attendance, and role-based access.",stack:["PHP","MySQL"],img:"Employee Management System.png"},
  {t:"Event Management System",c:"mgmt",tag:"Management",d:"Event creation, RSVP tracking, and scheduling.",stack:["PHP","MySQL"],img:"Event Management System.png"},
  {t:"Online Food Ordering System",c:"web",tag:"Web System",d:"Menu browsing, cart, and order tracking for restaurants.",stack:["PHP","MySQL","JS"],img:"Online Food Ordering System.png"},
  {t:"Online Hardware Shop",c:"web",tag:"E-Commerce",d:"Product catalog and order management for a hardware store.",stack:["PHP","MySQL"],img:"Online Hardware Shop.png"},
  {t:"Lost & Found Items Tracking System",c:"tool",tag:"Tool",d:"OTP-verified reporting and claim workflow with an admin panel.",stack:["PHP","MySQL","PHPMailer"],img:"Lost & Found Items Tracking System.png"},
  {t:"Smart Class Attendance System",c:"tool",tag:"Tool",d:"Automated attendance tracking for classrooms.",stack:["PHP","MySQL"],img:"Smart Class Attendance System.png"},
  {t:"Student Assist System",c:"mgmt",tag:"Management",d:"Multi-module student portal with timetables and past papers.",stack:["PHP","MySQL","JS"],img:"Student Assist System.png"},
  {t:"Online Wedding Hall Booking System",c:"web",tag:"Booking Platform",d:"Hall listings, date availability, and booking requests.",stack:["PHP","MySQL"],img:"Online Wedding Hall Booking System.png"},
  {t:"Internship & Placement App",c:"tool",tag:"Tool",d:"Internship listings with an auto CV builder.",stack:["PHP","MySQL","JS"],img:"Internship & Placement App.png"},
  {t:"Medical Laboratory Management System",c:"mgmt",tag:"Management",d:"Lab test requests, results, and report generation.",stack:["PHP","MySQL"],img:"Medical Laboratory Management System.png"},
  {t:"College Management System (OCR)",c:"tool",tag:"Tool",d:"Tesseract OCR pipeline extracting grades into official transcripts.",stack:["PHP","Tesseract","MySQL"],img:"College Management System.png"},
  {t:"ShoeLand — Online Shoe Store",c:"web",tag:"E-Commerce",d:"Online shoe store with new arrivals, collections, gallery and customer login.",stack:["PHP","MySQL","Bootstrap"],img:"shoeland.png",live:"http://farvo-shoeland.atwebpages.com/index.php"},
  {t:"FARVO AI Chatbot",c:"ai",tag:"AI Project",d:"AI assistant powered by Google Gemini that writes, codes, explains and plans. Sign in and chats follow you from phone to desktop.",stack:["Gemini AI","JavaScript","Vercel"],img:"farvo-ai-chatbot.png",live:"https://farvo-ai-chatbot.vercel.app"}
];

const LI='https://www.linkedin.com/in/mohamedfarhan-it/details/certifications/';
/* Format: "Title|Issuer|Certificate file name" inside G(date,...) OR "Title|Issuer|Date|File name". Files live in certificates/ */
const G=(d,...a)=>a.map(s=>{const[t,i,f]=s.split('|');return[t,i,d,f].join('|')});
const CERTS=[
...G('Sep 2026',
  'Professional Networking for Career Growth|HP LIFE|Farhan HP Life Professional Networking for Career Growth Certificate.jpg',
  'Human Resource Management|Harwest International Business College|Farhan Harwest International Business College HRM Certificate.jpg',
  'Microsoft Security Essentials: Concepts, Solutions, and AI-Powered Protection|LinkedIn Learning|Farhan Linkedln Learning Microsoft Security Essentials Concepts Solutions and AIPowered Protection Certificate.jpg',
  'Gen AI Use in the Research Workflow|Elsevier Researcher Academy|Farhan Researcher Academy Gen AI Use Research Workflow Certificate.jpg',
  'How to Enhance Your Chances of Serendipitous Research Discovery|Elsevier Researcher Academy|Farhan Researcher Academy Enhance Chance Serendipitous Research Discovery Certificate.jpg',
  'Research Design (Researcher Academy Certification)|Elsevier Researcher Academy|Farhan Researcher Academy Research Design Certificate.jpg',
  'How to Integrate Sex, Gender, and Intersectional Analysis into Research|Elsevier Researcher Academy|Farhan Researcher Academy Intersectional Analysis Into Research Certificate.jpg',
  'Using Generative and Agentic AI in the Literature Review|Elsevier Researcher Academy|Farhan Researcher Academy Generative and Agentic AI Certificate.jpg',
  'Ethical AI in Research: Evaluating Tools and Applying Best Practices|Elsevier Researcher Academy|Farhan Researcher Academy Ethical AI in Research Certificate.jpg',
  'SQL (Advanced)|HackerRank|Farhan HackerRank SQL (Advanced) Certificate.jpg',
  'Java (Basic)|HackerRank|Farhan HackerRank Java (Basic) Certificate.jpg',
  'SQL (Intermediate)|HackerRank|Farhan HackerRank SQL (Intermediate) Certificate.jpg',
  'CSS (Basic)|HackerRank|Farhan HackerRank CSS (Basic) Certificate.jpg',
  'SQL (Basic)|HackerRank|Farhan HackerRank SQL (Basic) Certificate.jpg',
  'Basics of UI Design|UniAthena|Farhan Uniathena Basic of UI Certificate.jpg',
  'Building with the Claude API|Anthropic|Farhan Anthropic Claude With a Anthropic API Certificate.jpg',
  'AI Fluency: Framework & Foundations|Anthropic|Farhan Anthropic AI Fluency - Framwork&Foundation Certificate.jpg',
  'Claude Code in Action|Anthropic|Farhan Anthropic Claude Code in Action Certificate.jpg',
  'Introduction to Claude Cowork|Anthropic|Farhan Anthropic Introduction to Claude Cowork Certificate.jpg',
  'Claude Platform 101|Anthropic|Farhan Anthropic Claude Platform 101 Certificate.jpg',
  'Claude Code 101|Anthropic|Farhan Anthropic Claude Code 101 Certificate.jpg',
  'Claude 101|Anthropic|Farhan Anthropic Claude 101 Certificate.jpg',
  'Microsoft Azure Essentials by Microsoft Press|LinkedIn Learning|Farhan Microsoft Azure Essentials by Microsoft Press Certificate.jpg',
  'Basics of UI UX Strategy|UniAthena|Farhan Uniathena Basics of UI UX Strategy Certificate.jpg',
  'Basics of Artificial Intelligence|UniAthena|Farhan Uniathena Basic in AI Certificate.jpg',
  'Microsoft Azure Essentials Professional Certificate|Microsoft|Farhan Microsoft Azure Essentials Professional Linkdin Microsoft  Certificate.jpg'),
...G('Aug 2026',
  'Basics of Motivation and Leadership|UniAthena|Farhan Uniathena Basics of Motivation and Leadership Certificate.jpg',
  'Basics in Human Resource Management|UniAthena|Farhan Uniathena Basic in HRM Certificate.jpg',
  'Gemini Certified Educator|Google for Education|Farhan Gemini Educator Certificate.png',
  'Gemini Certified Student|Google for Education|Farhan Gemini Student Certificate.png',
  'Getting Started with Cisco Packet Tracer|Cisco Networking Academy|Farhan Cisco Packet Tracer Certificate.jpg',
  'JavaScript Essentials 1|Cisco Networking Academy|Farhan Cisco JavaScript Essentials 1 Certificate.jpg',
  'AZ-104: Microsoft Azure Administrator|Udemy|Farhan Udemy Microsoft Azure Administrator Certificate.jpg',
  'Build a Computer Vision App with Azure Cognitive Services|Microsoft|Farhan Coursera Build a computer vision app with Azure Cognitive Services Certificate.jpg',
  'Graphic Design: Pop Your LinkedIn with 3D Effect Using Canva|Coursera|Farhan Coursera Graphic Design Certificate.jpg',
  'MongoDB Foundations Course For Beginners|ScholarHat|Farhan ScholarHat MongoDB Foundations Certificate.jpg',
  'JavaScript Programming Course For Beginners|ScholarHat|Farhan ScholarHat JavaScript Programming Certificate.jpg',
  'C# Programming Course For Beginners|ScholarHat|Farhan ScholarHat C# Programming Certificate.jpg',
  'Java Programming Course For Beginners|ScholarHat|Farhan ScholarHat Java Programming Certificate.jpg',
  'AWS Cloud Practitioner Foundation Course|ScholarHat|Farhan ScholarHat AWS Cloud Practitioner Foundation Certificate.jpg',
  'MD-102: Microsoft 365 Endpoint Administrator (Intune)|Udemy|Farhan Microsoft 365 Endpoint Administrator Certificate.jpg',
  'Basics of Microsoft Power BI Certificate|UniAthena|Farhan Uniathena Basics of Microsoft Power BI Certificate.jpg',
  'Essentials of MS Excel - Formulas and Functions|UniAthena|Farhan Uniathena MS Excel Formulas and Functions Certificate.jpg',
  'Fundamentals of English Grammar|UniAthena|Farhan Uniathena Fundamentals of English Grammar Certificate.jpg',
  'Deep Learning Fundamentals Certificate|Cognitive Class|Farhan Cognitive Class ai Deep Learning Fundamentals Certificate.jpg',
  'SQL and Relational Databases 101|Cognitive Class|Farhan Cognitive Class ai SQL and Relational Databases Certificate.jpg',
  'Search Problems - Skillsoft Percipio Certificate of Completion|Skillsoft|Farhan SkillSoft Percipio Search Problems.jpg',
  'MongoDB Database Certificate|Cursa|Farhan Cursa MongoDB Database Certificate.jpeg',
  'Master ChatGPT|UniAthena|Farhan Uniathena Master ChatGPT Certificate.jpg',
  'Basics of Python Certificate|UniAthena|Farhan Uniathena Basic of Python Certificate.jpg',
  'Essentials of Data Visualization using MS Excel|UniAthena|Farhan Uniathena Essentials of Data Visualization using MS Excel.jpg',
  'Basics in Machine Learning|UniAthena|Farhan Uniathena Basic in Machine Learning Certificate.jpg',
  'Networking Basics|Cisco Networking Academy|Farhan Cisco Network Basic Certificate.jpg',
  'Introduction to MS Excel|SimpliLearn|Farhan Simple Learn Skill Microsoft Excel Certificate.jpg',
  'Introduction to Cybersecurity|Cisco Networking Academy|Farhan Cisco Cyber Security Certificate.jpg',
  'Azure Fundamentals|SimpliLearn|Farhan Simple Learn Skill Azure Fundamantal Certificate.jpg',
  'Basics of SQL Statements & Indexes|UniAthena|Farhan Uniathena SQL Mastery With MySQL Certificate.jpg',
  'Getting Started with Microsoft PowerPoint|Coursera|Farhan Coursera PowerPoint Certificate.jpg',
  'Git and GitHub: The Complete Start|Learnz Connect|Farhan LearnzConnect Git Github Foundation Certificate.png',
  'Artificial Intelligence Beginners Guide|SimpliLearn|Farhan Simple Learn Skill AI Beginner Certificate.jpg',
  'SQL Mastery with MySQL|Learnz Connect|Farhan LearnzConnect SQL Mastery With MySQL Certificate.png',
  'Introduction to Cyber Security|SimpliLearn|Farhan Simple Learn Skill Cyber Security Certificate.jpg',
  'Ethical Hacking 101: Beginners guide to Ethical hacking|SimpliLearn|Farhan Simple Learn Skill Ethical Hacking Certificate.jpg',
  'Java Programming for Beginners|SimpliLearn|Farhan Simple Learn Skill Java Program Certificate.jpg'),
...G('2026',
  'AI Foundations for Educators|IBM|Farhan Ai Foundations For Educators IBM Certificate.jpg',
  'C++ Essentials 1|Cisco Networking Academy|Farhan Cisco C++ Essentials 1 Certificate.jpg',
  'Ethical Hacker|Cisco Networking Academy|Farhan Cisco Ethical Hacker Certificate.jpg',
  'Google Ads: AI-Powered Performance|Google|Farhan Google Ads Ai Powered Performance Certificate.jpg',
  'Google Ads: Apps|Google|Farhan Google Ads Apps Certificate.jpg',
  'Google Ads: Search|Google|Farhan Google Ads Search Certificate.jpg',
  'Wireframing and Prototyping|IBM|Farhan Wireframing and Prototyping IBM Certificate.jpg',
  'Basic Python Programming|UniAthena|Farhan Uniathena Basic Python Programming Certificate.jpg'),
  'Speed Memory - 5 Days Workshop|IQ International|Sep 2019|FarhanSpeed Memory IQ Certificate.png',
  'Diploma in English|Social Environment and Educational Development Secretariat Sri Lanka|Apr 2023|Farhan Diploma in English Certificate.png',
  'Certificate in Office Automation|Social Environment and Educational Development Secretariat Sri Lanka|Jun 2022|Farhan Diploma in ICT Certificate.png',
  'Digital Marketing Workshop|StudyZ Academy|Aug 2024|Farhan SAC Digital Marketing Certificate.jpg'
];
const CATS=['Programming','AI','Cloud & Security','Databases','Design & Office','Business & Research'];
const CATRX=[['Business & Research',/research|serendipitous|motivation|human resource|professional networking|digital marketing|google ads|speed memory|english|grammar|office automation/i],['Cloud & Security',/cyber|ethical hack|networking basics|packet tracer|azure|aws|microsoft 365|security essentials/i],['Databases',/sql|mongo|database/i],['AI',/\bAI\b|claude|gemini|chatgpt|machine|deep learning|search problems|artificial intelligence/i],['Design & Office',/design|wireframing|prototyping|\bui\b|\bux\b|canva|excel|powerpoint|power bi|visualization/i]];
const catOf=(t,i)=>(CATRX.find(([n,r])=>r.test(t+' '+i))||['Programming'])[0];

/* ===== modal ===== */
const pm=document.createElement('div');pm.className='pm';
pm.innerHTML='<div class="pm-box glass"><button class="pm-x" aria-label="Close">&times;</button><div id="pmBody"></div></div>';
document.body.appendChild(pm);
const pmBody=pm.querySelector('#pmBody');
const openModal=h=>{pmBody.innerHTML=h;pm.classList.add('open');document.body.style.overflow='hidden'};
const closeModal=()=>{pm.classList.remove('open');pmBody.innerHTML='';document.body.style.overflow=''};
pm.addEventListener('click',e=>{if(e.target===pm||e.target.closest('.pm-x'))closeModal()});
addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const demoBtn=p=>p.live
  ?`<a class="p-btn" href="${p.live}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>`
  :`<a class="p-btn" href="${wa('Hi FARVO! I would like a live demo of '+p.t)}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Request Demo</a>`;

function openProject(i){
  const p=PROJECTS[i];
  openModal(`${p.img?`<img src="${p.img}" alt="${p.t}">`:''}<span class="tag">${p.tag}</span><h3>${p.t}</h3><p>${p.d}</p>
  <div class="project-stack" style="margin-top:12px">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
  <div class="p-actions">${demoBtn(p)}<a class="p-btn ghost" href="${wa('Hi FARVO! I want a project like '+p.t)}" target="_blank" rel="noopener">Want something similar?</a></div>`);
}

function renderProjects(grid){
  grid.innerHTML=PROJECTS.map((p,i)=>`<div class="glass project-card" data-cat="${p.c}" data-i="${i}">
    <div class="project-thumb">${p.img?`<img src="${p.img}" alt="${p.t} screenshot" loading="lazy">`:`<div class="ph"><i class="fa-solid ${p.icon||'fa-diagram-project'}"></i></div>`}</div>
    <div class="project-body"><span class="tag">${p.tag}</span><h4>${p.t}</h4><p>${p.d}</p>
    <div class="project-stack">${p.stack.map(s=>`<span>${s}</span>`).join('')}</div>
    <div class="p-actions">${demoBtn(p)}<button class="p-btn ghost" type="button">Details</button></div></div></div>`).join('');
  grid.addEventListener('click',e=>{
    if(e.target.closest('a'))return;
    const c=e.target.closest('.project-card'); if(c)openProject(+c.dataset.i);
  });
  document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    grid.querySelectorAll('.project-card').forEach(c=>c.classList.toggle('hidden',b.dataset.filter!=='all'&&c.dataset.cat!==b.dataset.filter));
  }));
}

const isPdf=f=>/\.pdf$/i.test(f);
function renderCerts(grid){
  const list=CERTS.map((s,n)=>{const[t,i,d,f]=s.split('|');return{n,t,i,d,f:f||'',u:f?'certificates/'+encodeURIComponent(f):'',c:catOf(t,i)}});
  const bar=document.createElement('div');bar.className='cert-bar';
  bar.innerHTML=`<div class="cert-chips">${['All',...CATS].map(c=>`<button type="button" class="cert-chip${c==='All'?' on':''}" data-c="${c}">${c} <b>${c==='All'?list.length:list.filter(x=>x.c===c).length}</b></button>`).join('')}</div><input class="cert-search" type="search" placeholder="Search certificates..." aria-label="Search certificates">`;
  grid.before(bar);
  const wrap=document.createElement('div');wrap.style.cssText='text-align:center;margin-top:28px';
  const more=document.createElement('button');more.type='button';more.className='btn btn-ghost';wrap.appendChild(more);grid.after(wrap);
  let cat='All',q='',all=false;
  const card=x=>`<div class="glass cert-card" data-n="${x.n}" tabindex="0"><div class="cert-thumb">${x.f&&!isPdf(x.f)?`<img src="${x.u}" alt="${x.t}" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover" onerror="this.replaceWith(Object.assign(document.createElement('i'),{className:'fa-solid fa-certificate'}))">`:'<i class="fa-solid fa-certificate"></i>'}</div><div class="cert-body"><h4>${x.t}</h4><p>${x.i}</p><span class="cert-view">${x.d} &bull; View</span></div></div>`;
  const draw=()=>{
    const m=list.filter(x=>(cat==='All'||x.c===cat)&&(x.t+' '+x.i).toLowerCase().includes(q));
    const full=all||q||cat!=='All';
    grid.innerHTML=(full?m:m.slice(0,12)).map(card).join('')||'<p class="cert-empty">No certificates found.</p>';
    wrap.hidden=full||m.length<=12;more.textContent=`Show all ${m.length} certificates`;
  };
  bar.addEventListener('click',e=>{const b=e.target.closest('.cert-chip');if(!b)return;cat=b.dataset.c;bar.querySelectorAll('.cert-chip').forEach(x=>x.classList.toggle('on',x===b));draw()});
  bar.querySelector('input').addEventListener('input',e=>{q=e.target.value.trim().toLowerCase();draw()});
  more.onclick=()=>{all=true;draw()};
  const open=el=>{
    const x=list[+el.dataset.n];
    const view=x.f?(isPdf(x.f)?`<iframe src="${x.u}" title="${x.t}"></iframe>`:`<img src="${x.u}" alt="${x.t}" onerror="this.outerHTML='<p>Certificate file not found in the certificates/ folder.</p>'">`):'';
    openModal(`<span class="tag">${x.c}</span><h3>${x.t}</h3><p>${x.i} &bull; Issued ${x.d}</p>${view}<div class="p-actions"><a class="p-btn" href="${LI}" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin-in"></i> Verify on LinkedIn</a>${x.f?`<a class="p-btn ghost" href="${x.u}" target="_blank" rel="noopener">Open full size</a><a class="p-btn ghost" href="${x.u}" download><i class="fa-solid fa-download"></i> Download</a>`:''}</div>`);
  };
  grid.addEventListener('click',e=>{const c=e.target.closest('.cert-card');if(c)open(c)});
  grid.addEventListener('keydown',e=>{if(e.key==='Enter'){const c=e.target.closest('.cert-card');if(c)open(c)}});
  draw();
}
