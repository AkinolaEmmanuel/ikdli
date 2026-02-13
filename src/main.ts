import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Menu, X, ArrowRight, GraduationCap, BookOpen, Award, Users, Target, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Zap, Crown, Globe, Shield } from 'lucide-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(LucideAngularModule.pick({
      Menu,
      X,
      ArrowRight,
      GraduationCap,
      BookOpen,
      Award,
      Users,
      Target,
      Mail,
      Phone,
      MapPin,
      Facebook,
      Twitter,
      Instagram,
      Zap,    // For "Spiritual Authority" or "Deliverance"
      Crown,  // For "Kingdom" or "Christ-Centered"
      Globe,  // For "International" / "Global Impact"
      Shield  // For "Character and Integrity"
    }))
  ]
}).catch(err => console.error(err));
