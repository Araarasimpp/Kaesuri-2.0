---
name: Home ALS
description: Pedidos, entregas y cuadres de Home ALS, organizados como un tablero de despacho.
colors:
  lavanda-papel: "#f8f8fc"
  blanco-ficha: "#ffffff"
  lavanda-gris: "#f3f2fa"
  tinta-indigo: "#15142b"
  tinta-suave: "#5e5a7e"
  filete: "#e5e4f0"
  filete-fuerte: "#d3d1e3"
  indigo-accion: "#5b4bdb"
  indigo-accion-hover: "#4a3bc6"
  indigo-lavado: "#f2f0fe"
  coral-alerta: "#ff6b5b"
  iman-pendiente: "#6b6890"
  iman-ruta: "#e8920c"
  iman-ruta-texto: "#a15800"
  iman-entregado: "#18a06b"
  iman-entregado-texto: "#12825a"
  iman-cancelado: "#a3a1b8"
  peligro: "#d63d2e"
typography:
  display:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.025em
  headline:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 30px
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.025em
    fontFeature: "'tnum' 1"
  title:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 17px
    fontWeight: 700
    letterSpacing: -0.01em
  body:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 11px
    fontWeight: 600
    letterSpacing: 0.07em
rounded:
  sm: 8px
  md: 10px
  lg: 14px
  xl: 20px
  pill: 999px
spacing:
  page-desktop: 32px
  page-mobile: 16px
  section: 40px
  tabbar: 64px
  sidebar: 248px
  sidebar-collapsed: 72px
components:
  button-primary:
    backgroundColor: "{colors.indigo-accion}"
    textColor: "{colors.blanco-ficha}"
    rounded: "{rounded.md}"
    height: 42px
    padding: 0 16px
  button-primary-hover:
    backgroundColor: "{colors.indigo-accion-hover}"
  button-secondary:
    backgroundColor: "{colors.blanco-ficha}"
    textColor: "{colors.tinta-indigo}"
    rounded: "{rounded.md}"
    height: 42px
  nav-item-active:
    backgroundColor: "{colors.indigo-lavado}"
    textColor: "{colors.indigo-accion}"
    rounded: "{rounded.sm}"
    height: 38px
  input:
    backgroundColor: "{colors.blanco-ficha}"
    rounded: "{rounded.md}"
    height: 48px
---

# Design System: Home ALS

## Overview

**Creative North Star: "El tablero de despacho"**

La app es el tablero de la bodega: cada pedido es una ficha con su número grande y un imán de color que dice su estado sin leer. El sistema es minimal y editorial. El suelo es un lavanda casi blanco y las superficies son blancas con filetes finos. El índigo aparece solo donde hay una acción o una selección, y el color de estado vive únicamente en los imanes y en los carriles.

