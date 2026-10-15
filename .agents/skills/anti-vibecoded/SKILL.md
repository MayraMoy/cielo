---
name: anti-vibecoded
description: >
  Evita patrones visuales genéricos “vibecoded” en interfaces de Equarys y fuerza decisiones de UI con identidad de producto.
  Trigger: usar cuando se diseñe, edite o revise UI/UX (componentes, pantallas, modales, cards, estados, microcopy visual).
license: Apache-2.0
metadata:
  author: gentleman-programming
  version: "1.1"
---

# Anti Vibecoded (Equarys)

> [!IMPORTANT]
> Es OBLIGATORIO cargar, leer y consultar la skill `anti-vibecoded` antes de realizar cualquier cambio, adición o revisión de código en la interfaz de usuario (frontend) del repositorio.

## Cuándo usar

- Cambios en UI/UX de dashboard o catálogo.
- Refactors visuales de cards, badges, iconografía, colores o jerarquía.
- Revisión de PRs donde la UI se vea “pl## Reglas críticas (MUST)

1. **Prohibido `border-l-*` decorativo en cards.** Extensión: Prohibido simular bordes coloreados de un solo lado (en cualquier borde de la tarjeta: superior, izquierdo, derecho o inferior) mediante elementos internos posicionados absolutamente (ej: `<div className="absolute left-0 top-0 bottom-0 w-1 bg-[...]">`) o mediante selectores de pseudo-elementos (`after:border-l-*`, `after:border-t-*`, etc.). Si se necesita indicar estado, usar un indicador funcional integrado como un status dot junto al texto o el contraste tipográfico.
2. **Prohibido `Sparkles` fuera de Synara** y contexto explícito de asistente IA.
3. **Prohibido gradiente genérico `from-blue-* to-purple-*` en superficies principales.**
4. **Todo ícono debe representar acción o dato de negocio (nada decorativo).**
5. **No usar badges/chips flotantes sin función operativa.**
6. **OBLIGATORIEDAD DEL THEME SYSTEM: Prohibido usar colores estáticos o escalas de Tailwind fijas (`bg-gray-100`, `text-slate-600`, `bg-emerald-50`, `border-amber-100`). TODO contenedor, texto, aviso, badge o elemento decorativo DEBE utilizar variables semánticas del Theme System de Equarys (`var(--bg-surface)`, `var(--surface-1)`, `var(--surface-2)`, `var(--text-primary)`, `var(--text-secondary)`, `var(--text-muted)`, `var(--border-default)`, `var(--metallic-green)`, etc.) para adaptarse a Light/Dark Mode y cualquier tema activo (Ocean, Monokai, Esmerald, etc.).**
7. **Mantener identidad “British Racing Green Metallic” y claridad operativa.**
8. **Prohibido encajonar contenidos principales de bienvenida en tarjetas blancas flotantes rígidas sobre fondos grises.** El contenido debe fluir integrado con el fondo principal del panel.
9. **Los íconos encerrados en contenedores de fondo con colores pasteles o de estados suaves (ej. `bg-blue-50`, `bg-yellow-100`, etc.) son un antipatrón vibecoded trillado.** Renderizar el ícono solo, con su color semántico directo y sin fondo decorativo artificial.
10. **Prohibido el uso de 'pill badges' (insignias redondeadas) con fondo y contorno pastel de color de estado junto a iconos de check genéricos para representar estados o versiones de software.** Prácticamente siempre se debe preferir texto plano sin fondo ni borde, o indicadores funcionales directos en un color semántico discreto, manteniendo un aspecto profesional y limpio.
11. **Prohibido anidar tarjetas blancas o grises con bordes y sombras para contener elementos de datos simples, textos de ayuda o botones de navegación de flechas (como `< 1 / 2 >`).** Estos elementos deben fluir de forma directa y transparente sobre el fondo general (o del contenedor padre) sin recuadros adicionales innecesarios. Las microinteracciones de los botones de navegación se deben lograr mediante un hover translúcido sutil sobre el ícono suelto.
12. **Prohibido glassmorphism decorativo (`backdrop-filter: blur()`) aplicado sin propósito funcional real.** El blur no debe usarse como atajo visual para "parecer moderno". Si un elemento no necesita separar fondos superpuestos (modales, dropdowns), no lleva blur.
13. **Prohibido gradient text en métricas, títulos o cualquier elemento textual.** El texto con gradiente (`background: linear-gradient` + `-webkit-background-clip: text`) es un patrón ubicuo de IA que parece moderno pero comunica "plantilla". Usar colores sólidos semánticos o de marca.
14. **Prohibido paletas neón y combinaciones cyan-on-dark (`text-cyan-400` sobre `bg-slate-900` o similar).** Estas paletas son el default de IA para "verse moderno". Equarys usa British Racing Green Metallic con una paleta sobria y profesional. Los acentos neón no pertenecen al sistema.
15. **Prohibido usar emojis como iconos de navegación, bullets de listas, reemplazo de iconos funcionales o decoración de secciones.** Los emojis solo están permitidos en microcopy con tono, nunca como elemento de interfaz. Usar Lucide icons consistentes.
16. **Prohibido botones con gradiente (`bg-gradient-to-r from-* to-*`).** Los botones deben ser sólidos, con color de marca plano y hover sutil por opacidad. Los gradientes en botones son un patrón Web 2.0 que la IA reprodujo masivamente.
17. **Prohibido el patrón de secciones con fondos alternados (zebra striping: `bg-gray-50 → bg-white → bg-gray-50 → bg-white`) como estructura de página.** El fondo alternado sin razón de contenido es template puro. Usar el fondo base consistente y solo cambiar cuando hay un cambio genuino de contexto de información.
18. **Prohibido repetir el mismo layout de 3 columnas idénticas (`grid-cols-3 gap-4`) para secciones distintas.** La estructura de layout debe responder al contenido: 2 columnas, 4 columnas, asymmetrical, full-width, según lo que el dato requiera.
19. **Prohibido usar múltiples acentos de color en distintos elementos sin lógica semántica.** El color es un recurso compartido: un solo acento de marca, colores semánticos solo para estados reales (error, success, warning). Si todo está destacado, nada lo está.
20. **Prohibido usar Inter, Roboto, Open Sans o `system-ui` como familia tipográfica principal sin justificación.** Estos son los defaults de entrenamiento de IA. En Equarys la tipografía debe alinearse con el sistema de diseño definido.
21. **Prohibido el hero layout predecible de IA (badge → h1 → 2 CTAs → 3-column features).**
22. **Prohibido encajonar botones o chips de estado de filtros rápidos en pequeñas tarjetitas con bordes rígidos y fondos sólidos que simulen una tarjeta individual flotante.** Deben integrarse de forma plana al fondo general usando fondos translúcidos sin bordes.
23. **Prohibido el uso de status dots (puntitos decorativos de color) antes del texto en botones de filtro rápidos de estado.** La semántica debe ser transmitida a través del propio icono funcional de negocio (ej: PackageX, AlertTriangle) o la tipografía.
24. **Prohibido el uso injustificado de barras laterales (aside sidebars) para estructurar paneles principales cuando no hay contenido secundario sustancial.** La información debe organizarse en una grilla o bento equilibrado de una sola columna o flujo integrado, evitando fragmentar la pantalla en columnas desbalanceadas de 2/3 y 1/3 sin necesidad operativa real.
25. **Prohibido el uso de fondos pastel semi-transparentes deslavados (ej. `bg-amber-500/15`, `bg-emerald-500/10`, `bg-blue-100`, `bg-amber-100`, `bg-[var(--state-*-surface)]`, etc.) en banners, alertas, barras de estado, tarjetas y contenedores.** Lavar o manchar contenedores completos con tintes pasteles semi-transparentes o tonos crema/beige deslucidos es un clásico anti-patrón de IA "vibecoded". En su lugar, usar contenedores neutros limpios (`bg-[var(--surface-2)] border border-[var(--border-subtle)]`) con insignias/badges **SÓLIDAS** de color de marca o estado (ej. `bg-[#005530] text-white`, `bg-amber-600 text-white`, `bg-rose-700 text-white`) con tipografía neutra de alto contraste.
26. **Accesibilidad Obligatoria:** Toda decisión de interfaz y diseño debe cumplir de forma mandatoria con las pautas de accesibilidad WCAG 2.1 AA detalladas en `.agents/skills/accessibility/SKILL.md`.
27. **REGLA DE BADGES SÓLIDOS (MANDATORIA)**: Todos los badges e insignias DEBEN tener fondo 100% SÓLIDO y opaco con texto de máximo contraste (ej: `bg-amber-600 text-white font-bold`, `bg-zinc-800 text-white`, `bg-[#005530] text-white`). Está ESTRICTAMENTE PROHIBIDO usar fondos pastel (ej. `bg-amber-100`, `bg-blue-50`, `bg-red-50`), colores deslavados o clases semi-transparentes/opacidades (ej. `bg-amber-500/10`, `bg-opacity-*`).
28. **REGLA DE FONDOS DE INPUTS (MANDATORIA)**: Los campos de entrada (`<input>`, `<textarea>`, buscadores, selectores) NO deben tener fondo blanco artificial (`bg-white`) que resalte como tarjeta flotante o parche vibecoded sobre el fondo de la pantalla. Los inputs deben ser parte del fondo general (`bg-transparent` o variables neutras del tema como `bg-[var(--surface-1)]` / `bg-[var(--surface-2)]`), integrándose armónicamente con bordes neutros sutiles (`border-[var(--border)]` o `border-[var(--border-subtle)]`).
29. **PROHIBICIÓN DE "TARJETITIS" / EXCESO DE CARDS BLANCAS DESCONECTADAS (CARD FATIGUE - MANDATORIA)**:
    - **Diagnóstico del anti-patrón**: Encajonar cada bloque, sección, estado o detalle de una misma pantalla o entidad en su propia tarjeta blanca flotante con borde y sombra (`bg-white rounded-2xl border border-zinc-200 shadow-*`) sobre fondo gris o neutro. Este "muro de tarjetas" fragmenta visualmente la interfaz, genera fatiga cognitiva y es un síntoma clásico de UI genérica de IA ("vibecoded").
    - **Regla**: Prohibido fragmentar la información de una misma vista o flujo funcional en múltiples tarjetas blancas flotantes aisladas.
    - **Reemplazo correcto**:
      1. Utilizar **un único contenedor cohesivo o lienzo fluido** donde el contenido fluya con ritmo vertical y división funcional interna sutil (`divide-y divide-[var(--border)]`, bordes sutiles, espaciado proporcional).
      2. Las cards o tarjetas se reservan **única y exclusivamente para colecciones de entidades homogéneas e independientes** (ej: grilla de productos, tarjetas de sucursales en un directorio, tarjetas de órdenes en un historial de compras).
      3. Para detalles, estados, formularios o resúmenes (como seguimiento de pedido, checkout o perfil), la jerarquía debe lograrse mediante **tipografía, espaciado (`gap`, `py`), badges sólidos de estado e hilera divisoria**, NO encajonando cada párrafo o paso en una caja blanca individual.
