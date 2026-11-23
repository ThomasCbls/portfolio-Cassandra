// Travaux dans la langue demandée : le fichier anglais (src/content/travaux-en) remplace les textes
// du fichier français du même nom ; tout le reste (ordre, image, dates, commune…) vient du français.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Langue } from '../i18n';

export type Travail = CollectionEntry<'travaux'> & {
  /** Entrée dont on affiche le texte (anglaise si elle existe, sinon française) */
  corps: CollectionEntry<'travaux'> | CollectionEntry<'travauxEn'>;
};

const anneeTri = (a: number | string | undefined) => Number(String(a ?? '').match(/\d{4}/g)?.pop() ?? 0);

export async function chargerTravaux(lang: Langue): Promise<Travail[]> {
  const fr = await getCollection('travaux');
  const en = lang === 'en' ? await getCollection('travauxEn') : [];

  return fr
    .map((t) => {
      const traduction = en.find((e) => e.id === t.id);
      if (!traduction) return { ...t, corps: t };
      const d = traduction.data;
      return {
        ...t,
        data: {
          ...t.data,
          ...Object.fromEntries(Object.entries(d).filter(([, v]) => v !== undefined)),
          annotations: d.annotations ?? t.data.annotations,
        },
        corps: traduction,
      };
    })
    .sort(
      // Ordre : le champ `ordre` s'il existe, sinon du plus récent au plus ancien
      (a, b) => (a.data.ordre ?? 999) - (b.data.ordre ?? 999) || anneeTri(b.data.annee) - anneeTri(a.data.annee),
    );
}
