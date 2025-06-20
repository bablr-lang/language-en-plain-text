import { re } from '@bablr/boot';
import { eat } from '@bablr/helpers/grammar';
import { Node } from '@bablr/helpers/decorators';

export const canonicalURL = 'https://bablr.org/languages/core/en/plain-text';

export const grammar = class BlankSpaceGrammar {
  @Node
  *Text() {
    yield eat(re`/./s`);
  }
};
