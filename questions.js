/// ============================================
// DONNÉES DE BASE - À MODIFIER POUR ADAPTER À VOTRE FILIÈRE
// ============================================
const defaultData = {
    themes: [
        { 
            id: "programming", 
            name: "Programmation", 
            color: "#3498db" 
        },
        { 
            id: "networks", 
            name: "Réseaux", 
            color: "#2ecc71" 
        },
        { 
            id: "databases", 
            name: "Bases de données", 
            color: "#e74c3c" 
        },
        { 
            id: "algorithms", 
            name: "Algorithmes", 
            color: "#f39c12" 
        },
        { 
            id: "web", 
            name: "Développement Web", 
            color: "#9b59b6" 
        },
        { 
            id: "security", 
            name: "Sécurité informatique", 
            color: "#1abc9c" 
        }
    ],
    
    questions: [
        {
            id: 1,
            theme: "programming",
            question: "Quelle est la différence entre 'let', 'const' et 'var' en JavaScript ?",
            answer: "'let' permet de déclarer des variables avec une portée de bloc, 'const' déclare des constantes avec une portée de bloc, et 'var' déclare des variables avec une portée de fonction (ou globale si déclarée en dehors d'une fonction). 'let' et 'const' sont ES6+, tandis que 'var' est l'ancienne façon de déclarer des variables.",
            difficulty: "medium",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 2,
            theme: "programming",
            question: "Qu'est-ce qu'un arbre binaire de recherche (BST) ?",
            answer: "Un arbre binaire de recherche est une structure de données arborescente où chaque nœud a au plus deux enfants. Pour chaque nœud, tous les éléments du sous-arbre gauche sont inférieurs au nœud, et tous les éléments du sous-arbre droit sont supérieurs.",
            difficulty: "hard",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 3,
            theme: "networks",
            question: "Quelle est la différence entre TCP et UDP ?",
            answer: "TCP (Transmission Control Protocol) est un protocole orienté connexion qui garantit la livraison des données dans l'ordre et sans erreur. UDP (User Datagram Protocol) est un protocole sans connexion qui ne garantit ni la livraison, ni l'ordre, ni l'intégrité des données, mais est plus rapide et a moins de surcharge.",
            difficulty: "medium",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 4,
            theme: "networks",
            question: "Qu'est-ce qu'une adresse IP ?",
            answer: "Une adresse IP (Internet Protocol) est une adresse numérique unique attribuée à chaque appareil connecté à un réseau utilisant le protocole IP. Il existe deux versions principales : IPv4 (32 bits, format décimal) et IPv6 (128 bits, format hexadécimal).",
            difficulty: "easy",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 5,
            theme: "databases",
            question: "Qu'est-ce que la normalisation d'une base de données ?",
            answer: "La normalisation est le processus d'organisation des données dans une base de données pour réduire la redondance et améliorer l'intégrité des données. Elle consiste à décomposer les tables et à établir des relations entre elles selon des formes normales (1NF, 2NF, 3NF, etc.).",
            difficulty: "medium",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 6,
            theme: "databases",
            question: "Quelle est la différence entre SQL et NoSQL ?",
            answer: "SQL (Structured Query Language) est utilisé pour les bases de données relationnelles qui stockent les données dans des tables avec des schémas prédéfinis. NoSQL (Not Only SQL) fait référence aux bases de données non relationnelles qui stockent les données sous diverses formes : documents, graphes, paires clé-valeur, etc., offrant plus de flexibilité et de scalabilité horizontale.",
            difficulty: "medium",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 7,
            theme: "algorithms",
            question: "Quelle est la complexité temporelle de l'algorithme de tri rapide (QuickSort) ?",
            answer: "Dans le meilleur cas et en moyenne, QuickSort a une complexité de O(n log n). Dans le pire cas (par exemple, quand le tableau est déjà trié et que le pivot est choisi de manière inadéquate), il a une complexité de O(n²).",
            difficulty: "hard",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 8,
            theme: "algorithms",
            question: "Qu'est-ce qu'un algorithme glouton (greedy algorithm) ?",
            answer: "Un algorithme glouton est une approche algorithmique qui fait le choix optimal local à chaque étape avec l'espoir que ces choix locaux mènent à une solution globale optimale. Il ne revient jamais sur ses décisions (pas de backtracking).",
            difficulty: "medium",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 9,
            theme: "web",
            question: "Quelle est la différence entre HTTP et HTTPS ?",
            answer: "HTTP (HyperText Transfer Protocol) est un protocole non chiffré pour transférer des données sur le web. HTTPS (HTTP Secure) est la version sécurisée de HTTP qui utilise SSL/TLS pour chiffrer les données échangées entre le client et le serveur, offrant confidentialité, intégrité et authentification.",
            difficulty: "easy",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 10,
            theme: "web",
            question: "Qu'est-ce que le DOM en développement web ?",
            answer: "Le DOM (Document Object Model) est une interface de programmation pour les documents HTML et XML. Il représente la structure du document sous forme d'arbre d'objets, permettant aux langages de script (comme JavaScript) de manipuler le contenu, la structure et le style d'une page web.",
            difficulty: "medium",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 11,
            theme: "security",
            question: "Qu'est-ce qu'une attaque par injection SQL ?",
            answer: "Une attaque par injection SQL est une technique qui consiste à insérer du code SQL malveillant dans une requête SQL, via des données fournies par l'utilisateur. Cela peut permettre à un attaquant de lire, modifier ou supprimer des données dans la base de données, ou d'exécuter des commandes administratives.",
            difficulty: "hard",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        },
        {
            id: 12,
            theme: "security",
            question: "Quelle est la différence entre authentification et autorisation ?",
            answer: "L'authentification est le processus de vérification de l'identité d'un utilisateur (ex: nom d'utilisateur/mot de passe). L'autorisation détermine ce qu'un utilisateur authentifié a le droit de faire (ex: accéder à certaines ressources).",
            difficulty: "easy",
            lastReviewed: null,
            nextReview: null,
            reviewCount: 0,
            correctCount: 0
        }
    ],
    
    courses: [
        {
            theme: "programming",
            title: "Programmation Orientée Objet (POO)",
            content: "La POO est un paradigme de programmation basé sur le concept d'objets, qui peuvent contenir des données (attributs) et du code (méthodes). Les quatre principes de la POO sont : l'encapsulation, l'abstraction, l'héritage et le polymorphisme."
        },
        {
            theme: "programming",
            title: "Récursivité",
            content: "La récursivité est une technique où une fonction s'appelle elle-même pour résoudre un problème. Elle est souvent utilisée pour les problèmes qui peuvent être décomposés en sous-problèmes similaires (comme les parcours d'arbres, factorielle, Fibonacci, etc.)."
        },
        {
            theme: "networks",
            title: "Modèle OSI",
            content: "Le modèle OSI (Open Systems Interconnection) est un modèle conceptuel qui caractérise et standardise les fonctions de communication d'un système de télécommunication ou informatique en sept couches : Physique, Liaison, Réseau, Transport, Session, Présentation, Application."
        },
        {
            theme: "networks",
            title: "Protocole HTTP",
            content: "HTTP est un protocole de la couche application du modèle OSI, utilisé pour transférer des hypertextes sur le web. Il fonctionne sur un modèle client-serveur et est sans état (stateless). Les méthodes HTTP courantes sont GET, POST, PUT, DELETE, PATCH, etc."
        },
        {
            theme: "databases",
            title: "SGBDR",
            content: "Un SGBDR (Système de Gestion de Bases de Données Relationnelles) est un logiciel qui permet de créer, gérer et manipuler des bases de données relationnelles. Exemples : MySQL, PostgreSQL, Oracle, SQL Server. Il utilise le langage SQL pour interagir avec les données."
        },
        {
            theme: "databases",
            title: "Transaction ACID",
            content: "ACID est un acronyme pour Atomicité, Cohérence, Isolation, Durabilité. Ces propriétés garantissent la fiabilité des transactions dans les bases de données. L'atomicité assure que la transaction est complète ou nulle ; la cohérence maintient l'intégrité des données ; l'isolation évite les interférences entre transactions concurrentes ; la durabilité préserve les résultats des transactions validées."
        },
        {
            theme: "algorithms",
            title: "Complexité algorithmique",
            content: "La complexité algorithmique mesure l'efficacité d'un algorithme en termes de temps d'exécution (complexité temporelle) et d'espace mémoire utilisé (complexité spatiale). Elle est généralement exprimée avec la notation Big O (O), qui décrit le comportement asymptotique de l'algorithme dans le pire cas."
        },
        {
            theme: "algorithms",
            title: "Algorithmes de tri",
            content: "Les algorithmes de tri organisent les éléments d'une collection dans un ordre spécifique (croissant ou décroissant). Les algorithmes courants incluent : Tri à bulles (O(n²)), Tri par insertion (O(n²)), Tri rapide (O(n log n) en moyenne), Tri fusion (O(n log n)), Tri par tas (O(n log n))."
        },
        {
            theme: "web",
            title: "CSS Flexbox",
            content: "Flexbox est un modèle de mise en page CSS conçu pour distribuer l'espace et aligner les éléments dans un conteneur, même lorsque leur taille est inconnue ou dynamique. Il fonctionne avec deux axes (principal et transversal) et permet de créer des mises en page responsives avec moins de code."
        },
        {
            theme: "web",
            title: "API REST",
            content: "REST (Representational State Transfer) est un style d'architecture pour les systèmes distribués. Une API REST utilise des requêtes HTTP standard (GET, POST, PUT, DELETE) pour manipuler des ressources identifiées par des URL. Elle est sans état, cacheable et suit une interface uniforme."
        },
        {
            theme: "security",
            title: "Chiffrement symétrique vs asymétrique",
            content: "Le chiffrement symétrique utilise la même clé pour chiffrer et déchiffrer (ex: AES). Le chiffrement asymétrique utilise une paire de clés : une publique pour chiffrer et une privée pour déchiffrer (ex: RSA). Le symétrique est plus rapide mais nécessite un échange sécurisé de la clé."
        },
        {
            theme: "security",
            title: "Pare-feu (Firewall)",
            content: "Un pare-feu est un système de sécurité réseau qui contrôle le trafic entrant et sortant selon des règles de sécurité prédéfinies. Il peut être logiciel ou matériel, et agit comme une barrière entre un réseau interne fiable et un réseau externe non fiable (comme Internet)."
        }
    ],
    
    definitions: [
        {
            theme: "programming",
            term: "Closure (Fermeture)",
            definition: "Une closure est une fonction qui a accès à son propre scope, au scope de la fonction parente, et au scope global, même après que la fonction parente ait terminé son exécution."
        },
        {
            theme: "programming",
            term: "Polymorphisme",
            definition: "Capacité d'un objet à prendre plusieurs formes. En POO, cela permet à des objets de différentes classes de répondre à la même méthode de manière différente."
        },
        {
            theme: "networks",
            term: "DNS (Domain Name System)",
            definition: "Système qui traduit les noms de domaine (comme www.example.com) en adresses IP numériques, permettant aux utilisateurs d'accéder aux sites web avec des noms faciles à retenir."
        },
        {
            theme: "networks",
            term: "Firewall",
            definition: "Système de sécurité réseau qui contrôle le trafic entrant et sortant selon des règles de sécurité prédéfinies, protégeant ainsi le réseau contre les accès non autorisés."
        },
        {
            theme: "databases",
            term: "Clé primaire",
            definition: "Attribut ou combinaison d'attributs qui identifie de manière unique chaque enregistrement dans une table de base de données. Elle ne peut pas contenir de valeurs NULL."
        },
        {
            theme: "databases",
            term: "Index",
            definition: "Structure de données qui améliore la vitesse des opérations de récupération de données dans une table au prix d'un espace de stockage supplémentaire et d'une mise à jour plus lente."
        },
        {
            theme: "algorithms",
            term: "Backtracking",
            definition: "Technique algorithmique qui explore systématiquement toutes les solutions possibles à un problème en construisant des solutions progressivement et en abandonnant celles qui s'avèrent inadéquates (retour en arrière)."
        },
        {
            theme: "algorithms",
            term: "Diviser pour régner",
            definition: "Paradigme algorithmique qui divise récursivement un problème en sous-problèmes similaires mais plus simples, résout les sous-problèmes, puis combine leurs solutions pour résoudre le problème original."
        },
        {
            theme: "web",
            term: "Cookies",
            definition: "Petits fichiers texte stockés sur l'ordinateur du client par le navigateur web. Ils sont utilisés pour mémoriser des informations sur l'utilisateur (préférences, état de connexion, etc.) entre les sessions."
        },
        {
            theme: "web",
            term: "AJAX",
            definition: "Asynchronous JavaScript and XML - Technique de développement web qui permet d'envoyer et de recevoir des données d'un serveur de manière asynchrone sans recharger la page web entière."
        },
        {
            theme: "security",
            term: "Phishing",
            definition: "Technique de fraude qui consiste à tromper l'utilisateur pour qu'il divulgue des informations sensibles (identifiants, numéros de carte bancaire) en se faisant passer pour une entité de confiance (banque, service en ligne)."
        },
        {
            theme: "security",
            term: "Chiffrement",
            definition: "Processus de conversion de données en une forme illisible (chiffrée) pour empêcher leur lecture par des personnes non autorisées. Le déchiffrement est le processus inverse pour récupérer les données originales."
        }
    ],
    
    reviewHistory: [],
    
    stats: {
        totalQuestionsReviewed: 0,
        questionsReviewedToday: 0,
        lastReviewDate: null
    }
};

