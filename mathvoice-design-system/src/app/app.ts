import { Component } from '@angular/core';
import {
  MATHVOICE_COLOR_PALETTES,
  MATHVOICE_GRADIENTS,
  MvColorPaletteComponent,
  MvGradientPaletteComponent,
} from 'mathvoice-ui';

@Component({
  selector: 'app-root',
  imports: [MvColorPaletteComponent, MvGradientPaletteComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly palettes = MATHVOICE_COLOR_PALETTES;
  protected readonly gradients = MATHVOICE_GRADIENTS;
}
