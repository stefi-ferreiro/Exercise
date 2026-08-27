import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { MATHVOICE_SHADOWS, MvShadowToken } from '../shadows';

@Component({
  selector: 'mv-shadow-specimen',
  templateUrl: './shadow-specimen.html',
  styleUrl: './shadow-specimen.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MvShadowSpecimenComponent {
  readonly shadows = input<readonly MvShadowToken[]>(MATHVOICE_SHADOWS);
}
