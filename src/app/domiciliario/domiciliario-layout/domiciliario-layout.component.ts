import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, walletOutline, logOutOutline, sunnyOutline, moonOutline, notificationsOutline, swapHorizontalOutline, bicycleOutline, chevronBackOutline, chevronForwardOutline, ellipsisHorizontal } from 'ionicons/icons';
import { SupabaseService } from '../../core/services/supabase.service';
import { ThemeService } from '../../core/services/theme.service';
import { NotificacionesService } from '../../core/services/notificaciones.service';
import { AvisosPanelComponent } from '../../shared/avisos/avisos-panel.component';
import { CambioRolComponent } from '../../shared/cambio-rol/cambio-rol.component';

@Component({
  selector: 'app-domiciliario-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, IonIcon, AvisosPanelComponent, CambioRolComponent],
  templateUrl: './domiciliario-layout.component.html',
  styleUrls: ['../../shared/shell.scss', '../../shared/pill-nav.scss'],
})
export class DomiciliarioLayoutComponent implements OnInit {
  collapsed = localStorage.getItem('sidebar-colapsado') === '1';
  masAbierto = false;

  menuItems = [
    { label: 'Mi ruta', path: '/domiciliario', icon: 'bicycle-outline' },
    { label: 'Cuadre', path: '/domiciliario/cuadres', icon: 'wallet-outline' },
  ];

  constructor(
    private supabase: SupabaseService,
    private router: Router,
    public theme: ThemeService,
    public avisos: NotificacionesService
  ) {
    addIcons({ homeOutline, walletOutline, logOutOutline, sunnyOutline, moonOutline, notificationsOutline, swapHorizontalOutline, bicycleOutline, chevronBackOutline, chevronForwardOutline, ellipsisHorizontal });
  }

  ngOnInit(): void {
    this.avisos.iniciar();
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    localStorage.setItem('sidebar-colapsado', this.collapsed ? '1' : '0');
  }

  toggleAvisos(): void {
    this.masAbierto = false;
    this.avisos.toggle();
  }

  toggleTheme(): void {
    this.theme.toggle();
  }

  async logout(): Promise<void> {
    this.avisos.detener();
    await this.supabase.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
