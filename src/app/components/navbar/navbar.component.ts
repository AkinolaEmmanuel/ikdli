import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { NAV_ITEMS_DATA } from '../../data/nav-items.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('menuSlide', [
      state('closed', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('open', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('closed => open', animate('400ms cubic-bezier(0.16, 1, 0.3, 1)')),
      transition('open => closed', animate('300ms ease-in'))
    ])
  ]
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  navItems = NAV_ITEMS_DATA;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  scrollToSection(id: string) {
    this.closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