La densidad cambia según el rol. El admin, en computador, ve carriles, tablas y cifras grandes a la vez. Vendedor, despachador y domiciliario, en celular, ven fichas grandes, objetivos táctiles de 44 px o más y una barra de pestañas fija. El modo oscuro es un índigo nocturno (#0e0d1a), no un gris.

**Key Characteristics:**
- Número de pedido en 800 tabular como identidad de cada ficha.
- Imanes de estado: disco sólido con una marca distinta por estado.
- Cifras en columnas con filete superior y etiqueta en mayúscula pequeña, sin cajas.
- Lo cancelado queda tachado, nunca desaparece.
- Índigo solo para acción; coral solo para alertas y contadores.

## Colors

Neutros lavanda con tinta índigo profunda, un índigo de acción y cuatro colores de imán reservados para el estado.

### Primary
- **Índigo de acción** (#5b4bdb; #8b80f9 en oscuro): botones primarios, el botón central "Nuevo", ítem de navegación activo, foco, enlaces y la cifra principal de cada tira de cifras.

### Secondary
- **Coral de alerta** (#ff6b5b): contadores de avisos (con texto en tinta, 6.4:1) y puntos de tareas de stock. Para texto de error se usa **Peligro** (#d63d2e, 4.6:1 sobre blanco).

### Tertiary: imanes de estado
- **Imán pendiente** (#6b6890): pedido sin domiciliario. Disco con centro hueco.
- **Imán en ruta** (#e8920c relleno, #a15800 texto): pedido en la calle. Disco con flecha.
- **Imán entregado** (#18a06b relleno, #12825a texto): entregado y cobrado. Disco con chulo.
- **Imán cancelado** (#a3a1b8): cancelado. Disco con equis y texto tachado.
Cada imán tiene un lavado (`--st-*-wash`) para el fondo de su carril.

### Neutral
- **Lavanda papel** (#f8f8fc): fondo de página y de sidebar en oscuro.
- **Blanco ficha** (#ffffff): superficies, fichas, paneles y sidebar en claro.
- **Lavanda gris** (#f3f2fa): segmentados, cabeceras de grupo y miniaturas sin foto.
- **Tinta índigo** (#15142b): texto principal y el filete grueso de las cifras.
- **Tinta suave** (#5e5a7e) y **Tinta apagada** (#6b6890): texto secundario y etiquetas, ambas ≥4.9:1.
- **Filete** (#e5e4f0) y **Filete fuerte** (#d3d1e3): bordes y divisores.

### Named Rules
**The Imán Rule.** El color de estado solo se usa para el estado de un pedido. Nunca para decorar, ni para otra cosa que avise (un rótulo pendiente va en tinta, no en ámbar).

**The Una Voz Rule.** El índigo marca la acción. Si algo índigo no se puede tocar, es una cifra principal o un ítem activo.

## Typography

**Display Font:** Plus Jakarta Sans (con -apple-system, Segoe UI, Roboto)
**Body Font:** Plus Jakarta Sans
**Label Font:** Plus Jakarta Sans en mayúscula pequeña espaciada

**Character:** Una sola familia geométrica y cálida. La jerarquía la dan el peso (400 a 800) y la cifra tabular, no un cambio de familia.

### Hierarchy
- **Display** (700, 28px, 1.15, -0.025em; 24px en celular): título de página. La fecha va debajo, nunca encima.
- **Headline** (800, 30px, tabular): cifras protagonistas (ventas, por recibir). En los carriles, el contador sube a 34px.
- **Title** (700, 17px): títulos de sección y números de ficha (#1043).
- **Body** (400–600, 14px, 1.5): filas, clientes y descripciones.
- **Label** (600, 11px, 0.07em, MAYÚSCULA): etiquetas de cifra, columnas de tabla y grupos del menú.

### Named Rules
**The Cifra Tabular Rule.** Todo número de dinero, cantidad o pedido lleva `.num` (`tnum`) para alinearse en columna.

## Layout

En escritorio: sidebar fija de 248px (72px contraída, se recuerda en `localStorage`) y contenido sobre lavanda con un ancho máximo de 1240px y relleno de 32px. Debajo de 860px la sidebar desaparece y aparece la barra de pestañas inferior de 64px más el área segura. Las páginas usan `--tabbar-offset` para sus barras fijas.

El dashboard pone una tira de cifras arriba, después el tablero de hoy en tres carriles (pendiente, en ruta, entregado) y luego ventas y "necesita atención". Los carriles pasan a una columna por debajo de 900px. En celular, las cifras forman una tira horizontal deslizable con scroll-snap. Las secciones se separan 40px en escritorio y 24–32px en celular.

## Elevation & Depth

Plano por defecto. La profundidad viene de capas tonales: lavanda, luego blanco y luego el lavado del carril. Las fichas dentro de un carril llevan un anillo interior de 1px del color del carril, no sombra. Las sombras se reservan para lo que flota.

### Shadow Vocabulary
- **Pop** (`0 12px 32px rgba(21,20,43,.14), 0 2px 6px rgba(21,20,43,.06)`): panel de avisos, hoja "Más", menús emergentes.
- **Botón central** (`0 0 0 4px surface, 0 6px 14px rgba(91,75,219,.32)`): solo el disco "Nuevo" de la barra inferior.

### Named Rules
**The Plano Rule.** Si no flota sobre otra cosa, no lleva sombra.

## Shapes

Radios suaves: 8px en controles pequeños y en el menú, 10px en botones, campos y fichas, 14px en paneles y carriles, y 20px en hojas inferiores. Píldoras (999px) para pestañas de estado, contadores e imanes con texto. Filetes de 1px. Nunca hay bordes laterales de color de más de 1px.

## Components

### Buttons
- **Shape:** 10px de radio, 42px de alto (52px en el bloque de "Crear pedido" y en el acceso).
- **Primary:** fondo índigo, texto blanco, 600–700.
- **Hover / Focus:** índigo más oscuro; foco con contorno índigo de 2px y separación de 2px; `scale(.98)` al presionar.
- **Secondary:** blanco con filete fuerte; el borde se oscurece al pasar el cursor.

### Chips
- **Imán con texto** (`.iman .iman-<estado>`): píldora de 24px con el lavado del estado, un punto del color y el texto del color de texto del estado.
- **Pestañas de estado** (pedidos): píldora de 36px con el imán de color, la etiqueta y un contador; la activa se ve blanca con filete y el contador invertido.

### Cards / Containers
- **Carril:** 14px de radio y fondo con el lavado de su estado. La cabecera lleva imán de 20px, nombre y contador de 34px/800.
- **Ficha:** blanca, 10px de radio, rejilla número / cliente / hora / total.
- **Panel:** blanco, filete de 1px, 14px de radio y 20–22px de relleno.

### Inputs / Fields
- **Style:** blancos, filete fuerte, 10px de radio, 48px de alto en el acceso y 40–44px en búsqueda.
- **Focus:** borde índigo y anillo `0 0 0 3px` índigo lavado.
- **Error:** borde de peligro y mensaje sobre lavado de peligro.

### Navigation
- **Sidebar:** blanca con logo, nombre y rol; botón índigo "Nuevo pedido"; grupos en etiqueta mayúscula (Operación, Negocio, Equipo y sistema). El ítem activo lleva fondo índigo lavado y texto e ícono índigo en 700.
- **Barra inferior:** pestañas de borde a borde con ícono sobre una pastilla que se tiñe de índigo al activarse. El botón central "Nuevo" es un disco índigo de 50px que sobresale, y se aplana en su propia página para no tapar la barra de "Crear pedido". La hoja "Más" sube con asa y radio de 20px.

### Imán de estado (Signature)
`app-estado-icon` es un disco sólido de 16px por defecto con una marca de forma distinta por estado (legible sin color). Al cambiar de estado se "pega" con una escala de 0.55 a 1 en 420ms. En el dashboard, las fichas cambian de carril con View Transitions (`view-transition-name: pedido-<n>`) cuando llega un cambio en tiempo real, si el navegador lo soporta y no se pide movimiento reducido.

## Do's and Don'ts

### Do:
- **Do** poner el número de pedido en 800 tabular como lo primero que se lee de cada ficha.
- **Do** usar `app-estado-icon` o `.iman` para mostrar estado; nunca un texto de color suelto.
- **Do** dejar visibles los cancelados, tachados en `--st-cancelado`.
- **Do** separar las cifras con filetes en columna, etiqueta en mayúscula pequeña y valor grande debajo.
- **Do** mantener objetivos táctiles de 44px o más en las pantallas de celular.

### Don't:
- **Don't** usar ámbar, verde o gris de estado para algo que no sea el estado de un pedido.
- **Don't** poner etiquetas o fechas encima de un título.
- **Don't** usar bordes laterales de color de más de 1px en tarjetas, filas o avisos.
- **Don't** usar sombras en elementos que no flotan.
- **Don't** usar índigo en elementos que no se pueden tocar, salvo la cifra principal y el ítem activo.