30. **PROHIBICIÓN DE ANIDAMIENTO REDUNDANTE CARD-DENTRO-DE-CARD (CARD NESTING SIN JERARQUÍA DE CONTRASTE - MANDATORIA)**:
    - **Diagnóstico**: Envolver botones o listas que ya son cards o elementos interactivos dentro de otra card del mismo color sin propósito semántico.
    - **Regla**: Prohibido meter cards dentro de cards del mismo fondo/color.
    - **Reemplazo correcto**: Cuando se agrupan opciones de navegación o configuración, se deben dividir en **tarjetas agrupadoras temáticas discretas con un color que genere un leve y sutil contraste con el fondo general** (ej: `bg-zinc-50/80` o `bg-slate-50` sobre fondo blanco, o `bg-zinc-800/40` sobre fondo oscuro), separando grupos funcionalmente (ej: Grupo 1 de identidad con 2 opciones; Grupo 2 de utilidades con el resto), utilizando listas con divisores limpios (`divide-y divide-[var(--border)]`).
31. **FONDOS DE SECCIÓN CONTINUOS DE BORDE A BORDE (ZERO PAGE MARGINS / FULL BLEED EN LAYOUTS DE DOS TONOS - MANDATORIA)**:
    - **Diagnóstico**: Dejar márgenes, paddings o huecos blancos huérfanos entre secciones de fondo contrastante (ej: cabecera grisácea flotando con margen sobre fondo blanco, o sección blanca terminando con hueco antes del footer o bottom nav).
    - **Regla**: En vistas con diseño de dos tonos (ej: cabecera de perfil grisácea e inferior blanca), **ambas secciones deben rellenar la pantalla por completo sin dejar huecos sueltos, márgenes huérfanos ni bordes desconectados**.
    - **Reemplazo correcto**: La sección superior debe tocar el tope de la pantalla (`top-0`), y la sección inferior debe cubrir fluidamente todo el espacio hasta el final inferior de la pantalla (`flex-1` / `pb-safe`), sin crear cajas flotantes con márgenes que parezcan parches o islas aisladas.
