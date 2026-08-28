# Cómo usar el design system MathVoice (Angular)

Guía para implementar pantallas con los tokens de Figma. El archivo de diseño es
[MathVoice Design System](https://www.figma.com/design/W0kgiFr5FvPLxguxwWBF0Z/MathVoice-Design-System).

Prefijo de la librería: `mv` (variables `--mv-…`, clases `.mv-…`, selectores `mv-…`).

## Qué hay y qué no

| Incluido | Todavía no |
| --- | --- |
| 131 variables **Primitive** (color, spacing, radius, size, border, stroke, font family) | Componentes de producto (`Button`, `Input`, `Side Bar`, etc.) |
| 458 variables **Semantic** (roles de UI que aliasan primitivas) | Iconos |
| Tipografía Inter + escala Display / Text | |
| Shadows `xs`–`3xl` y blurs `sm`–`xl` | |
| Catálogo visual en `src/app` | |

Para un botón o un input, arma el HTML/Angular **con estas variables**. No copies hex de Figma a mano.

## Regla de uso

1. En UI de producto usa **tokens semánticos**.
2. Usa un **primitivo** solo si no existe semántico para ese rol (por ejemplo un color de marca suelto).
3. No hardcodees `#5634FF` ni `8px` si ya hay token.

Traducción Figma → CSS: el nombre se pasa a minúsculas y las barras a guiones.

| Figma | CSS |
| --- | --- |
| `Color/Primary/400` | `--mv-color-primary-400` |
| `Spacing/Sp-8` | `--mv-spacing-8` |
| `Radius/Rd-8 (Default)` | `--mv-radius-8` |
| `Button/Primary/Background/Default` | `--mv-button-primary-background-default` |
| `Text/Primary` | `--mv-text-primary` |
| `Layout/Padding/Page` | `--mv-layout-padding-page` |

El catálogo en `http://localhost:4200` lista nombre Figma, variable CSS, alias y valor.

## Levantar el catálogo

```bash
cd mathvoice-design-system
npm install
npm start
```

Abre `http://localhost:4200`. Recorre Colors, Typography, Shadows, Blurs, Primitives y Semantic.

## Instalar tokens en una app Angular

Este workspace ya consume la librería por path (`"mathvoice-ui": ["./projects/mathvoice-ui/src/public-api.ts"]`). En otra app, apunta al mismo `public-api.ts` o a `dist/mathvoice-ui` después de `npx ng build mathvoice-ui`.

### 1. Fuente Inter

```bash
npm install @fontsource-variable/inter
```

### 2. Cargar estilos **una vez** (SCSS global)

En este repo el catálogo usa rutas al source de la librería:

```scss
@use '@fontsource-variable/inter';
@use '../projects/mathvoice-ui/src/lib/styles/colors';
@use '../projects/mathvoice-ui/src/lib/styles/primitives';
@use '../projects/mathvoice-ui/src/lib/styles/typography';
@use '../projects/mathvoice-ui/src/lib/styles/shadows';
@use '../projects/mathvoice-ui/src/lib/styles/blurs';
@use '../projects/mathvoice-ui/src/lib/styles/semantic';

html {
  font-family: var(--mv-font-family);
  background: var(--mv-background-page-default-default);
  color: var(--mv-text-primary);
}
```

Orden: `colors` y `primitives` antes de `semantic` (las semánticas hacen `var(--mv-color-…)` / `var(--mv-spacing-…)`).

### 3. Estilos de componente

```scss
.page {
  padding: var(--mv-layout-padding-page);
  background: var(--mv-background-page-default-default);
}

.card {
  padding: var(--mv-layout-padding-card);
  color: var(--mv-text-primary);
  background: var(--mv-background-surface-cards-modals-cards-modals);
  border: var(--mv-border-width-border-default) solid var(--mv-border-color-default);
  border-radius: var(--mv-radius-8);
  box-shadow: var(--mv-shadow-sm);
}

.button-primary {
  display: inline-flex;
  gap: var(--mv-button-size-md-gap-default);
  padding: var(--mv-button-size-md-verticalpadding-10)
    var(--mv-button-size-md-horizontalpadding-14);
  color: var(--mv-button-primary-content-default);
  font-family: var(--mv-font-family);
  font-size: var(--mv-font-size-text-md);
  font-weight: var(--mv-font-weight-semibold);
  line-height: var(--mv-line-height-text-md);
  background: var(--mv-button-primary-background-default);
  border: 0;
  border-radius: var(--mv-button-border-radius-default);

  &:hover {
    color: var(--mv-button-primary-content-hover);
    background: var(--mv-button-primary-background-hover);
  }

  &:disabled {
    color: var(--mv-button-primary-content-disabled);
    background: var(--mv-button-primary-background-disabled);
  }
}

.input {
  height: var(--mv-input-size-md-height-40);
  padding: var(--mv-input-size-md-verticalpadding-10)
    var(--mv-input-size-md-horizontalpadding-14);
  color: var(--mv-input-color-content-default);
  background: var(--mv-input-color-background-default);
  border: var(--mv-input-color-border-width-border-default) solid
    var(--mv-input-color-border-color-default);
  border-radius: var(--mv-input-border-radius-default);

  &:hover {
    background: var(--mv-input-color-background-hover);
  }

  &:focus {
    outline: none;
    color: var(--mv-input-color-content-focus);
    border-color: var(--mv-input-color-border-color-focus);
  }
}
```

Clases de utilidad ya definidas:

- Tipo: `.mv-display-lg`, `.mv-text-md`, `.mv-font-semibold`, …
- Sombra: `.mv-shadow-xs` … `.mv-shadow-3xl`
- Blur: `.mv-blur-sm` + `.mv-blur-light` / `.mv-blur-dark`

### 4. TypeScript (opcional)

```ts
import {
  MATHVOICE_COLOR_PALETTES,
  MATHVOICE_GRADIENTS,
  MATHVOICE_TYPE_SCALE,
  MATHVOICE_SHADOWS,
  MATHVOICE_BLURS,
  MATHVOICE_PRIMITIVE_TOKENS,
  MATHVOICE_SEMANTIC_TOKENS,
  tokensByGroup,
} from 'mathvoice-ui';

const buttons = tokensByGroup(MATHVOICE_SEMANTIC_TOKENS, 'Button');
```

Los componentes `mv-color-palette`, `mv-typography-specimen`, `mv-token-specimen`, etc. son **solo para el catálogo**, no para pantallas de producto.

## Dónde está cada token

| Colección Figma | Archivos |
| --- | --- |
| Primitive colors | `projects/mathvoice-ui/src/lib/colors.ts`, `styles/_colors.scss` |
| Spacing, radius, size, border, stroke | `styles/_primitives.scss` |
| Semantic (alias) | `tokens.ts` (`MATHVOICE_SEMANTIC_TOKENS`), `styles/_semantic.scss` |
| Typography | `typography.ts`, `styles/_typography.scss` |
| Shadows / blurs | `shadows.ts`, `blurs.ts` y sus SCSS |

Grupos semánticos: Avatar, Background, Badge, Border, Breadcrumb, Button, Checkbox, Chip, Color, Content, Dropdown, Input, Layout, Radio, Segmented Control, Side Bar, Tab, Text, Toggle, Tooltip, Top Bar.
