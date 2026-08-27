import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { MvColorPalette } from '../colors';

@Component({
  selector: 'mv-color-palette',
  templateUrl: './color-palette.html',
  styleUrl: './color-palette.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'mv-color-palette',
  },
})
export class MvColorPaletteComponent {
  readonly palette = input.required<MvColorPalette>();
}
