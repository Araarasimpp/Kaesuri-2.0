---
version: 1
slug: "src-app"
primary_target: "src/app"
related_targets: []
---

# Home ALS app (todos los roles) — rediseño 2

Scope: toda la app (auth, admin, vendedor, despachador, domiciliario, perfil, ranking). Mode: Operate.
Audiencia: equipo interno; admin en PC, el resto en celular (domiciliario a pleno sol).
Pins del usuario: paleta azul petróleo + menta (#0F5C6E acento, menta #3CCB9E, coral #F27B63, fondo #F3F7F7, texto #0E2329, superficie #FFFFFF); estilo denso y operativo; Manrope; sidebar oscura petróleo en escritorio + tab bar en celular; modo oscuro; logo existente.

## Direction contract

THESIS: La pantalla es un mosaico de módulos con filete, cada uno con una pestaña de encabezado pequeña en petróleo, que empaca mucha información sin desperdiciar un píxel. Rechaza el panel SaaS aireado de tarjetas grandes con mucho espacio vacío.

OWN-WORLD: Fondo #F3F7F7 frío, módulos blancos con filete gris-petróleo de 1px y radios de 4–6px. Pestaña de módulo: bloque petróleo #0F5C6E con texto blanco 11px en 700. Sidebar petróleo oscuro #0B3440 con texto claro. Menta #3CCB9E para lo positivo (entregado, ganancia, "nuevo"); coral #F27B63 para alertas y faltantes; ámbar para en ruta. Manrope 13px base en escritorio, 12px meta, cifras tabulares 700. Insignias pequeñas rectangulares (nuevo, bajo, agotado).

STORY: Quien abre la app escanea el mosaico y en segundos sabe qué pedidos esperan, qué dinero falta cuadrar y qué stock se acaba; actúa desde el módulo mismo.

FIRST VIEWPORT: Escritorio admin: sidebar petróleo oscura; arriba una franja compacta con título, fecha y acciones; debajo una rejilla densa de módulos con pestaña: cifras del día (fila de celdas), pedidos por estado, cuadres por confirmar, stock bajo, ventas 7 días, ranking. Celular: los módulos se apilan a una columna con texto mínimo de 13–14px; tab bar inferior con "Nuevo" central.

FORM: Mosaico de alta densidad (japanese-high-density-web, challenger competitivo elegido por el usuario), seed 17fd42fe. Raises: del emission-line rail, el estado también por forma (sólido, hueco, tachado), no solo por color; del catálogo de personajes, el ranking como celdas completas ordenadas.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Signature interaction: al pasar el cursor (o enfocar) un módulo, su filete se eleva a petróleo y aparecen sus acciones secundarias en la pestaña; cifras con cambio en tiempo real destellan una vez en menta.
