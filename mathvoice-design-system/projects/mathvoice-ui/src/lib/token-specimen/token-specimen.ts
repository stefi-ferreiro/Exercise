import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import {
  MATHVOICE_PRIMITIVE_GROUPS,
  MATHVOICE_PRIMITIVE_TOKENS,
  MvDesignToken,
} from '../tokens';

@Component({
  selector: 'mv-token-specimen',
  templateUrl: './token-specimen.html',
  styleUrl: './token-specimen.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'mv-token-specimen',
  },
})
export class MvTokenSpecimenComponent {
  readonly tokens = input<readonly MvDesignToken[]>(MATHVOICE_PRIMITIVE_TOKENS);
  readonly groups = input<readonly string[]>(MATHVOICE_PRIMITIVE_GROUPS);

  protected readonly grouped = computed(() =>
    this.groups()
      .map((group) => ({
        group,
        tokens: this.tokens().filter((token) => token.group === group),
      }))
      .filter((entry) => entry.tokens.length > 0),
  );

  protected previewWidth(token: MvDesignToken): number {
    const numeric = Number(token.value);
    if (Number.isNaN(numeric)) {
      return 8;
    }
    return Math.min(numeric, 160);
  }
}
