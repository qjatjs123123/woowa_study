import { ERROR_MESSAGE } from './Util/Message.js';
import CONSTANTS from './Util/Constants.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (
      numbers.length !== CONSTANTS.lottoCount ||
      numbers.length !== new Set(numbers).size ||
      !numbers.every((lotto) => lotto >= CONSTANTS.lottoMin && lotto <= CONSTANTS.lottoMax)
    )
      throw new Error(ERROR_MESSAGE.lottoError);
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
