import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CARDS_DATA } from './data/cards.data';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cards: Card[] = CARDS_DATA;
  currentYear = new Date().getFullYear();
  selectedCard: Card | null = null;
  showAbuePopup = false;

  openAbuePopup(): void {
    this.showAbuePopup = true;
    document.body.style.overflow = 'hidden';
  }

  closeAbuePopup(): void {
    this.showAbuePopup = false;
    document.body.style.overflow = '';
  }

  openModal(card: Card): void {
    this.selectedCard = card;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedCard = null;
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.showAbuePopup) this.closeAbuePopup();
    else if (this.selectedCard) this.closeModal();
  }
}
