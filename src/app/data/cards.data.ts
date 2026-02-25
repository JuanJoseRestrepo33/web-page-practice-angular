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
      'Este es el texto completo que se muestra al hacer clic en la card. Reemplaza con tu contenido en src/app/data/cards.data.ts.',
    imageUrl: 'assets/avatars/card1.png',
  },
  {
    id: 2,
    title: 'Abue Luz',
    fullContent: `Nietis bella!!

Siempre seré feliz de escribir alguna carta para ti 🥺 por que me encanta ver como has ido creciendo, ver cómo llegaste aquel FDS 72, donde te permitiste dejarte sorprender, nos dejaste conocer esa personita tan encantadora y ver hasta donde has llegado me llena de mucho orgullo y más por que pude vivir contigo momentos importantes en este recorrido de EJ 💛❤️

Lo de ahora no es nada fácil, lo sé, pero así mismo sé que podrás con esto, lo has hecho muy bien y así seguirá siendo, por que si Dios te puso aquí es por qué eres capaz con esto y mucho más ❤️‍🔥

Gracias de todo corazón por darlo todo por tu familia EJ, por permitir que llegue al corazón de muchas personas y por cambiar el mundo, empezando por nosotros mismos.

Te mando muchos besos y abrazos

Abue Luz`,
    imageUrl: 'assets/avatars/abue-luz.png',
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
