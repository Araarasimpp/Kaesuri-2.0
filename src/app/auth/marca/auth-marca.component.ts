import { Component } from '@angular/core';

/**
 * Panel de marca de las pantallas de acceso: un mosaico de módulos de Home ALS
 * en la sidebar oscura. Es una ilustración (los pedidos y cifras son de ejemplo).
 */
@Component({
  selector: 'app-auth-marca',
  standalone: true,
  template: `
    <div class="marca-top">
      <img class="marca-logo" src="assets/icon/logo.png" alt="" />
      <span class="marca-nombre">Home ALS</span>
    </div>

    <div class="mosaico" aria-hidden="true">
      <div class="mod m-pedidos">
        <span class="tab">Pedidos</span>
        @for (p of pedidos; track p.n) {
          <span class="fila">
            <span class="dot" [attr.data-e]="p.e"></span>
            <b>#{{ p.n }}</b>
            <span class="v">{{ p.v }}</span>
          </span>
        }
      </div>
      <div class="mod m-hoy">
        <span class="tab">Hoy</span>
        <span class="cifra">$524.000</span>
        <span class="nota"><i>Ganancia</i> $186.000</span>
      </div>
      <div class="mod m-cuadres">
        <span class="tab">Cuadres</span>
        <span class="fila"><b>Ruta norte</b><span class="v">$270.000</span></span>
        <span class="fila"><b>Ruta sur</b><span class="v">$43.000</span></span>
      </div>
      <div class="mod m-stock">
        <span class="tab">Stock</span>
        <span class="fila"><b>Licuadora</b><i class="bajo">Bajo</i></span>
        <span class="fila"><b>Lámpara</b><i class="agotado">Agotado</i></span>
      </div>
    </div>

    <p class="marca-lema">Todo el negocio en una pantalla.</p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 32px;
        padding: 32px;
        overflow: hidden;
        background: #0b3440;
        color: #d7e8ec;
        font-variant-numeric: tabular-nums;
      }
      .marca-top {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .marca-logo {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #ffffff;
        object-fit: cover;
      }
      .marca-nombre {
        font-size: 16px;
        font-weight: 800;
        color: #ffffff;
      }
      .mosaico {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 8px;
        max-width: 460px;
      }
      .mod {
        display: flex;
        flex-direction: column;
        border: 1px solid rgba(255, 255, 255, 0.14);
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.04);
        overflow: hidden;
        animation: entra 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
      }
      .m-pedidos {
        grid-row: span 2;
      }
      .m-hoy {
        animation-delay: 90ms;
      }
      .m-cuadres {
        animation-delay: 180ms;
      }
      .m-stock {
        animation-delay: 270ms;
        grid-column: span 2;
      }
      .tab {
        align-self: flex-start;
        padding: 4px 8px;
        border-radius: 0 0 4px 0;
        background: #0f5c6e;
        color: #ffffff;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .fila {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 7px 10px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        font-size: 12px;
      }
      .tab + .fila {
        border-top: none;
      }
      .fila b {
        flex: 1;
        color: #ffffff;
        font-weight: 800;
      }
      .v {
        font-weight: 700;
        color: #a9c8cf;
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1.5px solid #8fb3bc;
      }
      .dot[data-e='ruta'] {
        border-color: #f0ac3a;
        background: linear-gradient(90deg, transparent 50%, #f0ac3a 50%);
      }
      .dot[data-e='ok'] {
        border-color: #3ccb9e;
        background: #3ccb9e;
      }
      .cifra {
        padding: 8px 10px 0;
        font-size: 22px;
        font-weight: 800;
        color: #ffffff;
      }
      .nota {
        padding: 2px 10px 10px;
        font-size: 12px;
        color: #a9c8cf;
      }
      i {
        font-style: normal;
        padding: 1px 5px;
        border-radius: 3px;
        background: rgba(60, 203, 158, 0.18);
        color: #3ccb9e;
        font-size: 10px;
        font-weight: 800;
      }
      i.bajo {
        background: rgba(240, 172, 58, 0.18);
        color: #f0ac3a;
      }
      i.agotado {
        background: rgba(242, 123, 99, 0.2);
        color: #f58b75;
      }
      .marca-lema {
        max-width: 380px;
        margin: 0;
        font-size: 26px;
        font-weight: 800;
        line-height: 1.15;
        letter-spacing: -0.03em;
        color: #ffffff;
        text-wrap: balance;
      }
      @keyframes entra {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
      }
      @media (max-width: 860px) {
        :host {
          flex-direction: row;
          align-items: center;
          gap: 10px;
          padding: calc(14px + env(safe-area-inset-top)) 16px 14px;
        }
        .mosaico,
        .marca-lema {
          display: none;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .mod {
          animation: none;
        }
      }
    `,
  ],
})
export class AuthMarcaComponent {
  // Pedidos de ejemplo, solo ilustración
  readonly pedidos = [
    { n: 1043, v: '$52.000', e: 'pend' },
    { n: 1041, v: '$120.000', e: 'ruta' },
    { n: 1039, v: '$84.000', e: 'ruta' },
    { n: 1038, v: '$145.000', e: 'ok' },
    { n: 1037, v: '$59.000', e: 'ok' },
  ];
}
