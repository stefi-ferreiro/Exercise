import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { MvGradientToken } from '../colors';

@Component({
  selector: 'mv-gradient-palette',
  templateUrl: './gradient-palette.html',
  styleUrl: './gradient-palette.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MvGradientPaletteComponent {
  readonly gradients = input.required<readonly MvGradientToken[]>();

  protected background(gradient: MvGradientToken): string {
    const angle = gradient.direction === 'horizontal' ? '90deg' : '180deg';
    return `linear-gradient(${angle}, ${gradient.from.value}, ${gradient.to.value})`;
  }
}
