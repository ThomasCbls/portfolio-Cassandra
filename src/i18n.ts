// Langues du site : le français est la langue principale (adresses sans préfixe),
// l'anglais vit sous /en/. Tous les textes fixes de l'interface sont ici.
export type Langue = 'fr' | 'en';

export const langueDe = (url: URL): Langue => (/^\/en(\/|$)/.test(url.pathname) ? 'en' : 'fr');

/** Adresse d'une page dans une langue : lien('en', '/travaux/x/') → '/en/travaux/x/' */
export const lien = (lang: Langue, chemin: string) => (lang === 'en' ? `/en${chemin}` : chemin);

/** Même page dans l'autre langue */
export const traduireChemin = (url: URL, vers: Langue) => {
  const sans = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return lien(vers, sans);
};

/** Fusionne les champs traduits (`en: { … }`) d'une entrée de données */
export const localiser = <T extends { en?: unknown }>(entree: T, lang: Langue): T =>
  lang === 'en' && entree.en ? ({ ...entree, ...(entree.en as object) } as T) : entree;

const fr = {
  locale: 'fr-FR',
  ogLocale: 'fr_FR',
  evitement: 'Aller au contenu',
  navPrincipale: 'Navigation principale',
  menu: 'Menu',
  nav: { parcours: 'Parcours', travaux: 'Travaux', competences: 'Compétences', contact: 'Contact' },
  autreLangue: { court: 'EN', long: 'English version' },
  bougie: { versClair: 'Souffler la bougie : passer au thème clair', versSombre: 'Rallumer la bougie : passer au thème sombre' },
  portfolioDe: (nom: string) => `Portfolio de ${nom}`,

  chapitre: 'Chapitre',
  sections: 'Sections de la page',
  ecrans: {
    accueil: 'Introduction',
    parcours: 'Parcours',
    siecles: 'Siècles étudiés',
    travaux: 'Travaux',
    competences: 'Compétences',
    bibliotheque: 'Bibliothèque',
    contact: 'Contact',
  },

  // Introduction
  portfolio: 'Portfolio',
  introduction: 'Introduction',
  decouvrir: 'Découvrir mes travaux',
  telechargerCv: 'Télécharger le CV',
  ouvrirPortfolio: (nom: string) => `Ouvrir le portfolio de ${nom}`,
  curseurOuvrir: 'Ouvrir',
  cliquezMedaillon: 'Cliquez sur le médaillon',
  touchezMedaillon: 'Touchez le médaillon',
  defiler: 'Défiler',

  // Parcours : chronologie et cartographie
  parcours: {
    surtitre: 'Formation et expériences',
    titre: 'Parcours',
    choisir: 'Choisir la vue du parcours',
    chronologie: 'Chronologie',
    cartographie: 'Cartographie',
    lieux: (n: number) => `${n} lieu${n > 1 ? 'x' : ''}`,
  },

  // Frises : siècles étudiés et parcours
  frise: {
    surtitre: 'Recherches historiques',
    titre: 'Siècles étudiés',
    periodeEtudiee: 'Période étudiée par chaque travail',
    memoireEnCours: 'Mémoire en cours',
    etudes: 'Études',
    alternance: 'Alternance',
    stage: 'Stage',
    enCours: 'En cours',
    statutEnCours: 'en cours',
  },

  // Travaux
  carrousel: {
    surtitre: 'Projets et expériences',
    titre: 'Travaux',
    role: 'carrousel',
    diapositive: 'diapositive',
    position: (i: number, n: number, titre: string) => `${i} sur ${n} : ${titre}`,
    enCours: 'en cours',
    sources: 'Sources principales',
    lire: 'Lire la fiche',
    travail: (i: number, titre: string) => `Travail ${i} : ${titre}`,
    precedent: 'Travail précédent',
    suivant: 'Travail suivant',
    glisser: 'Glisser',
    annonce: 'Travail {i} sur {n} : {titre}',
    siecle: (s: string[]) => `${s.join(' – ')}`,
  },

  // Cartographie
  carte: {
    legende: 'Carte stylisée des lieux de mon parcours et de mes travaux',
    invitation: 'Cliquez sur un lieu pour zoomer',
    parcours: 'Parcours',
    travaux: 'Travaux',
    echelle: '20 km',
    cartouche: ['Carte des lieux', 'Maine, Touraine', 'et Blésois'],
    note: 'Tracé des rivières simplifié',
    itineraire: 'Le fil de mon parcours',
    ensemble: 'Vue d’ensemble',
    ouest: 'O',
  },

  // Compétences et bibliothèque
  competences: { surtitre: 'Savoir-faire', titre: 'Compétences' },
  bibliotheque: {
    surtitre: 'Logiciels et outils',
    titre: 'Bibliothèque',
    ouvrir: (nom: string) => `Ouvrir le livre ${nom}`,
    rayon: 'Rayon',
    usage: 'Ce que j’en fais',
    niveau: 'Niveau',
    niveaux: ['Notions', 'Pratique régulière', 'Bonne maîtrise'],
    exemple: 'Voir le projet',
    fermer: 'Refermer le livre',
    curseur: 'Ouvrir',
  },

  // Contact
  contact: {
    surtitre: 'Correspondance',
    titre: 'Écrivez-moi',
    date: (ville: string) => `${ville}, le `,
    salutation: 'Madame, Monsieur,',
    corps:
      "Je suis actuellement à la recherche d'un stage afin de réaliser mon mémoire professionnel. Pour toute proposition, question ou simple échange, je serai ravie de vous lire.",
    cv: 'CV (PDF)',
    nouvelOnglet: ' (nouvel onglet)',
    sceau: 'Briser le sceau : copier l’adresse e-mail',
    curseurSceau: 'Briser',
    copiee: 'Adresse copiée',
    copieImpossible: 'Copiez l’adresse ci-dessus',
    republicain: 'Date du calendrier républicain',
  },

  // Fiches
  fiche: {
    retour: 'Tous les travaux',
    pdf: 'Lire le document complet (PDF)',
    notice: 'Notice',
    nature: 'Nature',
    annee: 'Année',
    periode: 'Période étudiée',
    direction: 'Direction',
    sources: 'Sources principales',
    enCours: 'en cours',
    notes: 'Notes',
    retourNote: (i: number) => `Retour à l'appel de note ${i}`,
    fonds: 'Fonds',
    carton: 'Carton n°',
    cote: 'Cote :',
    consulte: 'Consulté le',
    archives: 'Archives personnelles',
    annotations: 'Notes en marge',
  },

  chargeur: 'Ouverture des archives',
};