// ============================================
// VARIABLES GLOBALES
// ============================================
let appData = JSON.parse(JSON.stringify(defaultData));
let currentTheme = "all";
let currentQuestion = null;
let currentRevisionQuestion = null;
let answerVisible = false;
let revisionAnswerVisible = false;
let examTheme = "all";
let examSort = "default";
let examFilters = {
    unreviewed: true,
    easy: true,
    medium: true,
    hard: true
};

// ============================================
// INITIALISATION DE L'APPLICATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Charger les données depuis localStorage
    loadData();
    
    // Initialiser les composants
    initThemeSelectors();
    initTabs();
    initButtons();
    initExamControls();
    updateDashboard();
    updateQuestion();
    updateRevision();
    updateCourseContent();
    updateHistory();
    updateExam();
    
    // Mettre à jour l'année en cours dans le footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Mettre à jour les statistiques quotidiennes
    updateDailyStats();
});

// ============================================
// FONCTIONS DE GESTION DES DONNÉES
// ============================================
function loadData() {
    const savedData = localStorage.getItem('questionBoxData');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            
            // Fusionner avec les données par défaut pour s'assurer que les nouvelles propriétés existent
            appData = mergeData(defaultData, parsedData);
            
            // Vérifier si nous devons réinitialiser le compteur quotidien (si la date a changé)
            updateDailyStats();
        } catch (e) {
            console.error("Erreur lors du chargement des données, utilisation des données par défaut", e);
            appData = JSON.parse(JSON.stringify(defaultData));
        }
    } else {
        appData = JSON.parse(JSON.stringify(defaultData));
    }
}

