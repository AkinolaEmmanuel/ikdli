import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { PROGRAMS_DATA } from '../../data/programs.data';

interface Program {
  title: string;
  duration: string;
  description: string;
  courses: string[];
  link?: string;
}

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  programs: Program[] = PROGRAMS_DATA;
  selectedProgram: Program | null = null;
  isModalOpen = false;

  openProgramDetails(program: Program) {
    if (program.link) {
      window.open(program.link, '_blank');
    } else {
      this.selectedProgram = program;
      this.isModalOpen = true;
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProgram = null;
    document.body.style.overflow = '';
  }
}
