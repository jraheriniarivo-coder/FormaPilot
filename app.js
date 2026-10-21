const translations = {
  fr: {
    workspace:"ESPACE FORMATION",overview:"Vue d'ensemble",courses:"Catalogue des cours",assignments:"Affectations",skills:"Compétences",reports:"Rapports",settings:"Paramètres",
    prototype:"Prototype local",noDatabase:"Aucune base connectée",projectLead:"Responsable du projet",previewRole:"Prévisualiser le rôle",dashboard:"TABLEAU DE BORD",welcomeSub:"Voici l'activité de formation et les priorités de développement.",export:"Exporter les données",newCourse:"Nouveau cours",demoMode:"Mode démonstration",demoText:"Les données affichées sont fictives. Connectez Supabase avant toute utilisation réelle.",
    activeLearners:"Apprenants actifs",completionRate:"Taux de complétion",avgScore:"Score moyen",hoursLearned:"Heures de formation",vsLastMonth:"vs mois précédent",learningActivity:"Activité d'apprentissage",activitySub:"Vue indicative sur les six derniers mois",last6:"6 derniers mois",last3:"3 derniers mois",completion:"Complétion",target:"Objectif",prioritySkills:"Priorités de développement",skillsSub:"Compétences à renforcer",seeAll:"Voir tout →",customerRelations:"Relation client",dataSecurity:"Sécurité de l'information",communication:"Communication assertive",skillGap:"Écart de compétence à analyser",featuredCourses:"Cours à suivre",coursesSub:"Une sélection de formations et de ressources",viewCatalog:"Voir le catalogue →",recentActivity:"Activité récente",recentSub:"Exemple de suivi des apprenants",viewReport:"Voir le rapport →",learner:"APPRENANT",course:"FORMATION",progress:"PROGRESSION",status:"STATUT",prototypeFooter:"Prototype de démarrage",footerNote:"Données fictives · Non connecté à Supabase",
    greeting:"Bonjour Dylan",roleManagement:"Vue de pilotage direction",roleTrainer:"Espace formateur",roleManager:"Suivi de mon équipe",roleStaff:"Mon espace d'apprentissage",roleAdmin:"Administration de la plateforme",newCourseMsg:"La création de cours sera activée après la mise en place du modèle de données.",exportReady:"Export CSV généré à partir des données de démonstration.",courseOpen:"Le lecteur de cours sera connecté à un contenu HTML réel dans une prochaine étape.",genericEmpty:"Cette section sera construite dans une prochaine étape.",catalogDesc:"Catalogue de démonstration — les cours ne sont pas encore connectés à une base.",assignDesc:"Affectations, échéances et suivi par équipe.",skillsDesc:"Référentiel de compétences et évaluations avant/après formation.",reportsDesc:"Les exports réels seront disponibles une fois les données Supabase connectées.",settingsDesc:"Configuration du prototype et choix de langue.",open:"Ouvrir le cours",continue:"Continuer",start:"Commencer",inProgress:"En cours",completed:"Terminé",late:"En retard",footerSafe:"Prototype local uniquement. Ne pas utiliser pour des données réelles."
  },
  en: {
    workspace:"LEARNING WORKSPACE",overview:"Overview",courses:"Course catalogue",assignments:"Assignments",skills:"Skills",reports:"Reports",settings:"Settings",
    prototype:"Local prototype",noDatabase:"No database connected",projectLead:"Project owner",previewRole:"Preview role",dashboard:"DASHBOARD",welcomeSub:"Here is your learning activity and development priorities.",export:"Export data",newCourse:"New course",demoMode:"Demo mode",demoText:"Displayed data is fictional. Connect Supabase before real use.",
    activeLearners:"Active learners",completionRate:"Completion rate",avgScore:"Average score",hoursLearned:"Learning hours",vsLastMonth:"vs previous month",learningActivity:"Learning activity",activitySub:"Illustrative view over the last six months",last6:"Last 6 months",last3:"Last 3 months",completion:"Completion",target:"Target",prioritySkills:"Development priorities",skillsSub:"Skills to strengthen",seeAll:"View all →",customerRelations:"Customer relations",dataSecurity:"Information security",communication:"Assertive communication",skillGap:"Skill gap to investigate",featuredCourses:"Courses to take",coursesSub:"A selection of courses and resources",viewCatalog:"View catalogue →",recentActivity:"Recent activity",recentSub:"Illustrative learner tracking",viewReport:"View report →",learner:"LEARNER",course:"COURSE",progress:"PROGRESS",status:"STATUS",prototypeFooter:"Starter prototype",footerNote:"Fictional data · Not connected to Supabase",
    greeting:"Hello Dylan",roleManagement:"Leadership overview",roleTrainer:"Trainer workspace",roleManager:"My team overview",roleStaff:"My learning space",roleAdmin:"Platform administration",newCourseMsg:"Course creation will be enabled after the data model is established.",exportReady:"CSV export generated from demo data.",courseOpen:"The course player will be connected to real HTML content in a later step.",genericEmpty:"This section will be built in a later step.",catalogDesc:"Demo catalogue — courses are not connected to a database yet.",assignDesc:"Assignments, deadlines and team tracking.",skillsDesc:"Skills framework and pre/post-training assessments.",reportsDesc:"Real exports will be available after Supabase data is connected.",settingsDesc:"Prototype configuration and language settings.",open:"Open course",continue:"Continue",start:"Start",inProgress:"In progress",completed:"Completed",late:"Overdue",footerSafe:"Local prototype only. Do not use for real data."
  }
};

