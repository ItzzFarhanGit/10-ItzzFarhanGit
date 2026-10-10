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
  {t:"FARVO AI Chatbot",c:"ai",tag:"AI Project",d:"AI assistant powered by Google Gemini that writes, codes, explains and plans. Sign in and chats follow you from phone to desktop.",stack:["Gemini AI","JavaScript","Vercel"],img:"farvo-ai-chatbot.png",live:"https://farvo-ai-chatbot.vercel.app"},
  {t:"FARVO Prompt",c:"ai",tag:"AI Tool",d:"AI prompt builder that turns your idea into a ready-to-use prompt. Type in English, Tamil, Sinhala, Hindi or Tanglish and copy the result.",stack:["AI","JavaScript","Vercel"],img:"FARVO Prompt AI Website.png",live:"https://farvo-prompt.vercel.app"}
];

const LI='https://www.linkedin.com/in/mohamedfarhan-it/details/certifications/';
/* Format: "Title|Issuer|Certificate file name" inside G(date,...) OR "Title|Issuer|Date|File name". Files live in certificates/ */
const G=(d,...a)=>a.map(s=>{const[t,i,f]=s.split('|');return[t,i,d,f].join('|')});
const CERTS=[
  ...G('Oct 2026',
  'Essentials of Prompt Engineering|AWS Training & Certification|farhan-aws-essentials-of-prompt-engineering-certificate.jpg',
  'Foundations of Prompt Engineering|AWS Training & Certification|farhan-aws-foundations-of-prompt-engineering-certificate.jpg',
  'Cloud Security Essentials for Executives|AWS Training & Certification|farhan-aws-cloud-security-essentials-for-executives-certificate.jpg',
  'AWS Student Builder Group at ICBT Campus|AWS Student Builder Groups|farhan-aws-student-builder-group-certificate.jpg',
  'Canva Essentials|Canva|farhan-canva-essentials-certificate.jpg'),    
...G('Sep 2026',
  'Professional Networking for Career Growth|HP LIFE|farhan-hp-life-professional-networking-for-career-growth-certificate.jpg',
  'Human Resource Management|Harwest International Business College|farhan-harwest-international-business-college-hrm-certificate.jpg',
  'Microsoft Security Essentials: Concepts, Solutions, and AI-Powered Protection|LinkedIn Learning|farhan-linkedln-learning-microsoft-security-essentials-concepts-solutions-and-aipowered-protection-certificate.jpg',
  'Gen AI Use in the Research Workflow|Elsevier Researcher Academy|farhan-researcher-academy-gen-ai-use-research-workflow-certificate.jpg',
  'How to Enhance Your Chances of Serendipitous Research Discovery|Elsevier Researcher Academy|farhan-researcher-academy-enhance-chance-serendipitous-research-discovery-certificate.jpg',
  'Research Design (Researcher Academy Certification)|Elsevier Researcher Academy|farhan-researcher-academy-research-design-certificate.jpg',
  'How to Integrate Sex, Gender, and Intersectional Analysis into Research|Elsevier Researcher Academy|farhan-researcher-academy-intersectional-analysis-into-research-certificate.jpg',
  'Using Generative and Agentic AI in the Literature Review|Elsevier Researcher Academy|farhan-researcher-academy-generative-and-agentic-ai-certificate.jpg',
  'Ethical AI in Research: Evaluating Tools and Applying Best Practices|Elsevier Researcher Academy|farhan-researcher-academy-ethical-ai-in-research-certificate.jpg',
  'SQL (Advanced)|HackerRank|farhan-hackerrank-sql-advanced-certificate.jpg',
  'Java (Basic)|HackerRank|farhan-hackerrank-java-basic-certificate.jpg',
  'SQL (Intermediate)|HackerRank|farhan-hackerrank-sql-intermediate-certificate.jpg',
  'CSS (Basic)|HackerRank|farhan-hackerrank-css-basic-certificate.jpg',
  'SQL (Basic)|HackerRank|farhan-hackerrank-sql-basic-certificate.jpg',
  'Basics of UI Design|UniAthena|farhan-uniathena-basic-of-ui-certificate.jpg',
  'Building with the Claude API|Anthropic|farhan-anthropic-claude-with-a-anthropic-api-certificate.jpg',
  'AI Fluency: Framework & Foundations|Anthropic|farhan-anthropic-ai-fluency-framworkandfoundation-certificate.jpg',
  'Claude Code in Action|Anthropic|farhan-anthropic-claude-code-in-action-certificate.jpg',
  'Introduction to Claude Cowork|Anthropic|farhan-anthropic-introduction-to-claude-cowork-certificate.jpg',
  'Claude Platform 101|Anthropic|farhan-anthropic-claude-platform-101-certificate.jpg',
  'Claude Code 101|Anthropic|farhan-anthropic-claude-code-101-certificate.jpg',
  'Claude 101|Anthropic|farhan-anthropic-claude-101-certificate.jpg',
  'Microsoft Azure Essentials by Microsoft Press|LinkedIn Learning|farhan-microsoft-azure-essentials-by-microsoft-press-certificate.jpg',
  'Basics of UI UX Strategy|UniAthena|farhan-uniathena-basics-of-ui-ux-strategy-certificate.jpg',
  'Basics of Artificial Intelligence|UniAthena|farhan-uniathena-basic-in-ai-certificate.jpg',
  'Microsoft Azure Essentials Professional Certificate|Microsoft|farhan-microsoft-azure-essentials-professional-linkdin-microsoft-certificate.jpg'),
...G('Aug 2026',
  'Basics of Motivation and Leadership|UniAthena|farhan-uniathena-basics-of-motivation-and-leadership-certificate.jpg',
  'Basics in Human Resource Management|UniAthena|farhan-uniathena-basic-in-hrm-certificate.jpg',
  'Gemini Certified Educator|Google for Education|farhan-gemini-educator-certificate.png',
  'Gemini Certified Student|Google for Education|farhan-gemini-student-certificate.png',
  'Getting Started with Cisco Packet Tracer|Cisco Networking Academy|farhan-cisco-packet-tracer-certificate.jpg',
  'JavaScript Essentials 1|Cisco Networking Academy|farhan-cisco-javascript-essentials-1-certificate.jpg',
  'AZ-104: Microsoft Azure Administrator|Udemy|farhan-udemy-microsoft-azure-administrator-certificate.jpg',
  'Build a Computer Vision App with Azure Cognitive Services|Microsoft|farhan-coursera-build-a-computer-vision-app-with-azure-cognitive-services-certificate.jpg',
  'Graphic Design: Pop Your LinkedIn with 3D Effect Using Canva|Coursera|farhan-coursera-graphic-design-certificate.jpg',
  'MongoDB Foundations Course For Beginners|ScholarHat|farhan-scholarhat-mongodb-foundations-certificate.jpg',
  'JavaScript Programming Course For Beginners|ScholarHat|farhan-scholarhat-javascript-programming-certificate.jpg',
  'C# Programming Course For Beginners|ScholarHat|farhan-scholarhat-c-sharp-programming-certificate.jpg',
  'Java Programming Course For Beginners|ScholarHat|farhan-scholarhat-java-programming-certificate.jpg',
  'AWS Cloud Practitioner Foundation Course|ScholarHat|farhan-scholarhat-aws-cloud-practitioner-foundation-certificate.jpg',
  'MD-102: Microsoft 365 Endpoint Administrator (Intune)|Udemy|farhan-microsoft-365-endpoint-administrator-certificate.jpg',
  'Basics of Microsoft Power BI Certificate|UniAthena|farhan-uniathena-basics-of-microsoft-power-bi-certificate.jpg',
  'Essentials of MS Excel - Formulas and Functions|UniAthena|farhan-uniathena-ms-excel-formulas-and-functions-certificate.jpg',
  'Fundamentals of English Grammar|UniAthena|farhan-uniathena-fundamentals-of-english-grammar-certificate.jpg',
  'Deep Learning Fundamentals Certificate|Cognitive Class|farhan-cognitive-class-ai-deep-learning-fundamentals-certificate.jpg',
  'SQL and Relational Databases 101|Cognitive Class|farhan-cognitive-class-ai-sql-and-relational-databases-certificate.jpg',
  'Search Problems - Skillsoft Percipio Certificate of Completion|Skillsoft|farhan-skillsoft-percipio-search-problems.jpg',
  'MongoDB Database Certificate|Cursa|farhan-cursa-mongodb-database-certificate.jpeg',
  'Master ChatGPT|UniAthena|farhan-uniathena-master-chatgpt-certificate.jpg',
  'Basics of Python Certificate|UniAthena|farhan-uniathena-basic-of-python-certificate.jpg',
  'Essentials of Data Visualization using MS Excel|UniAthena|farhan-uniathena-essentials-of-data-visualization-using-ms-excel.jpg',
  'Basics in Machine Learning|UniAthena|farhan-uniathena-basic-in-machine-learning-certificate.jpg',
  'Networking Basics|Cisco Networking Academy|farhan-cisco-network-basic-certificate.jpg',
  'Introduction to MS Excel|SimpliLearn|farhan-simple-learn-skill-microsoft-excel-certificate.jpg',
  'Introduction to Cybersecurity|Cisco Networking Academy|farhan-cisco-cyber-security-certificate.jpg',
  'Azure Fundamentals|SimpliLearn|farhan-simple-learn-skill-azure-fundamantal-certificate.jpg',
  'Basics of SQL Statements & Indexes|UniAthena|farhan-uniathena-sql-mastery-with-mysql-certificate.jpg',
  'Getting Started with Microsoft PowerPoint|Coursera|farhan-coursera-powerpoint-certificate.jpg',
  'Git and GitHub: The Complete Start|Learnz Connect|farhan-learnzconnect-git-github-foundation-certificate.png',
  'Artificial Intelligence Beginners Guide|SimpliLearn|farhan-simple-learn-skill-ai-beginner-certificate.jpg',
  'SQL Mastery with MySQL|Learnz Connect|farhan-learnzconnect-sql-mastery-with-mysql-certificate.png',
  'Introduction to Cyber Security|SimpliLearn|farhan-simple-learn-skill-cyber-security-certificate.jpg',
  'Ethical Hacking 101: Beginners guide to Ethical hacking|SimpliLearn|farhan-simple-learn-skill-ethical-hacking-certificate.jpg',
  'Java Programming for Beginners|SimpliLearn|farhan-simple-learn-skill-java-program-certificate.jpg'),
...G('2026',
  'AI Foundations for Educators|IBM|farhan-ai-foundations-for-educators-ibm-certificate.jpg',
  'C++ Essentials 1|Cisco Networking Academy|farhan-cisco-cplusplus-essentials-1-certificate.jpg',
  'Ethical Hacker|Cisco Networking Academy|farhan-cisco-ethical-hacker-certificate.jpg',
  'Google Ads: AI-Powered Performance|Google|farhan-google-ads-ai-powered-performance-certificate.jpg',
  'Google Ads: Apps|Google|farhan-google-ads-apps-certificate.jpg',
  'Google Ads: Search|Google|farhan-google-ads-search-certificate.jpg',
  'Wireframing and Prototyping|IBM|farhan-wireframing-and-prototyping-ibm-certificate.jpg',
  'Basic Python Programming|UniAthena|farhan-uniathena-basic-python-programming-certificate.jpg'),
  'Speed Memory - 5 Days Workshop|IQ International|Sep 2019|farhanspeed-memory-iq-certificate.png',
  'Diploma in English|Social Environment and Educational Development Secretariat Sri Lanka|Apr 2023|farhan-diploma-in-english-certificate.png',
  'Certificate in Office Automation|Social Environment and Educational Development Secretariat Sri Lanka|Jun 2022|farhan-diploma-in-ict-certificate.png',
  'Digital Marketing Workshop|StudyZ Academy|Aug 2024|farhan-sac-digital-marketing-certificate.jpg'
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
