# Portfolio d'historienne (Astro)

Nécessite Node.js 22.23.4 ou plus récent.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # site statique dans dist/
```

## Modifier le contenu

Tout le contenu actuel est un **exemple fictif** : le nom, les travaux, les cotes d'archives et les liens sont à remplacer.

| Quoi | Où |
| --- | --- |
| Nom, présentation, e-mail, liens | `src/data/profil.ts` |
| Parcours et compétences | `src/data/profil.ts` |
| Travaux (mémoires, stages, projets) | `src/content/travaux/*.md`, un fichier par travail |
| CV | déposer `cv.pdf` dans `public/` |
| PDF d'un mémoire | déposer dans `public/pdf/` et renseigner `pdf: /pdf/nom.pdf` |

### Ajouter un travail

Créer un fichier `src/content/travaux/mon-travail.md` : il devient la page `/travaux/mon-travail/` et apparaît automatiquement dans la liste et sur la frise.

```md
---
titre: Titre court
sousTitre: Sous-titre précis, avec bornes chronologiques
nature: Mémoire de master 1
annee: 2025
debut: 1789      # début de la période étudiée (place la barre sur la frise)
fin: 1815        # fin de la période étudiée
enCours: false   # true colore la barre en rouge
direction: Nom de la directrice ou du directeur   # facultatif
resume: Deux ou trois phrases sur la question posée et les sources.
sources:
  - fonds: Archives nationales, série F7
    cote: F7 1234
---

Texte libre en Markdown (## pour les intertitres).
```

## Design

Style « dark academia » : fond sombre, filets dorés, une section par écran.

- Titres de section en *Pinyon Script* (calligraphie), titres en *Cormorant Garamond*, texte en *EB Garamond*.
- Couleurs et cadre des écrans (`.ecran`) dans `src/styles/global.css`.
- Portrait du médaillon d'accueil : déposer l'image dans `public/` et renseigner `portrait` dans `src/data/profil.ts`.
- Travaux : carrousel plein écran (`src/components/Carrousel.astro`), flèches, clavier (← →) et glisser du doigt.
- La frise (`src/components/Frise.astro`) a deux onglets : « Siècles étudiés » (dates des travaux) et « Mon parcours » (entrées `parcours` de `src/data/profil.ts`). Elle calcule seule ses bornes.
- Compétences : chaque entrée de `competences` a un pictogramme (`icone`), voir la liste dans `src/data/profil.ts` et les dessins dans `src/components/Icone.astro`.
- Fond animé (poussière dorée, halos) et curseur doux : `src/components/Ambiance.astro`. Un élément `data-curseur="Mot"` affiche ce mot dans le curseur au survol.
- Apparition au défilement : ajouter l'attribut `data-reveal` à un élément.
