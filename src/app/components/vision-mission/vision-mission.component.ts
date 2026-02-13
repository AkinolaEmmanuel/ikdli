import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VISION_MISSION_DATA } from '../../data/vision-mission.data';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.css']
})
export class VisionMissionComponent {
  data = VISION_MISSION_DATA;
}
