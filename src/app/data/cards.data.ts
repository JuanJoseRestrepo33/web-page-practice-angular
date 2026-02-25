import { Card } from '../models/card.model';

/**
 * Edita aquí los textos e imágenes de tus cards.
 *
 * - title: Nombre que se muestra en la card
 * - fullContent: Texto completo que aparece al hacer clic (puede ser muy largo)
 * - imageUrl, badgeUrl, icon: ver modelo Card
 */
export const CARDS_DATA: Card[] = [
  {
    id: 1,
    title: 'Card 1',
    fullContent:
      'Este es el texto completo que se muestra al hacer clic en la card. Puedes escribir todo el contenido que necesites aquí: párrafos largos, historias, descripciones detalladas, o cualquier información que quieras compartir con quien visite la página. El modal tiene scroll así que no hay límite de extensión. Reemplaza este texto con tu contenido real en src/app/data/cards.data.ts.',
    imageUrl: 'assets/avatars/card1.png',
  },
  {
    id: 2,
    title: 'Card 2',
    fullContent:
      'Descripción completa del card 2. Este texto puede ser tan largo como necesites. Cuando alguien toque la card en el dispositivo móvil o haga clic en desktop, verá todo este contenido en un modal cómodo de leer con scroll automático.',
    imageUrl: 'https://i.pravatar.cc/256?u=2',
  },
  {
    id: 3,
    title: 'Card 3',
    fullContent:
      'Texto completo de la card 3. Aquí puedes incluir biografías, artículos, narraciones o cualquier contenido extenso.',
    imageUrl: 'https://i.pravatar.cc/256?u=3',
  },
  {
    id: 4,
    title: 'Card 4',
    fullContent:
      'Contenido de la card 4. Reemplaza con tu texto. Puedes usar saltos de línea si lo necesitas en el futuro.',
    icon: '►',
  },
  {
    id: 5,
    title: 'Card 5',
    fullContent:
      'Texto completo del card 5. Edita fullContent en cada objeto del array para personalizar lo que se muestra al hacer clic.',
    imageUrl: 'https://i.pravatar.cc/256?u=5',
  },
  {
    id: 6,
    title: 'Card 6',
    fullContent:
      'Contenido de la card 6. El modal se cierra tocando fuera, con el botón × o con la tecla Escape.',
    icon: '✦',
  },
];
