import { re } from '@bablr/boot';
import { eat } from '@bablr/helpers/grammar';

export const canonicalURL = 'https://bablr.org/languages/core/en/plain-text';

export const grammar = class BlankSpaceGrammar {
  *Text() {
    yield eat(re`/./s`);
  }
};
