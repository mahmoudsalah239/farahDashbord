import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';

@Component({
  selector: 'app-ad-services',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './ad-services.component.html',
  styleUrls: ['./ad-services.component.scss'],
})
export class AdServicesComponent {}