const courses = [
  {id:1,title:{fr:"Sensibilisation RGPD",en:"GDPR Awareness"},category:"HTML",duration:"25 min",progress:65,art:"art-teal",symbol:"§",owner:"Équipe conformité"},
  {id:2,title:{fr:"Sécurité de l'information",en:"Information Security"},category:"PDF",duration:"35 min",progress:0,art:"art-blue",symbol:"◇",owner:"Équipe IT"},
  {id:3,title:{fr:"La communication assertive",en:"Assertive Communication"},category:"QUIZ",duration:"20 min",progress:100,art:"art-orange",symbol:"↗",owner:"Learning & Development"}
];
const learners = [
  {name:"Sarah R.",initials:"SR",course:{fr:"Sensibilisation RGPD",en:"GDPR Awareness"},progress:100,status:"completed"},
  {name:"Mika T.",initials:"MT",course:{fr:"Sécurité de l'information",en:"Information Security"},progress:48,status:"inProgress"},
  {name:"Aina R.",initials:"AR",course:{fr:"La communication assertive",en:"Assertive Communication"},progress:22,status:"late"},
  {name:"Kevin N.",initials:"KN",course:{fr:"Sensibilisation RGPD",en:"GDPR Awareness"},progress:76,status:"inProgress"}
];
const roleLabels = {management:{fr:"Management",en:"Management"},trainer:{fr:"Formateur",en:"Trainer"},manager:{fr:"Manager",en:"Manager"},staff:{fr:"Apprenant",en:"Learner"},admin:{fr:"Administrateur",en:"Administrator"}};
const viewNames = ["overview","courses","assignments","skills","reports","settings"];
let lang = "fr";
let currentView = "overview";
let toastTimer;

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
function t(key){ return translations[lang][key] || key; }
function showToast(message){
  const toast=$("#toast"); toast.textContent=message; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>toast.classList.remove("show"),3200);
}
function renderTranslations(){
  document.documentElement.lang=lang;
  $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(t(key))el.textContent=t(key);});
  $("#langSwitch").textContent=lang==="fr"?"EN":"FR";
  $("#welcomeTitle").innerHTML=`${t("greeting")} <span class="wave">✳</span>`;
  $("#roleSelect").querySelectorAll("option").forEach(o=>o.textContent=roleLabels[o.value][lang]);
  renderCourses(); renderActivityTable(); renderChart(); renderView(currentView);
}
function renderCourses(){
  $("#courseGrid").innerHTML=courses.map(c=>`
    <article class="course-card">
      <div class="course-art ${c.art}"><span class="course-type">${c.category}</span><span class="art-symbol">${c.symbol}</span></div>
      <div class="course-body"><h3>${c.title[lang]}</h3><div class="course-meta"><span>${c.owner}</span><span>${c.duration}</span></div>
      <div class="course-progress-label"><span>${c.progress===100?t("completed"):c.progress? t("inProgress"):t("start")}</span><strong>${c.progress}%</strong></div>
      <div class="course-progress"><span style="width:${c.progress}%"></span></div>
      <button class="course-action" data-course="${c.id}">${c.progress===100?t("open"):c.progress?t("continue"):t("start")} →</button></div>
    </article>`).join("");
  $$("[data-course]").forEach(btn=>btn.addEventListener("click",()=>showToast(t("courseOpen"))));
}
function renderActivityTable(){
  $("#activityTable").innerHTML=learners.map(l=>`
    <tr><td><div class="learner-cell"><span class="learner-avatar">${l.initials}</span><span class="learner-name">${l.name}</span></div></td>
    <td>${l.course[lang]}</td><td><div class="cell-progress"><div class="progress-track"><span style="width:${l.progress}%;background:${l.progress===100?'#29a779':'var(--teal)'}"></span></div><span>${l.progress}%</span></div></td>
    <td><span class="status-pill ${l.status==='completed'?'status-done':l.status==='late'?'status-late':'status-progress'}">${t(l.status)}</span></td></tr>`).join("");
}
function renderChart(){
  const full = [{m:{fr:"Mai",en:"May"},v:55},{m:{fr:"Juin",en:"Jun"},v:62},{m:{fr:"Juil.",en:"Jul"},v:58},{m:{fr:"Août",en:"Aug"},v:71},{m:{fr:"Sept.",en:"Sep"},v:68},{m:{fr:"Oct.",en:"Oct"},v:76}];
  const count=Number($("#activityPeriod").value||6), data=full.slice(-count);
  $("#chartBars").innerHTML=data.map(d=>`<div class="bar-pair"><div class="bar actual" style="height:${d.v}%"></div><div class="bar target" style="height:85%"></div></div>`).join("");
  $("#chartLabels").innerHTML=data.map(d=>`<span>${d.m[lang]}</span>`).join("");
}
function renderView(view){
  currentView=view;
  const isOverview=view==="overview";
  $$(".nav-item[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  $("#pageCrumb").textContent=t(view);
  const overviewSections=[$(".kpi-grid"),$(".content-grid"),$(".courses-panel"),$("#recentPanel")];
  overviewSections.forEach(el=>el.classList.toggle("hidden",!isOverview));
  $("#genericView").classList.toggle("hidden",isOverview);
  $("#welcomeTitle").innerHTML=`${t(roleTitleKey())} <span class="wave">✳</span>`;
  if(isOverview)return;
  const config={
    courses:{title:t("courses"),desc:t("catalogDesc"),body:`<div class="empty-state"><strong>${t("courses")}</strong>${t("catalogDesc")}</div><div class="generic-cards"><div class="generic-mini">HTML<br><strong>Course player</strong><br>Modules interactifs</div><div class="generic-mini">PDF<br><strong>Document reader</strong><br>Lecture sécurisée</div><div class="generic-mini">QUIZ<br><strong>Assessments</strong><br>Scores et feedback</div></div>`},
    assignments:{title:t("assignments"),desc:t("assignDesc"),body:`<div class="empty-state"><strong>${t("assignments")}</strong>${t("genericEmpty")}</div>`},
    skills:{title:t("skills"),desc:t("skillsDesc"),body:`<div class="empty-state"><strong>${t("skills")}</strong>${t("genericEmpty")}</div>`},
    reports:{title:t("reports"),desc:t("reportsDesc"),body:`<div class="empty-state"><strong>${t("reports")}</strong>${t("genericEmpty")}<br><br><button class="button button-secondary" id="genericExport">${t("export")}</button></div>`},
    settings:{title:t("settings"),desc:t("settingsDesc"),body:`<div class="empty-state"><strong>${t("settings")}</strong>${t("genericEmpty")}<br><br>${t("footerSafe")}</div>`}
  }[view];
  $("#genericTitle").textContent=config.title;$("#genericDescription").textContent=config.desc;$("#genericBody").innerHTML=config.body;
  const genericExport=$("#genericExport");if(genericExport)genericExport.addEventListener("click",exportCsv);
}
function roleTitleKey(){return {management:"roleManagement",trainer:"roleTrainer",manager:"roleManager",staff:"roleStaff",admin:"roleAdmin"}[$("#roleSelect").value]||"roleManagement";}
function exportCsv(){
  const header=["learner","course","progress","status"];
  const rows=learners.map(l=>[l.name,l.course[lang],`${l.progress}%`,t(l.status)]);
  const csv=[header.join(","),...rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(","))].join("\r\n");
  const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8;"});
  const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="formapilot-demo-report.csv";a.click();URL.revokeObjectURL(url);
  showToast(t("exportReady"));
}
$$("[data-view]").forEach(btn=>btn.addEventListener("click",()=>{renderView(btn.dataset.view);$("#sidebar").classList.remove("open");}));
$$("[data-open-view]").forEach(btn=>btn.addEventListener("click",()=>renderView(btn.dataset.openView)));
$("#langSwitch").addEventListener("click",()=>{lang=lang==="fr"?"en":"fr";renderTranslations();});
$("#roleSelect").addEventListener("change",()=>{renderView(currentView);showToast(roleLabels[$("#roleSelect").value][lang]+" — "+t("demoMode"));});
$("#exportCsv").addEventListener("click",exportCsv);
$("#primaryAction").addEventListener("click",()=>showToast(t("newCourseMsg")));
$("#activityPeriod").addEventListener("change",renderChart);
$("#mobileMenu").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
renderTranslations();