32. **PROHIBICIÓN ESTRICTA DE CONTENEDORES Y FONDOS PASTELES/SQUIRCLES EN ICONOS DE LISTAS Y BOTONES (MANDATORIA)**:
    - **Diagnóstico**: Encerrar cada icono de una lista de opciones dentro de una cajita cuadrada o redondeada con fondo pastel de color (`w-10 h-10 rounded-xl bg-blue-50`, `bg-purple-100`, etc.).
    - **Regla**: Los iconos de navegación y listas de opciones DEBEN renderizarse **desnudos (naked line icons)** directamente junto al texto, sin contenedores cuadrados o circulares (`rounded-xl bg-...`) y **sin fondos de color pastel ni tintes artificiales**.
    - **Reemplazo correcto**: Renderizar el icono en línea con peso limpio (`weight="bold"` o `weight="regular"`), color directo y neutro (`text-zinc-600` / `text-zinc-700` o semántico de negocio) y espaciado directo (`flex items-center gap-3.5`).
33. **ICONOGRAFÍA NÍTIDA Y CANÓNICA (ZERO AI SLOP GLYPHS - MANDATORIA)**:
    - **Diagnóstico**: Usar iconos genéricos, deformes o glifos no canónicos generados por IA para acciones comunes (ej: bichos o insectos extraños para bugs, chispitas para novedades).
    - **Regla**: Usar únicamente iconografía canónica y oficial de la librería del sistema (Phosphor Icons o Lucide), sin fondos decorativos artificiales.
34. **PROHIBICIÓN DE DESPLAZAMIENTO Y CORTE EN CARROUSELS HORIZONTALES / SCROLL SNAP (CAROUSEL EDGE GLUE & AUTO-SCROLL SLOP - MANDATORIA)**:
    - **Diagnóstico**: Al implementar scroll horizontal con padding lateral negativo (`-mx-4 px-4` o similar) y `snap-x snap-mandatory`, el navegador alinea el primer hijo con `snap-start` al borde físico del viewport (`x=0`), anulando el padding izquierdo, cortando visualmente la primera tarjeta o forzando un auto-scroll automático no deseado al cargar o hacer foco.
    - **Regla**: En todo carrusel o contenedor con scroll horizontal (`overflow-x-auto`) que utilice sangría negativa (`-mx-4 px-4` / `-mx-6 px-6`):
      1. Es **OBLIGATORIO** declarar `scroll-pl-4 sm:scroll-pl-6` (o `scroll-px-*` equivalente al padding horizontal) en el contenedor padre para que el snap respete la sangría y alinee la primera tarjeta exactamente con el título de la sección.
      2. Usar **`snap-proximity`** en lugar de `snap-mandatory` para evitar saltos automáticos o empujones agresivos que desalineen las tarjetas.
      3. Añadir margen o pseudo-elemento al final (`after:content-[''] after:w-2 sm:after:w-0 after:shrink-0` o `scroll-pr-*`) para que la última tarjeta tampoco quede pegada al borde derecho al llegar al tope.
