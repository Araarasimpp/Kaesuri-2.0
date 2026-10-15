---
name: Home ALS
description: Pedidos, entregas y cuadres de Home ALS en un mosaico denso de módulos.
colors:
  niebla-fria: "#f3f7f7"
  blanco-modulo: "#ffffff"
  niebla-clara: "#f6f9f9"
  tinta-petroleo: "#0e2329"
  tinta-suave: "#4e6b73"
  filete: "#d9e4e6"
  filete-fuerte: "#c3d3d6"
  petroleo: "#0f5c6e"
  petroleo-hover: "#0b4a59"
  petroleo-lavado: "#eaf4f6"
  petroleo-noche: "#0b3440"
  menta: "#3ccb9e"
  menta-texto: "#137556"
  coral: "#f27b63"
  ambar-ruta: "#e39a1c"
  ambar-ruta-texto: "#9a5c00"
  peligro: "#c24a33"
typography:
  display:
    fontFamily: "Manrope"
    fontSize: 20px
    fontWeight: 800
    letterSpacing: -0.02em
  headline:
    fontFamily: "Manrope"
    fontSize: 24px
    fontWeight: 800
    lineHeight: 1.15
    fontFeature: "'tnum' 1"
  title:
    fontFamily: "Manrope"
    fontSize: 14px
    fontWeight: 800
  body:
    fontFamily: "Manrope"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Manrope"
    fontSize: 10.5px
    fontWeight: 800
    letterSpacing: 0.06em
rounded:
  xs: 3px
  sm: 4px
  md: 6px
  lg: 8px
spacing:
  mosaic-gap: 10px
  cell: 10px 12px
  row-desktop: 36px
  row-mobile: 44px
  tabbar: 60px
  sidebar: 224px
  sidebar-collapsed: 60px
components:
  module-tab:
    backgroundColor: "{colors.petroleo}"
    textColor: "{colors.blanco-modulo}"
    rounded: "{rounded.md}"
    height: 30px
    padding: 0 10px
  button-primary:
    backgroundColor: "{colors.petroleo}"
    textColor: "{colors.blanco-modulo}"
    rounded: "{rounded.sm}"
    height: 34px
    padding: 0 12px
  button-new-sidebar:
    backgroundColor: "{colors.menta}"
    textColor: "{colors.tinta-petroleo}"
    rounded: "{rounded.sm}"
    height: 34px
  badge:
    rounded: "{rounded.xs}"
    height: 18px
    padding: 0 6px
---

# Design System: Home ALS

## Overview

**Creative North Star: "El mosaico"**

La pantalla es un mosaico de módulos con filete, cada uno con una pestaña pequeña de encabezado en petróleo. Empaca mucha información sin desperdiciar espacio. La referencia es la web japonesa de alta densidad, traducida a azul petróleo y menta: texto compacto, filas de 36 px, cifras tabulares en 800 e insignias rectangulares pequeñas.

La densidad se ajusta por dispositivo. En escritorio, el admin y el despachador escanean una rejilla de 12 columnas con la sidebar oscura petróleo al lado. En celular los módulos se apilan a una columna y todo sube un paso: filas de 44 px y texto de 13–14 px, porque se usa en la calle. El modo oscuro es un petróleo casi negro con el acento en cian claro.

**Key Characteristics:**
- Cada bloque es un módulo: filete de 1px, esquinas de 6px y pestaña petróleo arriba a la izquierda.
- Cifras en fila de celdas, con etiqueta en mayúscula pequeña y valor de 24px en 800 tabular.
- El estado se lee por forma y color: punteado (pendiente), mitad (en ruta), lleno con chulo (entregado), equis y tachado (cancelado).
- Menta para lo positivo, coral para alertas y faltantes, ámbar solo para "en ruta".
- Plano: sin sombras salvo lo que flota.

## Colors

Neutros fríos con un petróleo de acción, una menta positiva y un coral de alerta.

