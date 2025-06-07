import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidemenu',
  imports: [
    ButtonModule,
    CommonModule,
    HeaderComponent,
    RouterModule,
    StyleClassModule,
  ],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
// contains the sidemenu navigation to switch between different app views
export class SidemenuComponent {
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