35. **PROHIBICIÓN DE PRE-TÍTULOS "EYEBROW" EN MAYÚSCULAS Y TRACKING FORZADO (EYEBROW MICRO-LABEL SLOP - MANDATORIA)**:
    - **Diagnóstico**: Usar microtextos flotantes en mayúsculas sostenidas con tracking amplio (`uppercase tracking-wider` / `tracking-widest` con `text-[10px]` o `text-xs`) encima de títulos o entidades ("CAFETERÍA Y DESAYUNOS", "CATEGORÍA", "CARACTERÍSTICAS"). Es un cliché estético repetido de IA para simular estructura visual sin aportar valor jerárquico real, que genera fatiga visual y degrada la legibilidad.
    - **Regla**: Prohibido usar micro-labels en mayúsculas (all-caps) con tracking extendido como pre-títulos o categorías decorativas.
    - **Reemplazo correcto**: La entidad principal (nombre del plato, producto o métrica) debe comandar la jerarquía visual con tipografía limpia. La categoría o metadato secundario debe expresarse en texto natural (Sentence case) con tipografía neutra (`text-xs` o `text-[11px] text-[var(--text-muted)] font-medium`), sin forzar mayúsculas ni tracking decorativo, o integrarse como subtítulo discreto.
36. **PROHIBICIÓN DE FOOTERS REDUNDANTES CON BOTÓN 'CERRAR' EN MODALES Y SELECTORES (REDUNDANT MODAL FOOTER SLOP - MANDATORIA)**:
    - **Diagnóstico**: Incluir una barra de pie de modal (footer bar) con el único fin de mostrar un botón secundario de "Cerrar" o "Cancelar" cuando el modal ya cuenta con el botón de cierre "X" en la cabecera, soporte de tecla Escape y cierre por clic en backdrop. Es un remanente innecesario que ocupa altura vertical crítica sin añadir función operativa alguna.
    - **Regla**: Prohibido agregar footers vacíos o redundantes que solo contengan un botón "Cerrar". En modales de selección o navegación (pickers, visores, galerías), la acción de seleccionar o la "X" resuelven el flujo. El footer solo se justifica cuando existen acciones primarias persistentes de confirmación compleja (ej: formularios de múltiples pasos que requieren botones explícitos "Atrás" / "Guardar cambios").
    - **Reemplazo correcto**: Omitir la barra de footer por completo. Si se requiere mostrar metadatos contextuales (como un contador de elementos disponibles), integrarlos sutilmente en el encabezado (badge discreto o subtítulo) o en la barra de herramientas, maximizando el espacio para el contenido principal.
37. **PROHIBICIÓN DE CONTROLES SEGMENTADOS (SEGMENTED BUTTONS / TOGGLES) CON BANDEJAS GRISES Y TEXTO EN GRIS SIN CONTRASTE (VIBECODED GRAY SEGMENTED SLOP - MANDATORIA)**:
    - **Diagnóstico**: Envolver selectores de opciones o toggles segmentados en bandejas de color gris plano (`bg-gray-100`, `bg-zinc-100`, etc.) donde las opciones inactivas se muestran en textos grises deslavados (`text-gray-400`, `text-gray-500`) de bajo contraste y la opción activa es una pastilla blanca sin jerarquía clara. Este patrón genera interfaces apagadas, poco accesibles (falla WCAG 2.1 AA en contraste de texto inactivo) y comunica una estética genérica de plantilla sin identidad.
    - **Regla**: Prohibido usar bandejas grises artificiales con texto gris apagado para controles segmentados o selectores de opciones.
    - **Reemplazo correcto**: Utilizar botones limpios con bordes definidos o pestañas planas integradas sobre la superficie (`bg-[var(--surface-1)]` / `bg-[var(--surface-2)]`), con texto de alto contraste (`text-gray-700 dark:text-gray-200`) en estados inactivos, y estados seleccionados nítidos con identidad de producto (borde o texto `text-metallic-green`, fondo sobrio de alto contraste o pills con contraste tipográfico real), asegurando legibilidad inmediata y cumplimiento estricto de accesibilidad.
38. **PROHIBICIÓN ESTRICTA DE FONDOS GRISES ARTIFICIALES DESCOLGADOS EN COMPONENTES (VIBECODED GRAY CONTAINER SLOP - MANDATORIA)**:
    - **Diagnóstico**: Usar tonos grises planos genéricos (`bg-gray-100`, `bg-zinc-100`, `bg-neutral-800`, fondos grises duros) en tarjetas, botones, badges, acordeones, toggles/switches o contenedores de estado secundario. Este vicio de IA genera parches visuales sucios que destruyen la coherencia cromática y el sistema de temas (Theme System).
    - **Regla**: Prohibido usar fondos grises artificiales o descolgados en cards, botones, badges, acordeones, toggles, switches y selectores.
    - **Reemplazo correcto**: Todo contenedor interactivo o de superficie debe utilizar el fondo general de la superficie del sistema (`bg-[var(--surface-1)]`, `bg-[var(--surface-0)]`), integrándose con bordes sutiles del tema (`border-[var(--border-default)]` o `border-[var(--border-subtle)]`). La delimitación se logra mediante bordes tokenizados, hover translúcido o contraste tipográfico, jamás con cajas o parches grises planos.


