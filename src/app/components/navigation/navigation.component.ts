import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="nav" [class.scrolled]="isScrolled" [@navAnimation]="navState">
      <div class="nav-container">
        <div class="logo">
          <span class="logo-text">YOUR ACRONYM</span>
        </div>
        
        <ul class="nav-menu">
          <li><a (click)="scrollToSection('home')" class="nav-link">Home</a></li>
          <li><a (click)="scrollToSection('about')" class="nav-link">About</a></li>
          <li><a (click)="scrollToSection('vision')" class="nav-link">Vision</a></li>
          <li><a (click)="scrollToSection('values')" class="nav-link">Values</a></li>
          <li><a (click)="scrollToSection('programs')" class="nav-link">Programs</a></li>
          <li><a (click)="scrollToSection('contact')" class="nav-link cta">Apply Now</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }

    .nav.scrolled {
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
    }

    .nav-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 1.5rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--primary-color);
    }

    .nav-menu {
      display: flex;
      gap: 2.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-link {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--text-color);
      text-decoration: none;
      cursor: pointer;
      position: relative;
      transition: color 0.3s ease;
      letter-spacing: 0.02em;
    }

    .nav-link:hover {
      color: var(--primary-color);
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-color);
      transition: width 0.3s ease;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .nav-link.cta {
      background: var(--primary-color);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 6px;
      transition: all 0.3s ease;
    }

    .nav-link.cta:hover {
      background: var(--primary-dark);
      transform: translateY(-2px);
    }

    .nav-link.cta::after {
      display: none;
    }

    @media (max-width: 768px) {
      .nav-menu {
        gap: 1rem;
        font-size: 0.85rem;
      }

      .nav-container {
        padding: 1rem;
      }
    }
  `],
  animations: [
    trigger('navAnimation', [
      state('visible', style({ transform: 'translateY(0)', opacity: 1 })),
      state('hidden', style({ transform: 'translateY(-100%)', opacity: 0 })),
      transition('* => *', animate('300ms ease-in-out'))
    ])
  ]
})
export class NavigationComponent {
  isScrolled = false;
  navState = 'visible';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
