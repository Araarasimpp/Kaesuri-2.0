// Tarjeta del inicio (vendedor y domiciliario): "Vas #2 de 15 este mes" + meta.
// Toca la tarjeta para ver el ranking completo.
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trophyOutline, chevronForward } from 'ionicons/icons';
import { SupabaseService } from '../../core/services/supabase.service';
import { FilaRanking, TipoRanking, ordenarRanking, puntaje, rangoPeriodo, textoVentas } from './ranking.page';

@Component({
  selector: 'app-mi-puesto',
  standalone: true,
  imports: [CommonModule, RouterLink, IonIcon],
  template: `
    <a class="mp" *ngIf="listo" [routerLink]="ruta" aria-label="Ver el ranking completo">
      <span class="mp-head">
        <span class="mp-tab"><ion-icon name="trophy-outline" aria-hidden="true"></ion-icon>Ranking del mes</span>
        <ion-icon class="mp-ver" name="chevron-forward" aria-hidden="true"></ion-icon>
      </span>
      <span class="mp-cuerpo">
        <span class="mp-puesto num" [class.podio]="puesto !== null && puesto <= 3">{{ puesto ? '#' + puesto : '—' }}</span>
        <span class="mp-txt">
          <strong *ngIf="puesto; else sinPuesto">Vas #{{ puesto }} de {{ total }} este mes</strong>
          <ng-template #sinPuesto><strong>Aún sin puesto este mes</strong></ng-template>
          <span>{{ detalle }}</span>
          <span class="mp-barra" *ngIf="avance !== null"><i [style.width.%]="avance" [class.ok]="avance === 100"></i></span>
        </span>
      </span>
    </a>
  `,
  styles: [
    `
      .mp {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--border);
        border-radius: var(--radius);
        background: var(--surface);
        color: var(--text);
        text-decoration: none;
        transition: border-color var(--dur) var(--ease);
      }
      .mp:hover {
        border-color: var(--accent);
      }
      .mp-head {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        min-height: 28px;
        border-bottom: 1px solid var(--border);
      }
      .mp-tab {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin: -1px 0 -1px -1px;
        padding: 0 10px;
        border-radius: var(--radius) 0 0 0;
        background: var(--tab-bg);
        color: var(--tab-text);
        font-size: var(--fs-micro);
        font-weight: 800;
        letter-spacing: var(--tracking-label);
        text-transform: uppercase;
      }
      .mp-tab ion-icon {
        font-size: 13px;
      }
      .mp-ver {
        align-self: center;
        margin-right: 10px;
        font-size: 16px;
        color: var(--accent);
      }
      .mp-cuerpo {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
      }
      .mp-puesto {
        min-width: 44px;
        font-size: 24px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--text-muted);
      }
      .mp-puesto.podio {
        color: var(--mint-text);
      }
      .mp-txt {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .mp-txt strong {
        font-size: var(--fs-md);
        font-weight: 800;
      }
      .mp-txt > span {
        font-size: var(--fs-sm);
        color: var(--text-soft);
      }
      .mp-barra {
        display: block;
        height: 5px;
        margin-top: 4px;
        border-radius: 2px;
        background: var(--surface-2);
        overflow: hidden;
      }
      .mp-barra i {
        display: block;
        height: 100%;
        background: var(--accent);
      }
      .mp-barra i.ok {
        background: var(--mint);
      }
    `,
  ],
})
export class MiPuestoComponent implements OnInit {
  @Input() tipo: TipoRanking = 'vendedor';
  @Input() ruta = '';

  listo = false;
  puesto: number | null = null;
  total = 0;
  detalle = '';
  avance: number | null = null;

  constructor(private supabase: SupabaseService, private cdr: ChangeDetectorRef) {
    addIcons({ trophyOutline, chevronForward });
  }

  async ngOnInit(): Promise<void> {
    const user = await this.supabase.getCurrentUser();
    const { desde, hasta } = rangoPeriodo('mes');
    const { data, error } = await this.supabase.client.rpc('ranking', { p_desde: desde, p_hasta: hasta });
    if (error || !user) return; // sin la función en la base, la tarjeta no aparece
    const lista = ordenarRanking(((data ?? []) as FilaRanking[]).filter((f) => f.tipo === this.tipo));
    const i = lista.findIndex((f) => f.usuario_id === user.id);
    this.total = lista.length;
    if (i >= 0) {
      const yo = lista[i];
      const p = puntaje(yo);
      this.puesto = p > 0 ? i + 1 : null;
      const valor = this.tipo === 'domiciliario'
        ? `${p} ${p === 1 ? 'entrega' : 'entregas'}`
        : yo.ventas == null
          ? textoVentas(Number(yo.pedidos))
          : Number(yo.ventas).toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }) + ' vendidos';
      const avance = yo.avance != null ? Number(yo.avance) : yo.meta ? Math.min(100, Math.round((p / Number(yo.meta)) * 100)) : null;
      if (avance !== null) {
        this.avance = avance;
        this.detalle = `${valor} · ${this.avance}% de tu meta`;
      } else {
        this.detalle = p > 0 ? valor : '¡Arranca el mes y súbete al podio!';
      }
    } else {
      this.detalle = 'Mira quién va ganando';
    }
    this.listo = true;
    this.cdr.detectChanges();
  }
}
