# Portfolio de Cassandra Levêque (Astro)

Nécessite Node.js 22.23.4 ou plus récent.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # site statique dans dist/
```

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| Nom, statut, présentation, e-mail, ville, devise du médaillon, liens | `src/data/profil.ts` (`profil`) |
| Parcours (frise « Mon parcours ») | `src/data/profil.ts` (`parcours`) |
| Compétences et leurs pictogrammes | `src/data/profil.ts` (`competences`) |
| Logiciels de la Bibliothèque | `src/data/profil.ts` (`outils`) |
| Travaux (carrousel et fiches) | `src/content/travaux/*.md`, un fichier par travail |
| Gravures des travaux | `public/gravures/` |
| CV | `public/cv.pdf` |
| Portrait du médaillon | déposer l'image dans `public/` et renseigner `portrait` |

### Ajouter un travail

Créer `src/content/travaux/mon-travail.md` : il devient la page `/travaux/mon-travail/` et apparaît dans le carrousel.

```md
---
titre: Titre court
sousTitre: Sous-titre précis
nature: Projet étudiant
annee: 2025            # ou un texte : 2023–2026 (facultatif)
ordre: 1               # position dans le carrousel (facultatif)
debut: 1830            # période historique étudiée (facultatif) :
fin: 1914              # place le travail sur la frise « Siècles étudiés »
enCours: false         # true : affiché en rouge « en cours »
resume: Deux ou trois phrases.
gravure: /gravures/mon-image.jpg   # facultatif, dans public/gravures/
credit: Auteur, titre, date (domaine public)
---

Texte libre en Markdown (## pour les intertitres).
Une note de bas de page s'écrit ainsi[^1].

[^1]: Texte de la note, affiché en bas de la fiche et en bulle au survol.
```

La frise « Siècles étudiés » n'apparaît qu'à partir de deux travaux ayant `debut` et `fin`.

### Parcours

Chaque entrée a `dates`, `titre`, `lieu`. Les dates peuvent préciser le mois (« septembre 2026–2028 »).
Ajouter `alternance: true` ou `stage: true` pour changer l'affichage sur la frise.

## Design

Style « dark academia » : fond sombre, filets dorés, une section par écran, numérotée en chapitres.

- Polices : *Pinyon Script* (calligraphie), *Libre Caslon Display* (grands titres), *Cormorant Garamond* (titres), *EB Garamond* (texte, chiffres à l'ancienne et ligatures).
- Couleurs, cadres, lettrines, notes de bas de page, transition « page qui tourne » : `src/styles/global.css`.
- Chargeur (livre doré) : `src/components/Chargeur.astro`.
- Fond animé, lueur de bougie et curseur : `src/components/Ambiance.astro`.
- Monogramme du médaillon : `src/components/Monogramme.astro` ; icône du site : `public/favicon.svg`.
- Apparition au défilement : ajouter l'attribut `data-reveal` à un élément.

## Mise en ligne

Renseigner l'adresse du site dans `astro.config.mjs` (`site: 'https://…'`) pour que l'image d'aperçu
`public/og.png` s'affiche quand le lien est partagé (LinkedIn, messageries).