39. **ANIMACIÓN DE DIVULGACIONES (MANDATORIA)**: Todo componente expandible/colapsable DEBE (1) animar apertura Y cierre, sin un toggle `hidden` que corte el cierre (los hijos siguen montados); (2) respetar `prefers-reduced-motion: reduce` (apertura/cierre instantáneo, sin transición); (3) exponer un `<button>` real con `aria-expanded` + `aria-controls` y un panel con `id` estable; y (4) usar el primitivo `AnimatedDisclosure` (`packages/shop-auth-ui/src/AnimatedDisclosure.tsx`) en vez de hand-rollear el disclosure. Los overlays modales siguen usando `AdaptiveOverlay` (§7.2/§7.3 de `.agents/AGENTS.md`). **Alcance:** la regla aplica a TODO componente expandible/colapsable NUEVO, no sólo a los que ya existen: cualquier accordion, disclosure o control con `aria-expanded` que se agregue debe nacer con `AnimatedDisclosure`.
40. **PROHIBICIÓN ESTRICTA DE ENCAJONAR IMÁGENES EN SUB-TARJETAS O CONTENEDORES CON FONDO GRIS (NO GRAY IMAGE BOXES - MANDATORIA)**:
    - **Diagnóstico**: Envolver imágenes cargadas, logotipos, banners o miniaturas (`<img>`) dentro de una caja secundaria con fondo gris (`bg-gray-50`, `bg-slate-100`, `bg-[var(--surface-2)]`), bordes y padding interno dentro de otra tarjeta o vista. Esto genera el efecto "card dentro de card" con un marco gris artificial alrededor de la imagen.
    - **Regla**: Las imágenes NO deben estar contenidas dentro de una card o recuadro con fondo gris.
    - **Reemplazo correcto**: Renderizar la imagen directamente de forma limpia sobre la superficie base o con esquinas redondeadas propias (`rounded-lg` / `rounded-xl` en el `<img>`), sin cajas grises contenedoras ni marcos anidados alrededor. Solo cuando NO hay imagen cargada (estado vacío / placeholder de subida) se permite un área delimitada con borde punteado sutil (`border-dashed`) y fondo transparente.
41. **PROHIBICIÓN DE CABECERAS RÍGIDAS CON SUBTÍTULOS Y REDIMENSIONADO DINÁMICO EN MODALES (GENERIC MODAL HEADER & LAYOUT SHIFT SLOP - REGLA PREFERENCIAL / NO EXHAUSTIVA)**:
    - **Diagnóstico**: Incluir una cabecera rígida de modal con título grande, subtítulo explicativo genérico o redundante (ej: 'Para ver tiendas cercanas y calcular envíos') y borde divisorio separando el cuerpo. Esto desperdicia altura vertical crítica, añade ruido decorativo y comunica un template genérico de IA. Asimismo, permitir que el modal se redimensione dinámicamente según la cantidad de resultados o coincidencias provoca saltos visuales bruscos (layout shifts / visual shocks) sumamente molestos para el usuario.
    - **Regla**: Como estándar de diseño en Equarys, no utilizar cabeceras separadas con subtítulo en modales de acción o selección (no es una regla exhaustiva para todo escenario extremo, pero NUNCA será la primera opción por defecto). El título debe estar integrado directamente dentro del contenido para ahorrar espacio vertical, el botón de cierre 'X' debe ser sutil y el modal debe tener un tamaño/altura predeterminada estable con contenedor scrolleable interno, evitando que salte o se estire según los datos cargados.
    - **Reemplazo correcto**: Título directo dentro del flujo de contenido, sin descripciones innecesarias, sin divisores horizontales decorativos, con botón de cierre sutil en la esquina superior y dimensiones predeterminadas estables (ej: ancho y alto fijos con `overflow-y-auto` interno para sugerencias o resultados).
42. **PROHIBICIÓN DEL PATRÓN "SÁNDWICH" (CABECERA RÍGIDA + FOOTER AISLADO) EN MODALES DE DIAGNÓSTICO E INSPECCIÓN (MODAL SANDWICH SLOP - MANDATORIA)**:
    - **Diagnóstico**: Encajonar modales informativos, de diagnóstico, inspección o alertas puntuales entre una cabecera rígida con `border-b` y una barra de pie fija con `border-t` solo para alojar un botón secundario ("Entendido", "Cerrar" o "Aceptar"). Esta estructura rígida de 3 bandas roba entre 110px y 130px de altura vertical, estrangula el cuerpo del modal y fuerza barras de scroll verticales artificiales/recortadas en laptops y pantallas medianas cuando todo el contenido entraría cómodamente en una sola vista natural.
    - **Regla**: Prohibido aplicar estructura rígida de sándwich (header + footer fijos) en modales informativos, de diagnóstico, previsualización o inspección puntual que no sean wizards o formularios transaccionales complejos de pasos múltiples.
    - **Reemplazo correcto**: Diseñar modales de superficie continua sin bandas perimetrales fijas (`floatingClose={true}` en `AdaptiveModal`, sin prop `footer`). El título del diálogo debe encabezar directamente el flujo superior del contenido con espacio reservado para la "X" flotante, y los botones de acción contextual o confirmación ("Entendido", "Mejorar con IA") deben integrarse orgánicamente al pie del propio flujo del contenido. Esto recupera más de 120px de altura útil, elimina scrollbars indeseados y garantiza una experiencia sobria y de nivel profesional.

