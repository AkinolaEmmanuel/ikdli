import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ACRONYM_LETTERS_DATA } from '../../data/acronym.data';

@Component({
  selector: 'app-acronym',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acronym.component.html',
  styleUrls: ['./acronym.component.css']
})
export class AcronymComponent {
  acronymLetters = ACRONYM_LETTERS_DATA;
}
