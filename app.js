const translations = {
  fr: {
    workspace:"ESPACE FORMATION",overview:"Vue d'ensemble",courses:"Catalogue des cours",assignments:"Affectations",skills:"Compétences",reports:"Rapports",settings:"Paramètres",
    prototype:"Prototype local",noDatabase:"Aucune base connectée",projectLead:"Responsable du projet",previewRole:"Prévisualiser le rôle",dashboard:"TABLEAU DE BORD",welcomeSub:"Voici l'activité de formation et les priorités de développement.",export:"Exporter les données",newCourse:"Nouveau cours",demoMode:"Mode démonstration",demoText:"Les données affichées sont fictives. Connectez Supabase avant toute utilisation réelle.",
    activeLearners:"Apprenants actifs",completionRate:"Taux de complétion",avgScore:"Score moyen",hoursLearned:"Heures de formation",vsLastMonth:"vs mois précédent",learningActivity:"Activité d'apprentissage",activitySub:"Vue indicative sur les six derniers mois",last6:"6 derniers mois",last3:"3 derniers mois",completion:"Complétion",target:"Objectif",prioritySkills:"Priorités de développement",skillsSub:"Compétences à renforcer",seeAll:"Voir tout →",customerRelations:"Relation client",dataSecurity:"Sécurité de l'information",communication:"Communication assertive",skillGap:"Écart de compétence à analyser",featuredCourses:"Cours à suivre",coursesSub:"Une sélection de formations et de ressources",viewCatalog:"Voir le catalogue →",recentActivity:"Activité récente",recentSub:"Exemple de suivi des apprenants",viewReport:"Voir le rapport →",learner:"APPRENANT",course:"FORMATION",progress:"PROGRESSION",status:"STATUT",prototypeFooter:"Prototype de démarrage",footerNote:"Données fictives · Non connecté à Supabase",
    greeting:"Bonjour Dylan",roleManagement:"Vue de pilotage direction",roleTrainer:"Espace formateur",roleManager:"Suivi de mon équipe",roleStaff:"Mon espace d'apprentissage",roleAdmin:"Administration de la plateforme",newCourseMsg:"La création de cours sera activée après la mise en place du modèle de données.",exportReady:"Export CSV généré à partir des données de démonstration.",courseOpen:"Ouverture du parcours...",genericEmpty:"Cette section sera construite dans une prochaine étape.",catalogDesc:"Catalogue de démonstration — les cours ne sont pas encore connectés à une base.",assignDesc:"Affectations, échéances et suivi par équipe.",skillsDesc:"Référentiel de compétences et évaluations avant/après formation.",reportsDesc:"Les exports réels seront disponibles une fois les données Supabase connectées.",settingsDesc:"Configuration du prototype et choix de langue.",open:"Ouvrir le cours",continue:"Continuer",start:"Commencer",inProgress:"En cours",completed:"Terminé",late:"En retard",footerSafe:"Prototype local uniquement. Ne pas utiliser pour des données réelles.",
    notifMsg:"Aucune nouvelle notification pour le moment.",profileMsg:"Menu profil : Paramètres, Déconnexion (bientôt disponible).",loginSuccess:"Connexion réussie. Bienvenue !"
  },
  en: {
    workspace:"LEARNING WORKSPACE",overview:"Overview",courses:"Course catalogue",assignments:"Assignments",skills:"Skills",reports:"Reports",settings:"Settings",
    prototype:"Local prototype",noDatabase:"No database connected",projectLead:"Project owner",previewRole:"Preview role",dashboard:"DASHBOARD",welcomeSub:"Here is your learning activity and development priorities.",export:"Export data",newCourse:"New course",demoMode:"Demo mode",demoText:"Displayed data is fictional. Connect Supabase before real use.",
    activeLearners:"Active learners",completionRate:"Completion rate",avgScore:"Average score",hoursLearned:"Learning hours",vsLastMonth:"vs previous month",learningActivity:"Learning activity",activitySub:"Illustrative view over the last six months",last6:"Last 6 months",last3:"Last 3 months",completion:"Completion",target:"Target",prioritySkills:"Development priorities",skillsSub:"Skills to strengthen",seeAll:"View all →",customerRelations:"Customer relations",dataSecurity:"Information security",communication:"Assertive communication",skillGap:"Skill gap to investigate",featuredCourses:"Courses to take",coursesSub:"A selection of courses and resources",viewCatalog:"View catalogue →",recentActivity:"Recent activity",recentSub:"Illustrative learner tracking",viewReport:"View report →",learner:"LEARNER",course:"COURSE",progress:"PROGRESS",status:"STATUS",prototypeFooter:"Starter prototype",footerNote:"Fictional data · Not connected to Supabase",
    greeting:"Hello Dylan",roleManagement:"Leadership overview",roleTrainer:"Trainer workspace",roleManager:"My team overview",roleStaff:"My learning space",roleAdmin:"Platform administration",newCourseMsg:"Course creation will be enabled after the data model is established.",exportReady:"CSV export generated from demo data.",courseOpen:"Opening course...",genericEmpty:"This section will be built in a later step.",catalogDesc:"Demo catalogue — courses are not connected to a database yet.",assignDesc:"Assignments, deadlines and team tracking.",skillsDesc:"Skills framework and pre/post-training assessments.",reportsDesc:"Real exports will be available after Supabase data is connected.",settingsDesc:"Prototype configuration and language settings.",open:"Open course",continue:"Continue",start:"Start",inProgress:"In progress",completed:"Completed",late:"Overdue",footerSafe:"Local prototype only. Do not use for real data.",
    notifMsg:"No new notifications at the moment.",profileMsg:"Profile menu: Settings, Logout (coming soon).",loginSuccess:"Login successful. Welcome!"
  }
};

