# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Equipo interno de Home ALS, con cuatro roles:

- **Admin**: trabaja en computador, en oficina o en el local. Supervisa pedidos, ventas en local, cuadres de caja, clientes, productos, usuarios, reportes y actividad.
- **Vendedor**: casi siempre en celular. Registra pedidos a domicilio rápido.
- **Despachador**: casi siempre en celular. Prepara pedidos, imprime rótulos y asigna domiciliarios.
- **Domiciliario**: en celular, en la calle y a menudo a pleno sol. Ve sus pedidos, los entrega (efectivo, transferencia o mixto, con comprobante) y cierra su cuadre del día.

Una misma persona puede tener varios roles y cambiar entre ellos.

## Product Purpose

Gestionar pedidos, entregas y cuadres de Home ALS: crear pedidos a domicilio o ventas en el local, seguir su estado (pendiente, en ruta, entregado, cancelado), cobrar y cuadrar el dinero que entrega cada domiciliario, y ver la ganancia del negocio.

El rediseño tiene éxito si:
- registrar un pedido y entregarlo toma menos toques;
- el dinero (efectivo vs. transferencia, lo que se debe entregar, la ganancia) se entiende de un vistazo;
- el estado de cada pedido se ve al instante;
- la app se ve como un producto profesional y propio.

## Operating Context

- Pesos colombianos y fechas en hora de Colombia.
- Se imprimen rótulos de pedido con el logo.
- Se exportan reportes de ventas a Excel.
- Notificaciones push y avisos dentro de la app; cierre de sesión por inactividad.
- PWA instalable y app Capacitor (iOS/Android) sobre la misma web.

## Capabilities and Constraints

- Stack existente: Angular 22 + Ionic 9 (standalone components), Supabase, Chart.js. Desplegado en Vercel.
- Toda la interfaz está en español.
- Home ALS vende productos muy variados; el diseño no debe asumir una categoría de producto.
- Existe modo claro y modo oscuro, que se cambian con un botón de la app.

## Brand Commitments

- Nombre: Home ALS.
- Logo existente en `src/assets/icon/logo.png` (se mantiene).

## Evidence on Hand

- Logo e íconos de la app en `src/assets/icon/`.
- No hay fotografías de producto propias en el repositorio; las imágenes de producto las suben los usuarios.

## Product Principles

1. La velocidad de la operación diaria va primero: menos toques, menos lectura.
2. El dinero siempre es explícito: cada cifra dice qué es y a quién le toca.
3. El estado del pedido se reconoce sin leer.
4. El celular en la calle es el caso difícil; el escritorio aprovecha el espacio para supervisar.

## Accessibility & Inclusion

- Uso a pleno sol en celular: contraste alto y objetivos táctiles amplios.
- Mantener soporte de movimiento reducido.
