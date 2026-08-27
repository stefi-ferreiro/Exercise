import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import {
  MATHVOICE_FONT_WEIGHTS,
  MATHVOICE_TYPE_SCALE,
  MvFontWeight,
  MvTypeScale,
} from '../typography';

@Component({
  selector: 'mv-typography-specimen',
  imports: [NgStyle],
  templateUrl: './typography-specimen.html',
  styleUrl: './typography-specimen.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MvTypographySpecimenComponent {
  readonly scales = input<readonly MvTypeScale[]>(MATHVOICE_TYPE_SCALE);
  readonly weights = input<readonly MvFontWeight[]>(MATHVOICE_FONT_WEIGHTS);

  protected sampleStyle(scale: MvTypeScale, weight: MvFontWeight): Record<string, string | number> {
    return {
      'font-size.px': scale.fontSize,
      'font-weight': weight.value,
      'line-height.px': scale.lineHeight,
      'letter-spacing': scale.letterSpacing ?? 'normal',
    };
  }
}
