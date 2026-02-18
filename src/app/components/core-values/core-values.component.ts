import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { CORE_VALUES_DATA } from '../../data/core-values.data';

interface CoreValue {
  title: string;
  description: string;
  icon: string;
  image: string;
}

@Component({
  selector: 'app-core-values',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './core-values.component.html',
  styleUrls: ['./core-values.component.css']
})
export class CoreValuesComponent {
  coreValues: CoreValue[] = CORE_VALUES_DATA;
}