export type Textes = typeof fr;

const en: Textes = {
  locale: 'en-GB',
  ogLocale: 'en_GB',
  evitement: 'Skip to content',
  navPrincipale: 'Main navigation',
  menu: 'Menu',
  nav: { parcours: 'Background', travaux: 'Work', competences: 'Skills', contact: 'Contact' },
  autreLangue: { court: 'FR', long: 'Version française' },
  bougie: { versClair: 'Blow out the candle: switch to light theme', versSombre: 'Light the candle: switch to dark theme' },
  portfolioDe: (nom: string) => `${nom}’s portfolio`,

  chapitre: 'Chapter',
  sections: 'Page sections',
  ecrans: {
    accueil: 'Introduction',
    parcours: 'Background',
    siecles: 'Centuries studied',
    travaux: 'Work',
    competences: 'Skills',
    bibliotheque: 'Library',
    contact: 'Contact',
  },

  portfolio: 'Portfolio',
  introduction: 'Introduction',
  decouvrir: 'Explore my work',
  telechargerCv: 'Download my CV (in French)',
  ouvrirPortfolio: (nom: string) => `Open ${nom}’s portfolio`,
  curseurOuvrir: 'Open',
  cliquezMedaillon: 'Click the medallion',
  touchezMedaillon: 'Tap the medallion',
  defiler: 'Scroll',

  parcours: {
    surtitre: 'Education and experience',
    titre: 'Background',
    choisir: 'Choose a view of my background',
    chronologie: 'Timeline',
    cartographie: 'Map',
    lieux: (n: number) => `${n} place${n > 1 ? 's' : ''}`,
  },

  frise: {
    surtitre: 'Historical research',
    titre: 'Centuries studied',
    periodeEtudiee: 'Period studied by each project',
    memoireEnCours: 'Thesis in progress',
    etudes: 'Studies',
    alternance: 'Work-study',
    stage: 'Internship',
    enCours: 'Ongoing',
    statutEnCours: 'ongoing',
  },

  carrousel: {
    surtitre: 'Projects and experience',
    titre: 'Work',
    role: 'carousel',
    diapositive: 'slide',
    position: (i: number, n: number, titre: string) => `${i} of ${n}: ${titre}`,
    enCours: 'ongoing',
    sources: 'Main sources',
    lire: 'Read more',
    travail: (i: number, titre: string) => `Project ${i}: ${titre}`,
    precedent: 'Previous project',
    suivant: 'Next project',
    glisser: 'Swipe',
    annonce: 'Project {i} of {n}: {titre}',
    siecle: (s: string[]) => `${s.join(' – ')}`,
  },

  carte: {
    legende: 'Stylised map of the places of my studies and projects',
    invitation: 'Click a place to zoom in',
    parcours: 'Background',
    travaux: 'Projects',
    echelle: '20 km',
    cartouche: ['Map of places', 'Maine, Touraine', 'and Blésois'],
    note: 'Rivers simplified',
    itineraire: 'The thread of my journey',
    ensemble: 'Whole map',
    ouest: 'W',
  },

  competences: { surtitre: 'Know-how', titre: 'Skills' },
  bibliotheque: {
    surtitre: 'Software and tools',
    titre: 'Library',
    ouvrir: (nom: string) => `Open the book ${nom}`,
    rayon: 'Shelf',
    usage: 'What I use it for',
    niveau: 'Level',
    niveaux: ['Basics', 'Regular use', 'Proficient'],
    exemple: 'See the project',
    fermer: 'Close the book',
    curseur: 'Open',
  },

  contact: {
    surtitre: 'Correspondence',
    titre: 'Write to me',
    date: (ville: string) => `${ville}, `,
    salutation: 'Dear Sir or Madam,',
    corps:
      'I am currently looking for an internship in order to write my professional master’s thesis. For any offer, question or simple exchange, I would be delighted to hear from you.',
    cv: 'CV (PDF, in French)',
    nouvelOnglet: ' (new tab)',
    sceau: 'Break the seal: copy the email address',
    curseurSceau: 'Break',
    copiee: 'Address copied',
    copieImpossible: 'Copy the address above',
    republicain: 'French Republican calendar date',
  },

  fiche: {
    retour: 'All projects',
    pdf: 'Read the full document (PDF)',
    notice: 'Record',
    nature: 'Type',
    annee: 'Year',
    periode: 'Period studied',
    direction: 'Supervision',
    sources: 'Main sources',
    enCours: 'ongoing',
    notes: 'Notes',
    retourNote: (i: number) => `Back to note reference ${i}`,
    fonds: 'Collection',
    carton: 'Box no.',
    cote: 'Shelfmark:',
    consulte: 'Consulted on',
    archives: 'Personal archives',
    annotations: 'Margin notes',
  },

  chargeur: 'Opening the archives',
};

export const textes: Record<Langue, Textes> = { fr, en };
export const t = (lang: Langue) => textes[lang];