const courses = [
  {
    id:1,
    title:{fr:"Agilité intellectuelle",en:"Intellectual Agility"},
    category:"Parcours",duration:"4 Modules",progress:25,art:"art-teal",symbol:"✦",
    owner:"Connecteo Learning",
    levels: [
      { num: 1, title: {fr: "Niveau 1 : Comprendre rapidement une situation nouvelle", en: "Level 1: Quickly understand a new situation"}, status: "active" },
      { num: 2, title: {fr: "Niveau 2 : Adapter sa réponse face aux changements", en: "Level 2: Adapt response to changes"}, status: "locked" },
      { num: 3, title: {fr: "Niveau 3 : Analyser des situations complexes", en: "Level 3: Analyze complex situations"}, status: "locked" },
      { num: 4, title: {fr: "Niveau 4 : Devenir une référence dans la résolution", en: "Level 4: Become a reference in resolution"}, status: "locked" }
    ]
  }
];

// Tableau vide pour l'instant (plus de faux apprenants)
const learners = [];

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
  $$("[data-course]").forEach(btn=>btn.addEventListener("click",()=>openCoursePlayer(btn.dataset.course)));
}
function renderActivityTable(){
  if(learners.length === 0) {
    $("#activityTable").innerHTML = `<tr><td colspan="4" style="text-align:center;color:var(--muted);padding:20px;">Aucune activité récente à afficher.</td></tr>`;
    return;
  }
  $("#activityTable").innerHTML=learners.map(l=>`
    <tr><td><div class="learner-cell"><span class="learner-avatar">${l.initials}</span><span class="learner-name">${l.name}</span></div></td>
    <td>${l.course[lang]}</td><td><div class="cell-progress"><div class="progress-track"><span style="width:${l.progress}%;background:${l.progress===100?'#29a779':'var(--teal)'}"></span></div><span>${l.progress}%</span></div></td>
    <td><span class="status-pill ${l.status==='completed'?'status-done':l.status==='late'?'status-late':'status-progress'}">${t(l.status)}</span></td></tr>`).join("");
}
function renderChart(){
  const full = [{m:{fr:"Mai",en:"May"},v:0},{m:{fr:"Juin",en:"Jun"},v:0},{m:{fr:"Juil.",en:"Jul"},v:0},{m:{fr:"Août",en:"Aug"},v:0},{m:{fr:"Sept.",en:"Sep"},v:0},{m:{fr:"Oct.",en:"Oct"},v:25}];
  const count=Number($("#activityPeriod").value||6), data=full.slice(-count);
  $("#chartBars").innerHTML=data.map(d=>`<div class="bar-pair"><div class="bar actual" style="height:${d.v}%"></div><div class="bar target" style="height:85%"></div></div>`).join("");
  $("#chartLabels").innerHTML=data.map(d=>`<span>${d.m[lang]}</span>`).join("");
}

// LOGIQUE LECTEUR DE COURS
function openCoursePlayer(courseId) {
  const course = courses.find(c => c.id == courseId);
  if(!course) return;
  
  $("#coursePlayerTitle").textContent = course.title[lang];
  $("#coursePlayerDesc").textContent = lang === 'fr' ? "Parcours de formation en 4 niveaux." : "4-level training path.";
  
  $("#courseLevelsList").innerHTML = course.levels.map(lvl => `
    <div class="level-item">
      <div class="level-info">
        <h3>${lvl.title[lang]}</h3>
        <p>${lvl.status === 'active' ? (lang === 'fr' ? 'En cours' : 'In progress') : (lang === 'fr' ? 'À venir' : 'Upcoming')}</p>
      </div>
      <span class="level-status ${lvl.status}">${lvl.status === 'active' ? (lang === 'fr' ? 'Continuer' : 'Continue') : (lang === 'fr' ? 'Verrouillé' : 'Locked')}</span>
    </div>
  `).join("");

  $("#overviewView").classList.add("hidden");
  $("#genericView").classList.add("hidden");
  $("#coursePlayerView").classList.remove("hidden");
  $("#pageCrumb").textContent = course.title[lang];
}

