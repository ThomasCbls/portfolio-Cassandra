// Toutes les informations personnelles du site sont ici.
// Remplacez les valeurs d'exemple par les vraies.

export const profil = {
  nom: 'Cassandra Levêque',
  statut: "Étudiante en master Humanités Numériques",
  presentation:
    "Formée à l'histoire et au patrimoine à l'Université du Mans, j'entre en master Humanités numériques au CESR de Tours. Médiation culturelle, numérisation et valorisation des sources : je cherche à rendre le patrimoine accessible. Je recherche actuellement un stage pour réaliser mon mémoire professionnel.",
  email: 'levequecassandra83@gmail.com',
  ville: 'Tours',
  // Inscription qui fait le tour du médaillon d'accueil
  devise: 'Histoire · Patrimoine · Humanités numériques',
  // Portrait affiché dans le médaillon ovale : déposer l'image dans public/
  // (ex. '/portrait.jpg'). Laisser vide pour afficher les initiales.
  portrait: '',
  cv: '/cv.pdf',
  liens: [
    { nom: 'LinkedIn', url: 'https://www.linkedin.com/in/cassandra-lev%C3%AAque-4055b9229/', target: '_blank' },
  ],
};

// Parcours, du plus récent au plus ancien.
// Par défaut, une entrée est affichée comme des études (filet doré).
// Ajouter `alternance: true` ou `stage: true` pour changer son affichage sur la frise.
export const parcours = [
  {
    dates: 'septembre 2026–2028',
    titre: "Master Humanités Numériques PARCOURS Médiation numérique",
    lieu: 'CESR, Université de Tours',
  },
  {
    dates: '2025',
    titre: 'Stage en archéologie et médiation scientifique',
    lieu: 'Association Jean Jousse, Sarthe',
    stage: true,
  },
  {
    dates: '2023– avril 2026',
    titre: 'Licence Histoire, PARCOURS Patrimoine',
    lieu: 'Université du Mans',
  },
  {
    dates: '2022–2023',
    titre: 'Chargée de communication',
    lieu: 'Domaine du Chapeau, Neuville-sur-Sarthe',
    alternance: true,
  },
  {
    dates: '2022–2023',
    titre: 'BTS Communication en alternance',
    lieu: 'ECOFAC au Mans',
  },
  {
    dates: '2020–2022',
    titre: 'Baccalauréat STMG, spécialité Marketing',
    lieu: 'Lycée Robert Garnier, La Ferté-Bernard',
  },
];

// Bibliothèque : logiciels et outils, affichés comme des livres sur une étagère.
// `rayon` regroupe les livres ; `teinte` donne la couleur du dos (cuir, bordeaux, vert, bleu, brun).
export const outils = [
  { nom: 'MySQL', rayon: 'Données', teinte: 'bleu' },
  { nom: 'QGIS', rayon: 'Cartographie', teinte: 'vert' },
  { nom: 'Oxygen XML', rayon: 'Encodage TEI', teinte: 'bordeaux' },
  { nom: 'VS Code', rayon: 'Code', teinte: 'bleu' },
  { nom: 'GitHub', rayon: 'Versions', teinte: 'cuir' },
  { nom: 'Suite Office', rayon: 'Bureautique', teinte: 'brun' },
  { nom: 'Notion', rayon: 'Organisation', teinte: 'cuir' },
  { nom: 'Canva', rayon: 'Graphisme', teinte: 'bordeaux' },
  { nom: 'Figma', rayon: 'Maquettes', teinte: 'vert' },
  { nom: 'Genially', rayon: 'Médiation interactive', teinte: 'brun' },
];

// Compétences : l'icône est un des noms suivants :
// plume, colonnes, sceau, loupe, carte, livres, livre-ouvert (ou losange par défaut)
export const competences = [
  {
    nom: 'Paléographie moderne',
    detail: 'Lecture des écritures notariales et administratives, XVIᵉ–XVIIIᵉ siècle.',
    icone: 'plume',
  },
  {
    nom: 'Latin',
    detail: 'Traduction de sources antiques et médiévales.',
    icone: 'colonnes',
  },
  {
    nom: 'Traitements textes & Images',
    detail: 'OCR, HTR, traitement et analyse de textes historiques.',
    icone: 'sceau',
  },
  {
    nom: 'Oxygen',
    detail: "Oxygen : XML editing.",
    icone: 'loupe',
  },
  {
    nom: 'Cartographie historique',
    detail: 'QGIS : géoréférencement de plans anciens, bases spatiales.',
    icone: 'carte',
  },
  {
    nom: 'Gestion bibliographique',
    detail: 'Zotero : constitution et partage de bibliographies.',
    icone: 'livres',
  },
  {
    nom: 'Médiation',
    detail: "Ateliers pour les publics variés à partir de documents historiques et sources archéologiques.",
    icone: 'livre-ouvert',
  },
];
