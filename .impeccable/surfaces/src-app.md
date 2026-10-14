---
version: 1
slug: "src-app"
primary_target: "src/app"
related_targets: []
---

# Home ALS app (todos los roles)

Scope: toda la app (auth, admin, vendedor, despachador, domiciliario). Mode: Operate.
Audiencia: equipo interno; admin en PC, el resto en celular (domiciliario a pleno sol).
Pins del usuario: paleta índigo vibrante (#5B4BDB acento, coral #FF6B5B, éxito #18A06B, fondo #F8F8FC, texto #15142B), estilo minimal editorial, Plus Jakarta Sans, tab bar clásica con botón central "Nuevo" en celular, sidebar colapsable en escritorio, modo oscuro completo, logo existente.

## Direction contract

THESIS: La app es el tablero de despacho de la bodega: cada pedido es una ficha con su número grande y un imán de color que dice su estado sin leer. Rechaza el panel SaaS genérico de tarjetas grises con badges de texto.

OWN-WORLD: Fondo lavanda casi blanco #F8F8FC, superficies blancas con filete fino, tinta #15142B. Índigo #5B4BDB solo para acción y selección. Imanes de estado: disco sólido — pendiente índigo-gris, en ruta ámbar, entregado verde #18A06B, cancelado gris con tachado. Coral #FF6B5B para peligro/deuda. Plus Jakarta Sans: números de pedido y cifras en 600–700 tabulares grandes; etiquetas en 11–12px mayúsculas espaciadas. Radios 10–14px, sin sombras salvo popovers.

STORY: Quien abre la app ve primero qué está pendiente, qué va en ruta y cuánto dinero hay en juego; actúa con un toque (nuevo pedido, entregar, cuadrar).

FIRST VIEWPORT: Escritorio admin: sidebar clara colapsable a la izquierda; arriba saludo + fecha y fila de cifras grandes (ventas, en ruta, por cobrar); debajo el tablero en tres carriles por estado con contadores-imán. Celular: encabezado compacto, cifras en tira horizontal, lista de fichas; tab bar inferior de borde a borde con botón central índigo "Nuevo".

FORM: Tablero de despacho con imanes, posición 7 de la lista propia; seed dcac1150. Raises: del tablero de salidas, columnas fijas y número que cambia con transición; del tiquete aéreo, lo cancelado queda tachado, no desaparece; del catálogo de convención, rejilla densa de celdas completas para elegir productos; del atlas estelar, jerarquía por tamaño fijo de cifra.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Signature interaction: el imán de estado — al cambiar el estado de un pedido, el disco se rellena con su nuevo color y la ficha se desplaza (View Transitions donde exista).
