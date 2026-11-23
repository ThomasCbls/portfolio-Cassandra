// Toutes les informations personnelles du site sont ici.
// Remplacez les valeurs d'exemple par les vraies.
// Chaque entrée peut avoir un bloc `en: { … }` : la version anglaise des textes (site /en/).
// Un champ absent du bloc `en` reprend simplement la valeur française.

export const profil = {
  nom: 'Cassandra Levêque',
  statut: 'Étudiante en master Humanités Numériques',
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
  en: {
    statut: 'Master’s student in Digital Humanities',
    presentation:
      'Trained in history and heritage at Le Mans University, I am starting a master’s degree in Digital Humanities at the CESR in Tours. Cultural mediation, digitisation and the promotion of historical sources: I aim to make heritage accessible to everyone. I am currently looking for an internship to write my professional master’s thesis.',
    devise: 'History · Heritage · Digital humanities',
  },
};

// Parcours, du plus récent au plus ancien.
// Par défaut, une entrée est affichée comme des études (filet doré).
// Ajouter `alternance: true` ou `stage: true` pour changer son affichage sur la frise.
// `commune` place l'entrée sur la carte (voir `communes` plus bas).
// Les dates françaises servent au calcul de la frise : la version anglaise (`en.dates`) n'est qu'affichée.
export const parcours = [
  {
    dates: 'septembre 2026–2028',
    titre: 'Master Humanités Numériques PARCOURS Médiation numérique',
    lieu: 'CESR, Université de Tours',
    commune: 'Tours',
    en: {
      dates: 'September 2026–2028',
      titre: 'Master’s in Digital Humanities, Digital Mediation track',
      lieu: 'CESR, University of Tours',
    },
  },
  {
    dates: '2025',
    titre: 'Stage en archéologie et médiation scientifique',
    lieu: 'Association Jean Jousse, Sarthe',
    commune: 'La Ferté-Bernard',
    stage: true,
    en: {
      titre: 'Internship in archaeology and science outreach',
      lieu: 'Jean Jousse Association, Sarthe',
    },
  },
  {
    dates: '2023– avril 2026',
    titre: 'Licence Histoire, PARCOURS Patrimoine',
    lieu: 'Université du Mans',
    commune: 'Le Mans',
    en: {
      dates: '2023–April 2026',
      titre: 'Bachelor’s in History, Heritage track',
      lieu: 'Le Mans University',
    },
  },
  {
    dates: '2022–2023',
    titre: 'Chargée de communication',
    lieu: 'Domaine du Chapeau, Neuville-sur-Sarthe',
    commune: 'Neuville-sur-Sarthe',
    alternance: true,
    en: { titre: 'Communications officer' },
  },
  {
    dates: '2022–2023',
    titre: 'BTS Communication en alternance',
    lieu: 'ECOFAC au Mans',
    commune: 'Le Mans',
    en: { titre: 'Higher National Diploma in Communication (work-study)', lieu: 'ECOFAC, Le Mans' },
  },
  {
    dates: '2020–2022',
    titre: 'Baccalauréat STMG, spécialité Marketing',
    lieu: 'Lycée Robert Garnier, La Ferté-Bernard',
    commune: 'La Ferté-Bernard',
    en: { titre: 'French Baccalaureate (STMG), Marketing', lieu: 'Robert Garnier High School, La Ferté-Bernard' },
  },
];

