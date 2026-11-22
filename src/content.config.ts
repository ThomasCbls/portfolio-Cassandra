import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Chaque fichier .md de src/content/travaux devient une page /travaux/<nom-du-fichier>/
const travaux = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travaux' }),
  schema: z.object({
    titre: z.string(),
    sousTitre: z.string().optional(),
    // Nature du travail : « Mémoire de master 2 », « Stage », « Médiation »…
    nature: z.string(),
    // Année de réalisation du travail
    annee: z.number(),
    // Période historique étudiée : sert à placer le travail sur la frise
    debut: z.number(),
    fin: z.number(),
    enCours: z.boolean().default(false),
    direction: z.string().optional(),
    resume: z.string(),
    sources: z
      .array(z.object({ fonds: z.string(), cote: z.string() }))
      .default([]),
    // Lien vers un PDF placé dans /public (ex. "/pdf/memoire-m1.pdf")
    pdf: z.string().optional(),
  }),
});

export const collections = { travaux };