## Reglas de Componentes (Filtros y Chips)

- **Prohibición de lavados y tintes pasteles en contenedores**: Prohibido aplicar fondos pastel semi-transparentes (`bg-amber-500/10`, `bg-emerald-100`, `bg-rose-50`, etc.) a barras de estado, alertas, tarjetas o contenedores completos. Todo contenedor debe mantenerse en superficies neutras del sistema (`bg-[var(--surface-2)]`, `bg-[var(--surface-1)]`) con bordes neutros sutiles (`border-[var(--border-subtle)]`). La semántica de estado debe recaer en insignias/badges sólidas de alto contraste, iconos funcionales del dominio y contraste tipográfico nítido.
- **Prohibición de puntos de colores decorativos (dots) en filtros**: Prohibido usar puntos de estado genéricos (círculos de colores) dentro de los chips o toggles de filtrado. En su lugar, los controles de filtro deben usar iconos explícitos y específicos del dominio (como `PackageX` de Lucide para "sin stock" y `AlertTriangle` para "stock bajo") para transmitir un significado inmediato.
- **Prohibición de tarjetas blancas flotantes y píldoras toscas para chips**: Prohibido envolver chips de filtro en cajas flotantes blancas pesadas o formas de cápsula/óvalo (`rounded-full`). En su lugar, usar chips redondeados rectangulares limpios (`rounded-xl` o `rounded-lg`) con texto de alto contraste e iconos específicos del dominio.
- **Prohibición de tarjetas blancas flotantes o bordes rígidos en selectores de estado/toggles/chips activos o inactivos**: No usar tarjetas blancas flotantes rígidas con bordes de color gris sólido para contener selectores/chips. Se deben preferir de forma obligatoria diseños planos (flat) o translúcidos con fondos atenuados que se integren al fondo del panel y cambien de estado suavemente sin bordes rígidos innecesarios.


## Flujo mínimo de revisión

1. Detectar anti-patrones en el diff (clases, iconos, badges, gradientes).
2. Reemplazar por patrón funcional y theme-safe (tokens, jerarquía, microcopy integrado).
3. Validar que cada elemento visual tenga propósito de negocio.
4. Confirmar consistencia con reglas globales de `AGENTS.md` (sin rediseño no pedido, copy neutral, accesibilidad).

## Anti-patrones → reemplazo recomendado

