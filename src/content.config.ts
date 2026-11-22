import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Chaque fichier .md de src/content/travaux devient une page /travaux/<nom-du-fichier>/
const travaux = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travaux' }),
  schema: z.object({
    titre: z.string(),
    sousTitre: z.string().optional(),
    // Nature du travail : « Mémoire de master 2 », « Stage », « Projet étudiant »…
    nature: z.string(),
    // Année de réalisation : un nombre (2025) ou un texte (« 2023–2026 »)
    annee: z.union([z.number(), z.string()]).optional(),
    // Ordre d'affichage dans le carrousel (1 = premier). Sans ordre : du plus récent au plus ancien.
    ordre: z.number().optional(),
    // Période historique étudiée (facultatif) : place le travail sur la frise « Siècles étudiés »
    debut: z.number().optional(),
    fin: z.number().optional(),
    enCours: z.boolean().default(false),
    direction: z.string().optional(),
    resume: z.string(),
    sources: z
      .array(z.object({ fonds: z.string(), cote: z.string() }))
      .default([]),
    // Lien vers un PDF placé dans /public (ex. "/pdf/memoire-m1.pdf")
    pdf: z.string().optional(),
    // Image d'illustration placée dans /public/gravures (ex. "/gravures/tasciaca.jpg") et son crédit.
    // Sans image : gravure par défaut (livre, plume et encrier), en attendant les vraies photos.
    gravure: z.string().default('/gravures/defaut.svg'),
    credit: z.string().optional(),
  }),
});

export const collections = { travaux };
