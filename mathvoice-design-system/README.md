# MathVoice Design System for Angular

Angular implementation of the MathVoice Figma library. The workspace contains:

- `projects/mathvoice-ui`: reusable Angular library.
- `src/app`: responsive catalogue used to review the implementation.

The current version covers the complete **Colors** and **Typography** Figma
sections: six primitive palettes, three brand gradients, the Inter type scale,
CSS custom properties, typed TypeScript tokens, utility classes, and reusable
catalogue components.

## Run the catalogue

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Build and test

```bash
npm run build
npx ng build mathvoice-ui
npm test -- --watch=false
```

## Consume the library

Import the token stylesheet once in the consuming application's global SCSS:

```scss
@use 'mathvoice-ui/styles/colors';
@use 'mathvoice-ui/styles/typography';
```

Use the typed values or catalogue components:

```ts
import {
  MATHVOICE_COLOR_PALETTES,
  MATHVOICE_FONT_WEIGHTS,
  MATHVOICE_GRADIENTS,
  MATHVOICE_TYPE_SCALE,
  MvColorPaletteComponent,
  MvGradientPaletteComponent,
  MvTypographySpecimenComponent,
} from 'mathvoice-ui';
```
