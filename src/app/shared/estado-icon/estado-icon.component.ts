import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EstadoPedido } from '../models/models';

/**
 * "Imán" de estado de un pedido, como los imanes de un tablero de despacho.
 * Cada estado es un disco sólido de su color con una marca distinta (no solo
 * un color), para que se distinga también en blanco y negro o con daltonismo:
 *  - pendiente: disco con el centro hueco (aún sin domiciliario)
 *  - en_ruta: disco ámbar con flecha
 *  - entregado: disco verde con chulo
 *  - cancelado: disco gris con equis
 *
 * Cuando el estado cambia, el imán "se pega" con un pequeño rebote.
 *
 * Uso: <app-estado-icon [estado]="p.estado"></app-estado-icon>
 */
@Component({
  selector: 'app-estado-icon',
  standalone: true,
  template: `
    <svg
      viewBox="0 0 16 16"
      [attr.width]="size"
      [attr.height]="size"
      role="img"
      [attr.aria-label]="etiqueta"
      [class.pega]="cambio"
    >
      @switch (estado) {
        @case ('pendiente') {
          <circle cx="8" cy="8" r="7.25" fill="var(--st-pendiente)" />
          <circle cx="8" cy="8" r="2.6" fill="var(--surface)" />
        }
        @case ('en_ruta') {
          <circle cx="8" cy="8" r="7.25" fill="var(--st-ruta)" />
          <path d="M4.9 8h5.6M8.3 5.6 10.7 8l-2.4 2.4" fill="none" stroke="var(--surface)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
        }
        @case ('entregado') {
          <circle cx="8" cy="8" r="7.25" fill="var(--st-entregado)" />
          <path d="m5 8.2 2 2 4-4.2" fill="none" stroke="var(--surface)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        }
        @case ('cancelado') {
          <circle cx="8" cy="8" r="7.25" fill="var(--st-cancelado)" />
          <path d="m5.9 5.9 4.2 4.2m0-4.2-4.2 4.2" stroke="var(--surface)" stroke-width="1.7" stroke-linecap="round" />
        }
      }
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        flex-shrink: 0;
      }
      svg {
        display: block;
        overflow: visible;
      }
      svg.pega {
        animation: pega 420ms cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes pega {
        0% {
          transform: scale(0.55);
          opacity: 0.4;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        svg.pega {
          animation: none;
        }
      }
    `,
  ],
})
export class EstadoIconComponent implements OnChanges {
  @Input({ required: true }) estado!: EstadoPedido;
  @Input() size = 16;

  /** Solo anima cuando el estado cambia, no al pintar la lista por primera vez */
  cambio = false;

  get etiqueta(): string {
    return { pendiente: 'Pendiente', en_ruta: 'En ruta', entregado: 'Entregado', cancelado: 'Cancelado' }[this.estado] ?? '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    const c = changes['estado'];
    this.cambio = !!c && !c.firstChange && c.previousValue !== c.currentValue;
  }
}
