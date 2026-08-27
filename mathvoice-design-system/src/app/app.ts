import { Component } from '@angular/core';
import {
  MATHVOICE_BLURS,
  MATHVOICE_COLOR_PALETTES,
  MATHVOICE_FONT_WEIGHTS,
  MATHVOICE_GRADIENTS,
  MATHVOICE_PRIMITIVE_GROUPS,
  MATHVOICE_PRIMITIVE_TOKENS,
  MATHVOICE_SEMANTIC_GROUPS,
  MATHVOICE_SEMANTIC_TOKENS,
  MATHVOICE_SHADOWS,
  MATHVOICE_TYPE_SCALE,
  MvBlurSpecimenComponent,
  MvColorPaletteComponent,
  MvGradientPaletteComponent,
  MvShadowSpecimenComponent,
  MvTokenSpecimenComponent,
  MvTypographySpecimenComponent,
} from 'mathvoice-ui';

@Component({
  selector: 'app-root',
  imports: [
    MvBlurSpecimenComponent,
    MvColorPaletteComponent,
    MvGradientPaletteComponent,
    MvShadowSpecimenComponent,
    MvTokenSpecimenComponent,
    MvTypographySpecimenComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly palettes = MATHVOICE_COLOR_PALETTES;
  protected readonly gradients = MATHVOICE_GRADIENTS;
  protected readonly typeScale = MATHVOICE_TYPE_SCALE;
  protected readonly fontWeights = MATHVOICE_FONT_WEIGHTS;
  protected readonly shadows = MATHVOICE_SHADOWS;
  protected readonly blurs = MATHVOICE_BLURS;
  protected readonly primitiveTokens = MATHVOICE_PRIMITIVE_TOKENS;
  protected readonly primitiveGroups = MATHVOICE_PRIMITIVE_GROUPS;
  protected readonly semanticTokens = MATHVOICE_SEMANTIC_TOKENS;
  protected readonly semanticGroups = MATHVOICE_SEMANTIC_GROUPS;
}