$("#backToOverview").addEventListener("click", () => {
  $("#coursePlayerView").classList.add("hidden");
  renderView("overview");
});
// FONCTION DE GESTION DES DROITS SELON LE RÔLE
function applyRolePermissions(role) {
  // Éléments de l'interface
  const btnNewCourse = $("#primaryAction");
  const btnExport = $("#exportCsv");
  const navReports = $('[data-view="reports"]');
  const navSettings = $('[data-view="settings"]');
  const kpiGrid = $(".kpi-grid");
  
  // On met à jour le texte dans le menu déroulant
  $("#dropdownRole").textContent = "Connecté en tant que : " + roleLabels[role][lang];

  // Réinitialisation (tout le monde voit tout au départ)
  [btnNewCourse, btnExport, navReports, navSettings, kpiGrid].forEach(el => {
    if(el) el.classList.remove("hidden");
  });

  // Application des restrictions selon le rôle
  if (role === "staff") {
    // L'apprenant ne voit pas les stats globales, ni le bouton nouveau cours, ni les rapports
    if(kpiGrid) kpiGrid.classList.add("hidden");
    if(btnNewCourse) btnNewCourse.classList.add("hidden");
    if(btnExport) btnExport.classList.add("hidden");
    if(navReports) navReports.classList.add("hidden");
    if(navSettings) navSettings.classList.add("hidden");
  } 
  else if (role === "trainer") {
    // Le formateur ne voit pas les rapports globaux
    if(navReports) navReports.classList.add("hidden");
  }
  else if (role === "manager") {
    // Le manager ne peut pas créer de cours
    if(btnNewCourse) btnNewCourse.classList.add("hidden");
  }
  // admin et management voient tout par défaut.
}

function renderView(view){
  currentView=view;
  $("#coursePlayerView").classList.add("hidden"); // Ferme le lecteur si on change de vue
  
  const isOverview=view==="overview";
  $$(".nav-item[data-view]").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  $("#pageCrumb").textContent=t(view);
  $("#overviewView").classList.toggle("hidden",!isOverview);
  applyRolePermissions($("#roleSelect").value);
  $("#genericView").classList.toggle("hidden",isOverview);
  
  if(isOverview) {
    $("#welcomeTitle").innerHTML=`${t(roleTitleKey())} <span class="wave">✳</span>`;
    return;
  }
  
  $("#welcomeTitle").innerHTML=`${t(roleTitleKey())} <span class="wave">✳</span>`;
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
  // Si pas de données, on génère un CSV vide avec les en-têtes
  const header=["learner","course","progress","status"];
  const rows=learners.map(l=>[l.name,l.course[lang],`${l.progress}%`,t(l.status)]);
  const csv=[header.join(","),...rows.map(r=>r.map(v=>`"${String(v).replaceAll('"','""')}"`).join(","))].join("\r\n");
  const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8;"});
  const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="formapilot-demo-report.csv";a.click();URL.revokeObjectURL(url);
  showToast(t("exportReady"));
}

// LOGIQUE DE CONNEXION
$("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  $("#loginScreen").classList.add("hidden");
  $("#appShell").classList.remove("hidden");
  showToast(t("loginSuccess"));
});

$("#forgotPassword").addEventListener("click", (e) => {
  e.preventDefault();
  showToast("Un email de réinitialisation vous sera envoyé (Simulation).");
});

// NAVIGATION & BOUTONS
$$("[data-view]").forEach(btn=>btn.addEventListener("click",()=>{renderView(btn.dataset.view);$("#sidebar").classList.remove("open");}));
$$("[data-open-view]").forEach(btn=>btn.addEventListener("click",()=>renderView(btn.dataset.openView)));
$("#langSwitch").addEventListener("click",()=>{lang=lang==="fr"?"en":"fr";renderTranslations();});
$("#roleSelect").addEventListener("change",(e)=>{
  lang = lang; // Garde la langue actuelle
  applyRolePermissions(e.target.value); // Applique les nouveaux droits
  renderView(currentView); // Rafraichit la vue
  showToast("Rôle prévisualisé : " + roleLabels[e.target.value][lang]);
});
$("#exportCsv").addEventListener("click",exportCsv);
$("#primaryAction").addEventListener("click",()=>showToast(t("newCourseMsg")));
$("#activityPeriod").addEventListener("change",renderChart);
$("#mobileMenu").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));

// BOUTONS FIXES (Notifications)
$("#notifBtn").addEventListener("click", () => showToast(t("notifMsg")));

// GESTION DU MENU PROFIL ET DÉCONNEXION
$("#topProfileBtn").addEventListener("click", (e) => {
  e.stopPropagation();
  $("#profileDropdown").classList.toggle("hidden");
});

// Fermer le menu si on clique ailleurs sur la page
document.addEventListener("click", (e) => {
  if (!e.target.closest(".profile-dropdown-wrapper")) {
    $("#profileDropdown").classList.add("hidden");
  }
});

// Bouton de déconnexion
$("#logoutBtn").addEventListener("click", () => {
  $("#profileDropdown").classList.add("hidden");
  $("#appShell").classList.add("hidden"); // Cache l'application
  $("#loginScreen").classList.remove("hidden"); // Réaffiche le login
  $("#loginForm").reset(); // Vide les champs
  showToast("Vous êtes déconnecté(e)."); // Message de confirmation
});

renderTranslations();