function mergeData(defaultData, savedData) {
    // Fusionner récursivement les données sauvegardées avec les données par défaut
    const result = JSON.parse(JSON.stringify(defaultData));
    
    // Fusionner les thèmes
    if (savedData.themes) {
        result.themes = savedData.themes;
    }
    
    // Fusionner les questions
    if (savedData.questions) {
        result.questions = savedData.questions;
    }
    
    // Fusionner les cours
    if (savedData.courses) {
        result.courses = savedData.courses;
    }
    
    // Fusionner les définitions
    if (savedData.definitions) {
        result.definitions = savedData.definitions;
    }
    
    // Fusionner l'historique
    if (savedData.reviewHistory) {
        result.reviewHistory = savedData.reviewHistory;
    }
    
    // Fusionner les statistiques
    if (savedData.stats) {
        result.stats = savedData.stats;
    }
    
    return result;
}

function saveData() {
    try {
        localStorage.setItem('questionBoxData', JSON.stringify(appData));
    } catch (e) {
        console.error("Erreur lors de la sauvegarde des données", e);
        alert("Erreur lors de la sauvegarde des données. L'espace de stockage local est peut-être plein.");
    }
}

function updateDailyStats() {
    const today = new Date().toDateString();
    
    // Si c'est un nouveau jour, réinitialiser le compteur quotidien
    if (appData.stats.lastReviewDate !== today) {
        appData.stats.questionsReviewedToday = 0;
        appData.stats.lastReviewDate = today;
        saveData();
        updateDashboard();
    }
}