| Anti-patrón | Evitar | Reemplazo |
|---|---|---|
| Borde izquierdo decorativo | `border-l-4 ...` | Card completa con `border` + `surface` tokenizada |
| “Magia IA” genérica | `Sparkles` | Ícono funcional del dominio (estado/acción real) |
| Gradiente plantilla IA | `from-blue-* to-purple-*` | Paleta/tokens Equarys (`--brand-primary`, `--surface-*`) |
| Badge sueltos sin acción | “Precios de lanzamiento” flotante | Microcopy integrado en bloque principal |
| Ícono ornamental | Íconos grandes sin semántica | Ícono ligado a métrica, estado o CTA |
| Borde/línea decorativa simulada de un solo lado | Divs absolutos en cualquier borde (ej: `left-0 w-1 bg-...`) o `after:border-l-*`/`after:border-t-*` | Indicador funcional nativo integrado (status dot, badge a la derecha o contraste tipográfico) |
| Íconos con fondos pasteles | Íconos dentro de contenedores con fondos suaves (ej. `bg-blue-50`, `bg-yellow-100`) | Ícono solo con su color semántico directo y sin fondo decorativo artificial |
| Pill badges pastel de estado con icono check o versión | Pill badges redondeados con fondo/borde pastel y check genérico o versión | Texto plano limpio, o indicador funcional de color semántico discreto sin fondo/borde |
| Anidar tarjetas de datos simples/ayuda/navegación | Tarjetas blancas/grises con bordes/sombras para datos simples, textos de ayuda o botones (ej. `< 1 / 2 >`) | Fluir directo y transparente sobre fondo general; microinteracciones con hover translúcido sutil sobre ícono suelto |
| Chips de estado rápidos en tarjetas blancas | Chips de stock con fondo blanco y borde gris sutil tipo tarjeta flotante | Diseño plano translúcido integrado al fondo (`bg-transparent border-none`) |
| Puntito decorativo en botón de filtro rápido | Puntito de estado de color al lado de "Sin stock" o "Stock bajo" | Ícono de negocio específico del dominio (`PackageX`, `AlertTriangle`) |
| Glassmorphism decorativo | `backdrop-filter: blur()` aplicado como efecto decorativo sin superposición real de capas | Superficies con bordes sutiles y fondos semánticos sin blur. El blur solo en modales/dropdowns con superposición de capas |
| Gradient text en métricas | `background: linear-gradient(...)` + `-webkit-background-clip: text` en números grandes o títulos | Color sólido de marca o semántico. Si necesita énfasis, usar peso tipográfico o tamaño, no gradiente |
| Paleta neón / cyan-on-dark | `text-cyan-400` sobre `bg-slate-900`, acentos neón eléctricos | Paleta British Racing Green Metallic. Acentos sobrios y profesionales |
| Emojis como iconos de UI | Emojis usados como iconos de navbar, bullets, secciones o navegación | Lucide icons consistentes con el sistema. Emojis solo en microcopy contextual |
| Botón con gradiente | `bg-gradient-to-r from-X to-Y` en botones primarios | Botón sólido con bg-metallic-green y hover por opacidad |
| Secciones con fondos alternados (zebra) | `bg-gray-50 → bg-white → bg-gray-50 → bg-white` en secciones de página | Fondo base consistente. Cambiar solo cuando hay cambio genuino de contexto de información |
| Layout 3-columnas idénticas repetido | `grid-cols-3 gap-4` para secciones distintas | Variar estructura: 2 col, 4 col, asymmetrical, full-width según contenido |
| Múltiples acentos de color compitiendo | Cards/sidebar con bordes/accesorios de colores distintos sin lógica semántica | Un solo acento de marca. Colores semánticos solo para estados reales |
| Inter/Roboto/Open Sans default | `font-family: 'Inter', 'Roboto', 'Open Sans', system-ui` sin otra opción | Tipografía definida en el sistema de diseño de Equarys |
| Hero layout predecible de IA | Badge → H1 → Description → 2 CTAs → 3-column features siempre igual | Macro-estructura que responda al contenido específico, no a plantilla SaaS |
| Barras laterales (aside sidebars) injustificadas | Fragmentar la pantalla en columnas desbalanceadas (ej: 2/3 y 1/3) con un aside vacío o de poco contenido | Estructura en grilla o bento equilibrado de flujo integrado o fila única |
| Fondos pastel deslavados semi-transparentes | `bg-amber-500/10`, `bg-amber-100`, `bg-emerald-500/10`, `bg-blue-100` manchando todo el contenedor/alerta | Contenedor neutro limpio (`bg-[var(--surface-2)] border border-[var(--border-subtle)]`) + badge SÓLIDO de estado (`bg-[#005530] text-white`, `bg-amber-600 text-white`, `bg-rose-700 text-white`) |
| Pre-título eyebrow en mayúsculas | `uppercase tracking-wider text-[10px]` encima de títulos | Tipografía neutra en Sentence case (`text-xs text-[var(--text-muted)]`) sin mayúsculas forzadas |
| Footer redundante con "Cerrar" | Barra de pie de modal solo con botón "Cerrar" | Omitir footer; usar "X", Escape y clic en backdrop |
| Segmented controls con bandeja gris deslavada | `bg-gray-100` / `bg-zinc-100` con `text-gray-400` y pastillas blancas | Controles limpios en superficie semántica con texto de alto contraste y acento de marca (Regla 37) |
| Fondos grises artificiales descolgados en cards/toggles/badges | `bg-gray-100`, `bg-zinc-100`, `bg-neutral-800` en toggles, cards o badges | Usar superficie general (`bg-[var(--surface-1)]`, `bg-[var(--surface-0)]`) con bordes sutiles (Regla 38) |
| Imágenes encerradas en sub-cards con fondo gris | `<div class="bg-gray-50 / bg-slate-100 / bg-[var(--surface-2)] border p-2"><img /></div>` | Renderizar `<img />` directo y limpio sin caja ni marco gris contenedor (Regla 40) |
| Cabecera rígida de modal con subtítulo y saltos de tamaño | Cabecera con título + descripción redundante ('Para ver tiendas...'), border-b divisorio y modal que salta de altura | Título integrado en contenido, sin descripción, "X" sutil y altura/tamaño predeterminado estable sin layout shifts (Regla 41) |

## Comandos

```bash
# Buscar patrones vibecoded clásicos
rg "border-l-|Sparkles|from-blue-|to-purple-|rounded-full.*(lanzamiento|nuevo|promo)" apps

# Buscar glassmorphism decorativo
rg "backdrop-filter: blur|backdrop-blur-"

# Buscar gradient text
rg "-webkit-background-clip: text|background-clip: text.*linear-gradient" --include "*.css"

# Buscar emojis como iconos UI (🚀🔥💡✅⚠️🎯📊⭐💎🎉)
rg "[🔄🔧🚀💡✅⚠️🎯📊⭐💎🎉🔍🏆⚡💪🔒🎨📈💰]" apps --include "*.tsx" --include "*.jsx"

# Buscar botones con gradiente
rg "bg-gradient-to-r.*from-" apps

# Buscar paletas neón / cyan-on-dark
rg "text-cyan-|text-teal-400|bg-slate-900|bg-gray-900" apps

# Buscar Inter/Roboto default
rg "font-family.*['\"]?(Inter|Roboto|Open Sans)['\"]?" --include "*.css"

# Buscar hardcodes en rutas theme-aware (ajustar alcance según módulo)
rg "bg-(blue|purple|gray)-|text-(blue|purple|gray)-|#[0-9a-fA-F]{6}" apps
```

