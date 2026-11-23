// Calendrier républicain (1792) : une date grégorienne → « Tridi 3 frimaire an CCXXXV ».
// L'an I commence le 22 septembre 1792 ; au-delà de la période historique, on suit la règle
// des années bissextiles proposée par Romme (comme le calendrier grégorien), la plus répandue.
const mois = ['vendémiaire', 'brumaire', 'frimaire', 'nivôse', 'pluviôse', 'ventôse', 'germinal', 'floréal', 'prairial', 'messidor', 'thermidor', 'fructidor'];
const jours = ['primidi', 'duodi', 'tridi', 'quartidi', 'quintidi', 'sextidi', 'septidi', 'octidi', 'nonidi', 'décadi'];
const complementaires = ['jour de la Vertu', 'jour du Génie', 'jour du Travail', 'jour de l’Opinion', 'jour des Récompenses', 'jour de la Révolution'];

export const romain = (n: number) => {
  const table: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
    [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let s = '';
  for (const [v, c] of table)
    while (n >= v) {
      s += c;
      n -= v;
    }
  return s;
};

const JOUR = 86_400_000;
const sextile = (an: number) => (an % 4 === 0 && an % 100 !== 0) || an % 400 === 0;
const majuscule = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function dateRepublicaine(date: Date, lang: 'fr' | 'en' = 'fr'): string {
  const jour = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
  let debut = Date.UTC(1792, 8, 22);
  if (jour < debut) return '';
  let an = 1;
  for (;;) {
    const duree = sextile(an) ? 366 : 365;
    if (jour < debut + duree * JOUR) break;
    debut += duree * JOUR;
    an++;
  }
  const n = Math.round((jour - debut) / JOUR);
  const anTexte = lang === 'en' ? `Year ${romain(an)}` : `an ${romain(an)}`;

  // Les cinq ou six « sans-culottides » de fin d'année
  if (n >= 360) return `${majuscule(complementaires[n - 360])}, ${anTexte}`;

  const m = Math.floor(n / 30);
  const q = (n % 30) + 1;
  const nomJour = majuscule(jours[(q - 1) % 10]);
  return lang === 'en' ? `${nomJour} ${q} ${majuscule(mois[m])}, ${anTexte}` : `${nomJour} ${q} ${mois[m]} ${anTexte}`;
}
