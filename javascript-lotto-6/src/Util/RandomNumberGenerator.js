import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from './Constants.js';

class RandomNumberGenerator {
  static generator() {
    return Random.pickUniqueNumbersInRange(
      CONSTANTS.lottoMin,
      CONSTANTS.lottoMax,
      CONSTANTS.lottoCount,
    ).sort((lottoA, lottoB) => lottoA - lottoB);
  }
}

export default RandomNumberGenerator;