### Primary
- **Petróleo** (#0f5c6e; #4fb3c8 en oscuro): pestañas de módulo, botones primarios, segmentados activos, foco y enlaces.
- **Petróleo noche** (#0b3440): la sidebar de escritorio y el panel de marca del acceso.

### Secondary
- **Menta** (#3ccb9e): botón "Nuevo pedido" de la sidebar, ítem activo de la sidebar, raya de la pestaña activa en celular, entregado y ganancia. Como texto sobre blanco se usa **Menta texto** (#137556).

### Tertiary
- **Coral** (#f27b63): contadores de avisos y alertas, con texto en tinta. Para texto de error se usa **Peligro** (#c24a33).
- **Ámbar ruta** (#e39a1c relleno, #9a5c00 texto): solo el estado "en ruta" y las insignias de stock bajo.

### Neutral
- **Niebla fría** (#f3f7f7): fondo. **Blanco módulo** (#ffffff): módulos. **Niebla clara** (#f6f9f9): cabeceras de tabla y filas al pasar el cursor.
- **Tinta petróleo** (#0e2329): texto. **Tinta suave** (#4e6b73) y **Tinta apagada** (#5b7880): secundarios, ≥4.7:1.
- **Filete** (#d9e4e6) y **Filete fuerte** (#c3d3d6): bordes de módulo y divisores.

### Named Rules
**The Pestaña Rule.** Todo módulo se nombra con su pestaña petróleo, nunca con una etiqueta suelta encima de un título.

**The Ámbar Rule.** El ámbar significa "en ruta" o "bajo". Ningún otro aviso lo usa.

## Typography

**Display Font:** Manrope (con -apple-system, Segoe UI, Roboto)
**Body Font:** Manrope

**Character:** Una sola familia compacta. La jerarquía la dan el peso (400 a 800), la mayúscula pequeña de las pestañas y la cifra tabular.

### Hierarchy
- **Display** (800, 20px, -0.02em): título de página en la franja superior, con la fecha al lado o debajo.
- **Headline** (800, 24px, tabular): cifras de las celdas.
- **Title** (800, 14px): número de pedido, nombres en filas.
- **Body** (400–700, 13px; 14px en celular): filas y descripciones.
- **Label** (800, 10.5px, 0.06em, MAYÚSCULA): pestañas de módulo, etiquetas de celda, cabeceras de tabla e insignias.

## Layout

Escritorio: sidebar petróleo de 224px (60px contraída). El contenido tiene un ancho máximo de 1400px y una franja de título de 52px. Debajo va la rejilla de 12 columnas con 10px de separación. El dashboard usa una fila completa "Hoy" y dos columnas apiladas (8 y 4) para que ningún módulo deje huecos.

Debajo de 860px desaparece la sidebar y aparece la barra inferior de 60px. Debajo de 720px los módulos van a una columna y las celdas a dos columnas.

## Elevation & Depth

Plano. La profundidad la dan el filete y el fondo: niebla, luego blanco, luego niebla clara en las cabeceras. Al pasar el cursor o enfocar un módulo, su filete se oscurece y aparecen sus acciones secundarias.

### Shadow Vocabulary
- **Pop** (`0 10px 28px rgba(14,35,41,.18), 0 2px 6px rgba(14,35,41,.08)`): avisos, hoja "Más" y menús.

## Shapes

Esquinas pequeñas: 3px en insignias, 4px en botones y campos, 6px en módulos. La pestaña de módulo encaja en la esquina superior izquierda (`border-radius: 6px 0 0 0`). Filetes de 1px. Nunca hay bordes laterales de color.

## Components

### Módulo (Signature)
`.mod > .mod-head > .mod-tab + .mod-meta + .mod-acciones`. Las acciones marcadas `.mod-secundaria` aparecen al pasar o enfocar. Dentro van `.celdas` (fila de cifras) o `.filas` (lista densa). Los paneles heredados (`.panel-head h2`) también pintan su título como pestaña.

### Buttons
- **Primary:** petróleo, 34px de alto (40px en celular), 4px de radio, 700–800.
- **Secondary:** blanco con filete fuerte; el borde pasa a petróleo al pasar el cursor.
- **Nuevo pedido (sidebar):** bloque menta con texto en tinta.

### Insignias
`.ins` (gris), `.ins-ok` (menta), `.ins-ruta` (ámbar), `.ins-alerta` (coral) y `.ins-acento` (petróleo). Miden 18px de alto, con 3px de radio y texto de 10.5px en 800.

### Navigation
- **Sidebar:** petróleo noche con grupos en mayúscula pequeña (Operación, Negocio, Equipo y sistema). El ítem activo lleva fondo menta translúcido, texto blanco e ícono menta.
- **Barra inferior:** pestañas de borde a borde con una raya menta arriba de la activa. "Nuevo" es un bloque petróleo de 64×46 px en el centro. "Perfil" muestra la foto de la persona.

### Inputs
Blancos con filete fuerte, 4px de radio y 42px de alto en el acceso. Al enfocar, el borde pasa a petróleo con un anillo de 3px. Casillas y radios toman el petróleo con `accent-color`.

## Do's and Don'ts

### Do:
- **Do** poner cada bloque nuevo dentro de un `.mod` con su `.mod-tab`.
- **Do** usar `.num` en dinero, cantidades y números de pedido.
- **Do** mostrar el estado con `app-estado-icon` (forma más color) o una `.ins`.
- **Do** mantener filas de 36px en escritorio y 44px en celular.

### Don't:
- **Don't** usar emojis como íconos; los íconos son de Ionicons.
- **Don't** usar degradados, sombras de tarjeta ni radios mayores de 8px.
- **Don't** usar ámbar para nada que no sea "en ruta" o "bajo".
- **Don't** poner etiquetas encima de un título; el nombre del bloque va en su pestaña.