## Recursos

- **Guía base**: [VIBECODED_AVOIDANCE_GUIDE.md](references/vibecoded-avoidance-guide.md)

## Checklist rápido

- [ ] No usa `border-l-*` decorativo.
- [ ] No usa sparkles fuera de Synara.
- [ ] No usa gradientes azul-purpura genéricos.
- [ ] Cada ícono tiene propósito funcional.
- [ ] No agrega badges/chips sin función operativa.
- [ ] No encajonas contenidos principales de bienvenida en tarjetas blancas flotantes rígidas sobre fondos grises.
- [ ] No encajonas iconos en contenedores circulares o cuadrados con fondos pastel suaves.
- [ ] No usa tags superiores con estilos llamativos genéricos.
- [ ] No utiliza pre-títulos pequeños "voladores" en mayúsculas como categoría del módulo.
- [ ] No encajonas listas de pasos en tarjetas contenedoras secundarias de color suave.
- [ ] No añade barras de direcciones artificiales que obstruyan la notch o cámara del dispositivo en mockups.
- [ ] Usa `<iframe>` interactivo en mockups de previsualización en vivo en lugar de PNG estático con scroll CSS.
- [ ] No usa tipografías toscas e hiper-pesadas desproporcionadas en títulos.
- [ ] No apila iconos de cabecera verticalmente si se puede usar alineación horizontal elegante.
- [ ] Usa scroll vertical real (`overflow-y-auto`) y anchos máximos en contenedores de onboarding.
- [ ] No usa diseño mobile plano e impersonal (ERP look) en onboarding (usa banners/miniaturas de marca).
- [ ] No usa checklists planos en móvil (usa tarjetas táctiles con buen padding).
- [ ] No decora fondos hero únicamente con círculos repetidos (combina formas geométricas distintas).
- [ ] No usa micro-subtítulos eyebrow en mayúsculas como section-label flotante ("CATÁLOGO ONLINE", "PROCESO DE CONFIGURACIÓN"). La jerarquía la dan el h1 y los iconos.
- [ ] No usa puntitos de colores ni círculos parpadeantes/animados al lado de los títulos de sección.
- [ ] No usa badges semitransparentes tipo pastilla con puntitos parpadeantes/animados para textos decorativos o estáticos.
- [ ] No usa glassmorphism decorativo (`backdrop-filter: blur()`) sin propósito funcional.
- [ ] No usa gradient text en métricas, títulos ni headings.
- [ ] No anida cards más de 2 niveles de profundidad.
- [ ] No usa paletas neón ni cyan-on-dark.
- [ ] No usa emojis como iconos de navegación ni reemplazo de iconos funcionales.
- [ ] No usa botones con gradiente (`bg-gradient-to-r`).
- [ ] No usa fondos alternados tipo zebra striping sin razón de contenido.
- [ ] No repite el mismo layout de 3 columnas para todas las secciones.
- [ ] No usa múltiples acentos de color compitiendo sin lógica semántica.
- [ ] No usa Inter/Roboto/Open Sans como tipografía default.
- [ ] No usa hero layout predecible de IA (badge → h1 → 2 CTAs → 3-column features).
- [ ] No encajona botones rápidos de estado de filtros en tarjetas blancas con bordes duros.
- [ ] No usa status dots decorativos antes del texto en botones de filtro rápidos.
- [ ] No usa barras laterales (aside sidebars) injustificadas si no hay contenido secundario sustancial.
- [ ] No usa fondos pastel semi-transparentes deslavados (`bg-amber-500/10`, `bg-blue-100`, etc.) en banners, alertas, barras de estado o contenedores.
- [ ] No sufre de "tarjetitis" o fragmentación en tarjetas blancas flotantes desconectadas (Regla 29).
- [ ] No anida cards dentro de cards del mismo fondo/color; divide opciones en grupos discretos contrastantes (Regla 30).
- [ ] Fondos de sección continuos de borde a borde (full bleed sin huecos o márgenes huérfanos) (Regla 31).
- [ ] Iconos de listas y opciones limpios y desnudos sin contenedores squircle ni fondos pasteles (Regla 32).
- [ ] Iconografía nítida, profesional y canónica sin glifos deformes de IA (Regla 33).
- [ ] No utiliza pre-títulos eyebrow en mayúsculas forzadas con tracking amplio (`uppercase tracking-wider`) (Regla 35).
- [ ] No agrega footers redundantes con botón 'Cerrar' en modales cuando ya existe 'X' o la acción es de selección directa (Regla 36).
- [ ] No utiliza controles segmentados o toggles con bandejas grises artificiales y texto deslavado sin contraste (Regla 37).
- [ ] No usa fondos grises artificiales descolgados (`bg-gray-100`, `bg-zinc-100`, `bg-neutral-800`, etc.) en cards, botones, badges, acordeones o toggles (Regla 38).
- [ ] No encierra imágenes, logos ni previsualizaciones dentro de sub-tarjetas o recuadros con fondo gris (Regla 40).
- [ ] Usa tokens de tema.
- [ ] Mantiene identidad Equarys.
