/* Le trait de crayon gras rouge (fil conducteur, grille wouahou point 4) : il entoure, à chaque section et chaque page,
   la chose à regarder. Tracé à la main (pas une ellipse parfaite), dessiné au défilement par site.js (data-effet="crayon").
   Le premier de chaque page porte data-grille="fil". */
import { html, brut } from '../../outils/gabarit.mjs';

const TRACES = [
  'M112 14 C 168 12, 206 62, 204 136 C 202 214, 160 258, 106 256 C 50 254, 14 206, 16 132 C 18 62, 58 18, 120 20',
  'M60 10 C 180 -2, 312 8, 316 56 C 320 102, 220 116, 140 112 C 50 108, 2 92, 4 58 C 6 26, 60 10, 120 6',
  'M70 8 C 200 -2, 352 6, 356 52 C 360 98, 250 108, 170 106 C 60 104, 2 90, 4 54 C 6 22, 70 8, 130 4',
];

/** crayon({ forme: 0|1|2, classe, fil }) : SVG décoratif, aria-hidden, qui se pose en absolu sur son parent. */
export function crayon({ forme = 1, classe = '', fil = false } = {}) {
  const vb = forme === 0 ? '0 0 220 270' : forme === 1 ? '0 0 320 120' : '0 0 360 110';
  return html`<svg class="crayon ${classe}" viewBox="${vb}" preserveAspectRatio="none" aria-hidden="true" data-superpose data-effet="crayon"${fil ? brut(' data-grille="fil"') : ''}><path d="${TRACES[forme]}" pathLength="1" filter="url(#gras-fil)"/></svg>`;
}
