import { ERROR_MESSAGE } from './Util/Message.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.lottoError);
    }
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
