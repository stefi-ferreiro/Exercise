import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { MATHVOICE_BLURS, MvBlurToken } from '../blurs';

@Component({
  selector: 'mv-blur-specimen',
  templateUrl: './blur-specimen.html',
  styleUrl: './blur-specimen.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MvBlurSpecimenComponent {
  readonly blurs = input<readonly MvBlurToken[]>(MATHVOICE_BLURS);
  readonly backgroundSrc = input('/assets/blur-background.jpg');
}