// Bibliothèque : logiciels et outils, affichés comme des livres sur une étagère.
// `rayon` regroupe les livres ; `teinte` donne la couleur du dos (cuir, bordeaux, vert, bleu, brun).
// Au clic, le livre s'ouvre : `usage` (ce que tu en fais), `niveau` (1 notions, 2 pratique régulière,
// 3 bonne maîtrise) et `travail` (facultatif : nom du fichier d'un travail lié, sans .md).
// ⚠ Niveaux et usages proposés à partir des fiches : à vérifier et ajuster.
export const outils = [
  {
    nom: 'MySQL',
    rayon: 'Données',
    teinte: 'bleu',
    niveau: 2,
    usage: 'Création de bases de données relationnelles et écriture de requêtes SQL pour interroger des sources historiques.',
    travail: 'donnees-cartes-textes',
    en: { rayon: 'Data', usage: 'Building relational databases and writing SQL queries to explore historical sources.' },
  },
  {
    nom: 'QGIS',
    rayon: 'Cartographie',
    teinte: 'vert',
    niveau: 2,
    usage: 'Géoréférencement de plans anciens, cartographie et analyse spatiale des sources.',
    travail: 'donnees-cartes-textes',
    en: { rayon: 'Mapping', usage: 'Georeferencing old maps, mapping and spatial analysis of sources.' },
  },
  {
    nom: 'Oxygen XML',
    rayon: 'Encodage TEI',
    teinte: 'bordeaux',
    niveau: 2,
    usage: 'Encodage XML/TEI de documents patrimoniaux : structure du texte, personnes, lieux et dates.',
    travail: 'donnees-cartes-textes',
    en: { rayon: 'TEI encoding', usage: 'XML/TEI encoding of heritage documents: text structure, people, places and dates.' },
  },
  {
    nom: 'VS Code',
    rayon: 'Code',
    teinte: 'bleu',
    niveau: 1,
    usage: 'Édition de fichiers XML, HTML et CSS, et premiers scripts.',
    en: { usage: 'Editing XML, HTML and CSS files, and first scripts.' },
  },
  {
    nom: 'GitHub',
    rayon: 'Versions',
    teinte: 'cuir',
    niveau: 1,
    usage: 'Suivi des versions et partage des projets numériques.',
    en: { rayon: 'Versioning', usage: 'Version control and sharing of digital projects.' },
  },
  {
    nom: 'Suite Office',
    rayon: 'Bureautique',
    teinte: 'brun',
    niveau: 3,
    usage: 'Rédaction de dossiers, tableaux de données et présentations orales.',
    en: { nom: 'Office suite', rayon: 'Office', usage: 'Writing reports, spreadsheets and presentations.' },
  },
  {
    nom: 'Notion',
    rayon: 'Organisation',
    teinte: 'cuir',
    niveau: 3,
    usage: 'Organisation des recherches, prise de notes et suivi de projets.',
    en: { usage: 'Organising research, note-taking and project tracking.' },
  },
  {
    nom: 'Canva',
    rayon: 'Graphisme',
    teinte: 'bordeaux',
    niveau: 3,
    usage: 'Supports de communication : affiches, publications pour les réseaux et infographies.',
    travail: 'festival-cultures-afro-americaines',
    en: { rayon: 'Graphic design', usage: 'Communication materials: posters, social media posts and infographics.' },
  },
  {
    nom: 'Figma',
    rayon: 'Maquettes',
    teinte: 'vert',
    niveau: 2,
    usage: 'Maquettes de supports et d’interfaces avant leur réalisation.',
    en: { rayon: 'Mock-ups', usage: 'Mock-ups of materials and interfaces before production.' },
  },
  {
    nom: 'Genially',
    rayon: 'Médiation interactive',
    teinte: 'brun',
    niveau: 2,
    usage: 'Supports de médiation interactifs pour faire découvrir le patrimoine aux publics.',
    en: { rayon: 'Interactive outreach', usage: 'Interactive outreach materials to introduce heritage to the public.' },
  },
];

// Compétences : l'icône est un des noms suivants :
// plume, colonnes, sceau, loupe, carte, livres, livre-ouvert (ou losange par défaut)
export const competences = [
  {
    nom: 'Paléographie moderne',
    detail: 'Lecture des écritures notariales et administratives, XVIᵉ–XVIIIᵉ siècle.',
    icone: 'plume',
    en: { nom: 'Early modern palaeography', detail: 'Reading notarial and administrative hands, 16th–18th centuries.' },
  },
  {
    nom: 'Latin',
    detail: 'Traduction de sources antiques et médiévales.',
    icone: 'colonnes',
    en: { detail: 'Translating ancient and medieval sources.' },
  },
  {
    nom: 'Traitements textes & Images',
    detail: 'OCR, HTR, traitement et analyse de textes historiques.',
    icone: 'sceau',
    en: { nom: 'Text & image processing', detail: 'OCR, HTR, processing and analysis of historical texts.' },
  },
  {
    nom: 'Oxygen',
    detail: 'Oxygen : XML editing.',
    icone: 'loupe',
    en: { detail: 'Oxygen: XML editing.' },
  },
  {
    nom: 'Cartographie historique',
    detail: 'QGIS : géoréférencement de plans anciens, bases spatiales.',
    icone: 'carte',
    en: { nom: 'Historical mapping', detail: 'QGIS: georeferencing old maps, spatial databases.' },
  },
  {
    nom: 'Gestion bibliographique',
    detail: 'Zotero : constitution et partage de bibliographies.',
    icone: 'livres',
    en: { nom: 'Reference management', detail: 'Zotero: building and sharing bibliographies.' },
  },
  {
    nom: 'Médiation',
    detail: 'Ateliers pour les publics variés à partir de documents historiques et sources archéologiques.',
    icone: 'livre-ouvert',
    en: { nom: 'Cultural outreach', detail: 'Workshops for diverse audiences based on historical documents and archaeological sources.' },
  },
];

// Carte « Géographie » : coordonnées des communes citées dans le parcours (`commune`)
// et dans les travaux (champ `commune` des fichiers de src/content/travaux).
// Latitude et longitude en degrés décimaux (clic droit sur Google Maps → coordonnées).
export const communes: Record<string, { lat: number; lon: number; detail?: string; en?: { detail?: string } }> = {
  Tours: { lat: 47.3941, lon: 0.6848, detail: 'Indre-et-Loire' },
  'Le Mans': { lat: 48.0061, lon: 0.1996, detail: 'Sarthe' },
  'Neuville-sur-Sarthe': { lat: 48.0775, lon: 0.1922, detail: 'Sarthe' },
  'La Ferté-Bernard': { lat: 48.1869, lon: 0.6533, detail: 'Sarthe' },
  Thésée: { lat: 47.3236, lon: 1.3097, detail: 'Loir-et-Cher, site gallo-romain de Tasciaca', en: { detail: 'Loir-et-Cher, Gallo-Roman site of Tasciaca' } },
};
