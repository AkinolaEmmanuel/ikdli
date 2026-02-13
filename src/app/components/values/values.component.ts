import { Component } from '@angular/core';

interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss']
})
export class ValuesComponent {
  coreValues: CoreValue[] = [
    {
      title: 'Biblical Authority',
      description: 'We uphold the Bible as the inspired, infallible Word of God and the ultimate authority for faith and practice.',
      icon: 'book-open'
    },
    {
      title: 'Excellence',
      description: 'We are committed to providing the highest quality theological education and training.',
      icon: 'award'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty, transparency, and ethical conduct in all our activities.',
      icon: 'shield'
    },
    {
      title: 'Community',
      description: 'We foster a supportive, diverse learning environment where students grow together in faith and knowledge.',
      icon: 'users'
    },
    {
      title: 'Service',
      description: 'We equip students to serve the church and community with humility and dedication.',
      icon: 'heart'
    },
    {
      title: 'Transformation',
      description: 'We believe in the transforming power of God\'s Word to change lives and impact society.',
      icon: 'zap'
    }
  ];
}
