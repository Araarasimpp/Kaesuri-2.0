import { Component } from '@angular/core';

/**
 * Panel de marca de las pantallas de acceso: el tablero de despacho de
 * Home ALS dibujado con sus imanes de estado. Es decorativo (no son pedidos reales).
 */
@Component({
  selector: 'app-auth-marca',
  standalone: true,
  template: `
    <div class="marca-top">
      <img class="marca-logo" src="assets/icon/logo.png" alt="" />
      <span class="marca-nombre">Home ALS</span>
    </div>

    <div class="tablero" aria-hidden="true">
      @for (c of carriles; track c.estado) {
        <div class="carril">
          <span class="iman" [attr.data-estado]="c.estado"></span>
          <span class="carril-nombre">{{ c.nombre }}</span>
          @for (f of c.fichas; track f.n) {
            <span class="ficha">
              <span class="ficha-n">#{{ f.n }}</span>
              <span class="ficha-v">{{ f.v }}</span>
            </span>
          }
        </div>
      }
    </div>

    <p class="marca-lema">Cada pedido, en su carril.</p>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 40px;
        padding: 40px;
        overflow: hidden;
        background: #4a3bc6;
        color: #ffffff;
      }
      .marca-top {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .marca-logo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #ffffff;
        object-fit: cover;
      }
      .marca-nombre {
        font-size: 17px;
        font-weight: 800;
        letter-spacing: -0.02em;
      }
      .tablero {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        transform: rotate(-4deg) translateX(8%);
        width: 115%;
      }
      .carril {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 14px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.1);
      }
      .iman {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #ffffff;
        box-shadow: 0 6px 14px rgba(21, 20, 43, 0.35), inset 0 -3px 0 rgba(21, 20, 43, 0.18);
        animation: pegar 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
      }
      .iman[data-estado='pendiente'] { background: #d9d6f5; animation-delay: 200ms; }
      .iman[data-estado='en_ruta'] { background: #f2a93b; animation-delay: 350ms; }
      .iman[data-estado='entregado'] { background: #34c88a; animation-delay: 500ms; }
      .carril-nombre {
        margin-bottom: 4px;
        font-size: 13px;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.85);
      }
      .ficha {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 10px;
        background: #ffffff;
        color: #15142b;
        font-variant-numeric: tabular-nums;
      }
      .ficha-n {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: -0.02em;
      }
      .ficha-v {
        font-size: 12px;
        font-weight: 700;
        color: #5e5a7e;
      }
      .marca-lema {
        max-width: 420px;
        margin: 0;
        font-size: 30px;
        font-weight: 700;
        line-height: 1.15;
        letter-spacing: -0.03em;
        text-wrap: balance;
      }
      @keyframes pegar {
        from {
          transform: translateY(-14px) scale(0.6);
          opacity: 0;
        }
      }
      @media (max-width: 860px) {
        :host {
          flex-direction: row;
          align-items: center;
          gap: 12px;
          padding: calc(18px + env(safe-area-inset-top)) 20px 18px;
        }
        .tablero,
        .marca-lema {
          display: none;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .iman {
          animation: none;
        }
      }
    `,
  ],
})
export class AuthMarcaComponent {
  readonly carriles = [
    // Fichas de ejemplo, solo ilustración
    { estado: 'pendiente', nombre: 'Pendiente', fichas: [{ n: 1043, v: '$52.000' }, { n: 1042, v: '$189.000' }, { n: 1040, v: '$79.000' }] },
    { estado: 'en_ruta', nombre: 'En ruta', fichas: [{ n: 1041, v: '$120.000' }, { n: 1039, v: '$84.000' }] },
    { estado: 'entregado', nombre: 'Entregado', fichas: [{ n: 1038, v: '$145.000' }, { n: 1037, v: '$59.000' }, { n: 1036, v: '$216.000' }, { n: 1034, v: '$104.000' }] },
  ];
}