// ============================================
// INITIALISATION DES COMPOSANTS
// ============================================
function initThemeSelectors() {
    const quickThemeSelector = document.getElementById('quick-theme-selector');
    const courseThemeSelector = document.getElementById('course-theme-selector');
    const examThemeSelect = document.getElementById('exam-theme-select');
    
    // Vider les conteneurs
    quickThemeSelector.innerHTML = '';
    courseThemeSelector.innerHTML = '';
    examThemeSelect.innerHTML = '<option value="all">Tous les thèmes</option>';
    
    // Ajouter le bouton "Tous" pour les questions rapides
    const allBtn = document.createElement('button');
    allBtn.className = `theme-btn ${currentTheme === 'all' ? 'active' : ''}`;
    allBtn.textContent = 'Tous les thèmes';
    allBtn.dataset.theme = 'all';
    allBtn.addEventListener('click', () => {
        currentTheme = 'all';
        document.querySelectorAll('#quick-theme-selector .theme-btn').forEach(btn => btn.classList.remove('active'));
        allBtn.classList.add('active');
        updateQuestion();
    });
    quickThemeSelector.appendChild(allBtn);
    
    // Ajouter le bouton "Tous" pour les cours
    const allCourseBtn = document.createElement('button');
    allCourseBtn.className = `theme-btn`;
    allCourseBtn.textContent = 'Tous les thèmes';
    allCourseBtn.dataset.theme = 'all';
    allCourseBtn.addEventListener('click', () => {
        currentTheme = 'all';
        document.querySelectorAll('#course-theme-selector .theme-btn').forEach(btn => btn.classList.remove('active'));
        allCourseBtn.classList.add('active');
        updateCourseContent();
    });
    courseThemeSelector.appendChild(allCourseBtn);
    
    // Ajouter les boutons pour chaque thème
    appData.themes.forEach(theme => {
        // Pour les questions rapides
        const themeBtn = document.createElement('button');
        themeBtn.className = `theme-btn`;
        themeBtn.textContent = theme.name;
        themeBtn.dataset.theme = theme.id;
        themeBtn.style.borderLeft = `4px solid ${theme.color}`;
        themeBtn.addEventListener('click', () => {
            currentTheme = theme.id;
            document.querySelectorAll('#quick-theme-selector .theme-btn').forEach(btn => btn.classList.remove('active'));
            themeBtn.classList.add('active');
            updateQuestion();
        });
        quickThemeSelector.appendChild(themeBtn);
        
        // Pour les cours
        const courseThemeBtn = document.createElement('button');
        courseThemeBtn.className = `theme-btn`;
        courseThemeBtn.textContent = theme.name;
        courseThemeBtn.dataset.theme = theme.id;
        courseThemeBtn.style.borderLeft = `4px solid ${theme.color}`;
        courseThemeBtn.addEventListener('click', () => {
            currentTheme = theme.id;
            document.querySelectorAll('#course-theme-selector .theme-btn').forEach(btn => btn.classList.remove('active'));
            courseThemeBtn.classList.add('active');
            updateCourseContent();
        });
        courseThemeSelector.appendChild(courseThemeBtn);
        
        // Pour le mode examen (select)
        const examOption = document.createElement('option');
        examOption.value = theme.id;
        examOption.textContent = theme.name;
        examThemeSelect.appendChild(examOption);
    });
}

function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            
            // Mettre à jour les onglets actifs
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Mettre à jour le contenu actif
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(`${tabId}-tab`).classList.add('active');
            
            // Si on active l'onglet de révision, mettre à jour les questions
            if (tabId === 'revision') {
                updateRevision();
            }
            
            // Si on active l'onglet examen, mettre à jour l'affichage
            if (tabId === 'exam') {
                updateExam();
            }
        });
    });
}

function initButtons() {
    // Boutons pour les questions rapides
    document.getElementById('show-answer-btn').addEventListener('click', showAnswer);
    document.getElementById('next-question-btn').addEventListener('click', nextQuestion);
    
    // Boutons pour les révisions
    document.getElementById('show-revision-answer-btn').addEventListener('click', showRevisionAnswer);
    document.getElementById('next-revision-btn').addEventListener('click', nextRevision);
    
    // Boutons de difficulté
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            if (currentRevisionQuestion) {
                const difficulty = this.dataset.difficulty;
                updateQuestionDifficulty(currentRevisionQuestion.id, difficulty);
            }
        });
    });
    
    // Boutons de gestion des données
    document.getElementById('export-data-btn').addEventListener('click', exportData);
    document.getElementById('import-data-btn').addEventListener('click', importData);
    document.getElementById('reset-data-btn').addEventListener('click', resetData);
    document.getElementById('save-import-btn').addEventListener('click', saveImportedData);
    document.getElementById('clear-history-btn').addEventListener('click', clearHistory);
    
    // Boutons pour le mode examen
    document.getElementById('expand-all-btn').addEventListener('click', expandAllExamQuestions);
    document.getElementById('collapse-all-btn').addEventListener('click', collapseAllExamQuestions);
    document.getElementById('mark-all-reviewed-btn').addEventListener('click', markAllAsReviewed);
}

