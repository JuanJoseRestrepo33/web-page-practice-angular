export interface Card {
  id: number;
  /** Nombre que se muestra en la card */
  title: string;
  /** Texto completo que aparece al hacer clic (puede ser largo) */
  fullContent: string;
  /** URL de la foto de perfil (externo o ruta como assets/foto.jpg) */
  imageUrl?: string;
  /** Foto/badge pequeño sobre la esquina del avatar (opcional) */
  badgeUrl?: string;
  /** Símbolo alternativo si no usas foto (ej: ★, ◆) */
  icon?: string;
  link?: string;
  variant?: 'default' | 'highlight' | 'accent';
}
