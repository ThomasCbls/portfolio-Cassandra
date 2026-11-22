// Toutes les informations personnelles du site sont ici.
// Remplacez les valeurs d'exemple par les vraies.

export const profil = {
  nom: 'Camille Laurent',
  statut: "Étudiante en master d'histoire moderne et contemporaine",
  presentation:
    "Je travaille sur le travail des femmes et les usages de l'eau dans la ville, du XVIIᵉ au début du XXᵉ siècle. Mes recherches partent des archives municipales, notariales et hospitalières lyonnaises.",
  email: 'camille.laurent@exemple.fr',
  ville: 'Lyon',
  // Portrait affiché dans le médaillon ovale : déposer l'image dans public/
  // (ex. '/portrait.jpg'). Laisser vide pour afficher les initiales.
  portrait: '',
  cv: '/cv.pdf',
  liens: [
    { nom: 'LinkedIn', url: 'https://www.linkedin.com/' },
    { nom: 'HAL', url: 'https://hal.science/' },
  ],
};

// Parcours, du plus récent au plus ancien
export const parcours = [
  {
    dates: '2024–2026',
    titre: "Master Histoire, parcours Histoire moderne et contemporaine",
    lieu: 'Université Lumière Lyon 2',
  },
  {
    dates: '2024',
    titre: 'Stage de deux mois au service des fonds anciens',
    lieu: 'Archives départementales du Rhône',
  },
  {
    dates: '2021–2024',
    titre: 'Licence Histoire',
    lieu: 'Université Lumière Lyon 2',
  },
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
    detail: 'Traduction de sources médiévales et modernes.',
    icone: 'colonnes',
  },
  {
    nom: 'Fonds notariaux',
    detail: 'Dépouillement et analyse : inventaires, contrats, testaments.',
    icone: 'sceau',
  },
  {
    nom: 'Transcription assistée',
    detail: "Transkribus : entraînement de modèles de reconnaissance d'écriture.",
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
    detail: "Ateliers pour les publics scolaires à partir de documents d'archives.",
    icone: 'livre-ouvert',
  },
];