function initExamControls() {
    // Sélecteur de thème
    document.getElementById('exam-theme-select').addEventListener('change', function() {
        examTheme = this.value;
        updateExam();
    });
    
    // Sélecteur de tri
    document.getElementById('exam-sort-select').addEventListener('change', function() {
        examSort = this.value;
        updateExam();
    });
    
    // Filtres
    document.getElementById('filter-unreviewed').addEventListener('change', function() {
        examFilters.unreviewed = this.checked;
        updateExam();
    });
    
    document.getElementById('filter-easy').addEventListener('change', function() {
        examFilters.easy = this.checked;
        updateExam();
    });
    
    document.getElementById('filter-medium').addEventListener('change', function() {
        examFilters.medium = this.checked;
        updateExam();
    });
    
    document.getElementById('filter-hard').addEventListener('change', function() {
        examFilters.hard = this.checked;
        updateExam();
    });
}

// ============================================
// FONCTIONS POUR LES QUESTIONS RAPIDES
// ============================================
function updateQuestion() {
    const questions = getFilteredQuestions();
    
    if (questions.length === 0) {
        document.getElementById('question-container').innerHTML = `
            <div class="question-card">
                <p class="question-text">Aucune question disponible pour le thème sélectionné.</p>
            </div>
        `;
        document.getElementById('show-answer-btn').classList.add('hidden');
        return;
    }
    
    // Sélectionner une question aléatoire
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    
    // Mettre à jour l'affichage
    document.getElementById('question-container').innerHTML = `
        <div class="question-card">
            <div class="theme-badge" style="background-color: ${getThemeColor(currentQuestion.theme)}; color: white; padding: 0.3rem 0.8rem; border-radius: 20px; display: inline-block; margin-bottom: 1rem; font-size: 0.9rem;">
                ${getThemeName(currentQuestion.theme)}
            </div>
            <p class="question-text">${currentQuestion.question}</p>
            <div class="answer-area ${answerVisible ? '' : 'hidden'}" id="answer-area">
                <p class="answer-text">${currentQuestion.answer}</p>
            </div>
        </div>
    `;
    
    // Réinitialiser l'état de la réponse
    answerVisible = false;
    document.getElementById('show-answer-btn').classList.remove('hidden');
}

function showAnswer() {
    answerVisible = true;
    document.getElementById('answer-area').classList.remove('hidden');
}

function nextQuestion() {
    updateQuestion();
}

// ============================================
// FONCTIONS POUR LES RÉVISIONS ESPACÉES
// ============================================
function updateRevision() {
    const questionsToReview = getQuestionsToReview();
    
    if (questionsToReview.length === 0) {
        document.getElementById('revision-container').innerHTML = `
            <div class="revision-card">
                <p class="revision-question">Aucune question à réviser pour le moment. Revenez plus tard ou essayez les questions rapides.</p>
            </div>
        `;
        document.getElementById('show-revision-answer-btn').classList.add('hidden');
        document.querySelector('.difficulty').classList.add('hidden');
        return;
    }
    
    // Sélectionner la question la plus prioritaire (celle avec la date de révision la plus proche)
    questionsToReview.sort((a, b) => new Date(a.nextReview) - new Date(b.nextReview));
    currentRevisionQuestion = questionsToReview[0];
    
    // Mettre à jour l'affichage
    document.getElementById('revision-container').innerHTML = `
        <div class="revision-card">
            <div class="theme-badge" style="background-color: ${getThemeColor(currentRevisionQuestion.theme)}; color: white; padding: 0.3rem 0.8rem; border-radius: 20px; display: inline-block; margin-bottom: 1rem; font-size: 0.9rem;">
                ${getThemeName(currentRevisionQuestion.theme)}
            </div>
            <p class="revision-question">${currentRevisionQuestion.question}</p>
            <div class="answer-area ${revisionAnswerVisible ? '' : 'hidden'}" id="revision-answer-area">
                <p class="answer-text">${currentRevisionQuestion.answer}</p>
            </div>
        </div>
    `;
    
    // Réinitialiser l'état de la réponse
    revisionAnswerVisible = false;
    document.getElementById('show-revision-answer-btn').classList.remove('hidden');
    document.querySelector('.difficulty').classList.remove('hidden');
    
    // Réinitialiser les boutons de difficulté
    document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('active'));
}

function showRevisionAnswer() {
    revisionAnswerVisible = true;
    document.getElementById('revision-answer-area').classList.remove('hidden');
}

function nextRevision() {
    updateRevision();
}

function updateQuestionDifficulty(questionId, difficulty) {
    const question = appData.questions.find(q => q.id === questionId);
    if (!question) return;
    
    // Mettre à jour les statistiques de la question
    question.reviewCount++;
    question.lastReviewed = new Date().toISOString();
    
    // Déterminer la prochaine date de révision basée sur la difficulté
    const now = new Date();
    let daysToAdd = 1;
    
    if (difficulty === 'easy') {
        daysToAdd = 7; // Révision dans une semaine
        question.correctCount++;
    } else if (difficulty === 'medium') {
        daysToAdd = 3; // Révision dans 3 jours
        question.correctCount += 0.5;
    } else if (difficulty === 'hard') {
        daysToAdd = 1; // Révision demain
    }
    
    const nextReviewDate = new Date(now);
    nextReviewDate.setDate(now.getDate() + daysToAdd);
    question.nextReview = nextReviewDate.toISOString();
    
    // Mettre à jour les statistiques globales
    appData.stats.totalQuestionsReviewed++;
    appData.stats.questionsReviewedToday++;
    
    // Ajouter à l'historique
    appData.reviewHistory.unshift({
        date: new Date().toISOString(),
        questionId: question.id,
        theme: question.theme,
        difficulty: difficulty,
        questionText: question.question.substring(0, 50) + '...'
    });
    
    // Limiter l'historique à 50 entrées
    if (appData.reviewHistory.length > 50) {
        appData.reviewHistory.pop();
    }
    
    // Sauvegarder et mettre à jour l'affichage
    saveData();
    updateDashboard();
    updateRevision();
    updateHistory();
    updateExam();
}

