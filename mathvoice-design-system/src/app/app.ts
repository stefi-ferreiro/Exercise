import { Component } from '@angular/core';
import {
  MATHVOICE_COLOR_PALETTES,
  MATHVOICE_FONT_WEIGHTS,
  MATHVOICE_GRADIENTS,
  MATHVOICE_TYPE_SCALE,
  MvColorPaletteComponent,
  MvGradientPaletteComponent,
  MvTypographySpecimenComponent,
} from 'mathvoice-ui';

@Component({
  selector: 'app-root',
  imports: [MvColorPaletteComponent, MvGradientPaletteComponent, MvTypographySpecimenComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly palettes = MATHVOICE_COLOR_PALETTES;
  protected readonly gradients = MATHVOICE_GRADIENTS;
  protected readonly typeScale = MATHVOICE_TYPE_SCALE;
  protected readonly fontWeights = MATHVOICE_FONT_WEIGHTS;
}