function getQuestionsToReview() {
    const now = new Date();
    
    return appData.questions.filter(question => {
        // Si la question n'a jamais été révisée, elle doit être révisée
        if (!question.nextReview) return true;
        
        // Sinon, vérifier si la date de révision est passée
        const reviewDate = new Date(question.nextReview);
        return reviewDate <= now;
    });
}

// ============================================
// FONCTIONS POUR LE MODE EXAMEN
// ============================================
function updateExam() {
    const examContainer = document.getElementById('exam-container');
    const examStats = calculateExamStats();
    
    // Mettre à jour les statistiques
    document.getElementById('exam-total-questions').textContent = examStats.total;
    document.getElementById('exam-to-review').textContent = examStats.toReview;
    document.getElementById('exam-mastered').textContent = examStats.mastered;
    
    // Obtenir les questions filtrées et triées
    const filteredQuestions = getFilteredExamQuestions();
    
    if (filteredQuestions.length === 0) {
        examContainer.innerHTML = `
            <div class="exam-question">
                <p>Aucune question ne correspond aux filtres sélectionnés. Essayez de modifier vos critères.</p>
            </div>
        `;
        return;
    }
    
    // Générer le HTML pour chaque question
    let html = '';
    
    filteredQuestions.forEach((question, index) => {
        const theme = getThemeName(question.theme);
        const themeColor = getThemeColor(question.theme);
        const masteryRate = question.reviewCount > 0 
            ? Math.round((question.correctCount / question.reviewCount) * 100) 
            : 0;
        
        html += `
            <div class="exam-question ${question.reviewCount === 0 ? 'no-review' : ''}" data-id="${question.id}">
                <div class="exam-question-header">
                    <h3>Question ${index + 1} - ${theme}</h3>
                    <div class="exam-question-meta">
                        <span class="exam-question-difficulty ${question.difficulty}">
                            ${question.difficulty === 'easy' ? 'Facile' : question.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
                        </span>
                        <span class="exam-question-review-status ${question.reviewCount > 0 ? 'reviewed' : ''}">
                            ${question.reviewCount > 0 ? `Révisée ${question.reviewCount}x (${masteryRate}%)` : 'Non révisée'}
                        </span>
                        <button class="exam-question-toggle" data-action="toggle">
                            <i class="fas fa-chevron-down"></i>
                        </button>
                    </div>
                </div>
                <div class="exam-question-content">
                    <div class="exam-question-text">${question.question}</div>
                    <div class="exam-question-answer">
                        <h4><i class="fas fa-lightbulb"></i> Réponse :</h4>
                        <p>${question.answer}</p>
                    </div>
                    <div class="exam-question-actions">
                        <button class="btn btn-success btn-sm mark-reviewed-btn" data-id="${question.id}">
                            <i class="fas fa-check"></i> Marquer comme révisée
                        </button>
                        <button class="btn btn-warning btn-sm mark-easy-btn" data-id="${question.id}" data-difficulty="easy">
                            Facile
                        </button>
                        <button class="btn btn-warning btn-sm mark-medium-btn" data-id="${question.id}" data-difficulty="medium">
                            Moyen
                        </button>
                        <button class="btn btn-warning btn-sm mark-hard-btn" data-id="${question.id}" data-difficulty="hard">
                            Difficile
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    examContainer.innerHTML = html;
    
    // Ajouter les événements aux boutons
    attachExamQuestionEvents();
}

function getFilteredExamQuestions() {
    let filtered = appData.questions;
    
    // Filtrer par thème
    if (examTheme !== 'all') {
        filtered = filtered.filter(q => q.theme === examTheme);
    }
    
    // Filtrer par difficulté
    const difficultyFilters = [];
    if (examFilters.easy) difficultyFilters.push('easy');
    if (examFilters.medium) difficultyFilters.push('medium');
    if (examFilters.hard) difficultyFilters.push('hard');
    
    if (difficultyFilters.length > 0) {
        filtered = filtered.filter(q => difficultyFilters.includes(q.difficulty));
    } else {
        filtered = []; // Si aucune difficulté n'est cochée, aucune question
    }
    
    // Filtrer par statut de révision
    if (!examFilters.unreviewed) {
        filtered = filtered.filter(q => q.reviewCount > 0);
    }
    
    // Trier les questions
    filtered.sort((a, b) => {
        switch (examSort) {
            case 'difficulty-asc':
                // Facile -> Moyen -> Difficile
                const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
                return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
                
            case 'difficulty-desc':
                // Difficile -> Moyen -> Facile
                const difficultyOrderDesc = { easy: 3, medium: 2, hard: 1 };
                return difficultyOrderDesc[a.difficulty] - difficultyOrderDesc[b.difficulty];
                
            case 'mastery':
                // Par taux de maîtrise (faible à élevée)
                const masteryA = a.reviewCount > 0 ? a.correctCount / a.reviewCount : 0;
                const masteryB = b.reviewCount > 0 ? b.correctCount / b.reviewCount : 0;
                return masteryA - masteryB;
                
            default:
                // Ordre par défaut (par ID)
                return a.id - b.id;
        }
    });
    
    return filtered;
}

function calculateExamStats() {
    // Calculer les statistiques basées sur les filtres actuels
    const filteredQuestions = getFilteredExamQuestions();
    
    const total = filteredQuestions.length;
    const toReview = filteredQuestions.filter(q => q.reviewCount === 0).length;
    const mastered = filteredQuestions.filter(q => q.reviewCount > 0 && q.correctCount / q.reviewCount >= 0.8).length;
    
    return { total, toReview, mastered };
}

function expandAllExamQuestions() {
    document.querySelectorAll('.exam-question').forEach(q => {
        q.classList.remove('collapsed');
        const icon = q.querySelector('.exam-question-toggle i');
        if (icon) {
            icon.className = 'fas fa-chevron-down';
        }
    });
}

function collapseAllExamQuestions() {
    document.querySelectorAll('.exam-question').forEach(q => {
        q.classList.add('collapsed');
        const icon = q.querySelector('.exam-question-toggle i');
        if (icon) {
            icon.className = 'fas fa-chevron-right';
        }
    });
}

function markAllAsReviewed() {
    const filteredQuestions = getFilteredExamQuestions();
    
    if (filteredQuestions.length === 0) {
        alert("Aucune question à marquer comme révisée.");
        return;
    }
    
    if (confirm(`Voulez-vous vraiment marquer ${filteredQuestions.length} question(s) comme révisée(s) ?`)) {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        filteredQuestions.forEach(question => {
            if (question.reviewCount === 0) {
                question.reviewCount = 1;
                question.correctCount = 0.5; // Moyenne par défaut
                question.lastReviewed = now.toISOString();
                question.nextReview = tomorrow.toISOString();
                
                // Mettre à jour les statistiques
                appData.stats.totalQuestionsReviewed++;
                appData.stats.questionsReviewedToday++;
            }
        });
        
        // Sauvegarder et mettre à jour
        saveData();
        updateDashboard();
        updateExam();
        updateHistory();
    }
}

function attachExamQuestionEvents() {
    // Événements pour les boutons de bascule (déplier/replier)
    document.querySelectorAll('.exam-question-toggle').forEach(btn => {
        btn.addEventListener('click', function() {
            const questionElement = this.closest('.exam-question');
            const isCollapsed = questionElement.classList.contains('collapsed');
            
            if (isCollapsed) {
                questionElement.classList.remove('collapsed');
                this.innerHTML = '<i class="fas fa-chevron-down"></i>';
            } else {
                questionElement.classList.add('collapsed');
                this.innerHTML = '<i class="fas fa-chevron-right"></i>';
            }
        });
    });
    
    // Événements pour les boutons "Marquer comme révisée"
    document.querySelectorAll('.mark-reviewed-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const questionId = parseInt(this.dataset.id);
            markAsReviewed(questionId);
        });
    });
    
    // Événements pour les boutons de difficulté
    document.querySelectorAll('.mark-easy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const questionId = parseInt(this.dataset.id);
            updateQuestionDifficulty(questionId, 'easy');
        });
    });
    
    document.querySelectorAll('.mark-medium-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const questionId = parseInt(this.dataset.id);
            updateQuestionDifficulty(questionId, 'medium');
        });
    });
    
    document.querySelectorAll('.mark-hard-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const questionId = parseInt(this.dataset.id);
            updateQuestionDifficulty(questionId, 'hard');
        });
    });
}

function markAsReviewed(questionId) {
    const question = appData.questions.find(q => q.id === questionId);
    if (!question) return;
    
    // Marquer comme révisée aujourd'hui avec difficulté moyenne par défaut
    updateQuestionDifficulty(questionId, 'medium');
}

// ============================================
// FONCTIONS POUR LES COURS ET DÉFINITIONS
// ============================================
function updateCourseContent() {
    const coursesContent = document.getElementById('courses-content');
    
    // Filtrer les cours et définitions par thème
    const filteredCourses = currentTheme === 'all' 
        ? appData.courses 
        : appData.courses.filter(course => course.theme === currentTheme);
        
    const filteredDefinitions = currentTheme === 'all' 
        ? appData.definitions 
        : appData.definitions.filter(def => def.theme === currentTheme);
    
    // Construire le contenu HTML
    let html = '';
    
    // Cours
    if (filteredCourses.length > 0) {
        html += '<h3 style="margin-bottom: 1rem; color: var(--secondary);"><i class="fas fa-book-open"></i> Cours</h3>';
        html += '<ul class="course-list">';
        
        filteredCourses.forEach(course => {
            html += `
                <li class="course-item">
                    <div class="theme-badge" style="background-color: ${getThemeColor(course.theme)}; color: white; padding: 0.2rem 0.6rem; border-radius: 20px; display: inline-block; margin-bottom: 0.5rem; font-size: 0.8rem;">
                        ${getThemeName(course.theme)}
                    </div>
                    <h4 class="course-title">${course.title}</h4>
                    <div class="course-content">${course.content}</div>
                </li>
            `;
        });
        
        html += '</ul>';
    }
    
    // Définitions
    if (filteredDefinitions.length > 0) {
        html += '<h3 style="margin-bottom: 1rem; color: var(--secondary); margin-top: 2rem;"><i class="fas fa-font"></i> Définitions</h3>';
        html += '<ul class="definition-list">';
        
        filteredDefinitions.forEach(definition => {
            html += `
                <li class="definition-item">
                    <div class="theme-badge" style="background-color: ${getThemeColor(definition.theme)}; color: white; padding: 0.2rem 0.6rem; border-radius: 20px; display: inline-block; margin-bottom: 0.5rem; font-size: 0.8rem;">
                        ${getThemeName(definition.theme)}
                    </div>
                    <h4 class="definition-term">${definition.term}</h4>
                    <div class="definition-content">${definition.definition}</div>
                </li>
            `;
        });
        
        html += '</ul>';
    }
    
    // Si aucun contenu
    if (filteredCourses.length === 0 && filteredDefinitions.length === 0) {
        html = '<p>Aucun cours ou définition disponible pour le thème sélectionné.</p>';
    }
    
    coursesContent.innerHTML = html;
}

// ============================================
// FONCTIONS POUR L'HISTORIQUE
// ============================================
function updateHistory() {
    const historyContainer = document.getElementById('review-history');
    
    if (appData.reviewHistory.length === 0) {
        historyContainer.innerHTML = '<p>Aucune révision enregistrée pour le moment.</p>';
        return;
    }
    
    let html = '';
    
    appData.reviewHistory.forEach(review => {
        const date = new Date(review.date);
        const formattedDate = date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        html += `
            <div class="review-item">
                <div>
                    <div class="review-date">${formattedDate}</div>
                    <div>${review.questionText}</div>
                </div>
                <div>
                    <span class="review-theme">${getThemeName(review.theme)}</span>
                    <span class="review-difficulty ${review.difficulty}">${review.difficulty === 'easy' ? 'Facile' : review.difficulty === 'medium' ? 'Moyen' : 'Difficile'}</span>
                </div>
            </div>
        `;
    });
    
    historyContainer.innerHTML = html;
}

function clearHistory() {
    if (confirm("Êtes-vous sûr de vouloir effacer tout l'historique des révisions ?")) {
        appData.reviewHistory = [];
        saveData();
        updateHistory();
        updateDashboard();
    }
}

// ============================================
// FONCTIONS POUR LE TABLEAU DE BORD
// ============================================
function updateDashboard() {
    // Total des questions
    document.getElementById('total-questions').textContent = appData.questions.length;
    
    // Questions révisées aujourd'hui
    document.getElementById('reviewed-today').textContent = appData.stats.questionsReviewedToday;
    
    // Taux de maîtrise (moyenne des correctCount / reviewCount)
    let masteryRate = 0;
    const reviewedQuestions = appData.questions.filter(q => q.reviewCount > 0);
    
    if (reviewedQuestions.length > 0) {
        const totalCorrect = reviewedQuestions.reduce((sum, q) => sum + (q.correctCount || 0), 0);
        const totalReviews = reviewedQuestions.reduce((sum, q) => sum + q.reviewCount, 0);
        masteryRate = Math.round((totalCorrect / totalReviews) * 100);
    }
    
    document.getElementById('mastery-rate').textContent = `${masteryRate}%`;
    
    // Progression globale (questions révisées au moins une fois)
    const totalQuestions = appData.questions.length;
    const reviewedCount = appData.questions.filter(q => q.reviewCount > 0).length;
    const progressPercentage = totalQuestions > 0 ? Math.round((reviewedCount / totalQuestions) * 100) : 0;
    
    document.getElementById('global-progress').style.width = `${progressPercentage}%`;
    document.getElementById('progress-text').textContent = `${progressPercentage}%`;
}

// ============================================
// FONCTIONS DE GESTION DES DONNÉES (EXPORT/IMPORT)
// ============================================
function exportData() {
    const exportData = {
        themes: appData.themes,
        questions: appData.questions,
        courses: appData.courses,
        definitions: appData.definitions,
        // Note: nous n'exportons pas l'historique et les stats pour éviter la confusion
        exportDate: new Date().toISOString(),
        version: "1.0"
    };
    
    document.getElementById('data-textarea').value = JSON.stringify(exportData, null, 2);
}

function importData() {
    document.getElementById('data-textarea').value = "Collez ici vos données exportées...";
    document.getElementById('data-textarea').focus();
}

function saveImportedData() {
    const dataText = document.getElementById('data-textarea').value.trim();
    
    if (!dataText) {
        alert("Veuillez d'abord exporter ou coller des données à importer.");
        return;
    }
    
    try {
        const importedData = JSON.parse(dataText);
        
        // Validation basique des données
        if (!importedData.themes || !importedData.questions || !importedData.courses || !importedData.definitions) {
            throw new Error("Format de données invalide. Assurez-vous que les données exportées contiennent les sections requises.");
        }
        
        // Demander confirmation
        if (confirm("L'importation remplacera toutes vos données actuelles (sauf l'historique). Voulez-vous continuer ?")) {
            // Remplacer les données principales
            appData.themes = importedData.themes;
            appData.questions = importedData.questions;
            appData.courses = importedData.courses;
            appData.definitions = importedData.definitions;
            
            // Réinitialiser l'historique et certaines stats pour éviter les incohérences
            appData.reviewHistory = [];
            appData.stats.questionsReviewedToday = 0;
            appData.stats.totalQuestionsReviewed = 0;
            
            // Sauvegarder et recharger l'application
            saveData();
            location.reload();
        }
    } catch (e) {
        alert(`Erreur lors de l'importation des données: ${e.message}`);
        console.error(e);
    }
}

function resetData() {
    if (confirm("Cette action réinitialisera toutes les données aux valeurs par défaut (y compris l'historique). Voulez-vous continuer ?")) {
        // Réinitialiser toutes les données
        appData = JSON.parse(JSON.stringify(defaultData));
        
        // Sauvegarder et recharger l'application
        saveData();
        location.reload();
    }
}

// ============================================
// FONCTIONS UTILITAIRES
// ============================================
function getFilteredQuestions() {
    if (currentTheme === 'all') {
        return appData.questions;
    }
    return appData.questions.filter(q => q.theme === currentTheme);
}

function getThemeColor(themeId) {
    const theme = appData.themes.find(t => t.id === themeId);
    return theme ? theme.color : '#3498db';
}

function getThemeName(themeId) {
    const theme = appData.themes.find(t => t.id === themeId);
    return theme ? theme.name : 'Inconnu';
}