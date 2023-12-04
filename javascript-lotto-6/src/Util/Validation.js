import { ERROR_MESSAGE } from './Message.js';
import CONSTANTS from './Constants.js';

class Validation {
  static purchaseAmount(purchaseAmount) {
    const amount = Number(purchaseAmount);
    if (
      Number.isNaN(amount) ||
      amount < CONSTANTS.lottoPrice ||
      amount % CONSTANTS.lottoPrice !== 0
    )
      throw new Error(ERROR_MESSAGE.purchaseAmount);
  }

  static winningNumber(input) {
    const winningNumbers = input.split(CONSTANTS.lottoSplitChar).map((lotto) => Number(lotto));

    if (
      winningNumbers.length !== CONSTANTS.lottoCount ||
      winningNumbers.length !== new Set(winningNumbers).size ||
      !winningNumbers.every((lotto) => lotto >= CONSTANTS.lottoMin && lotto <= CONSTANTS.lottoMax)
    )
      throw new Error(ERROR_MESSAGE.lottoError);
  }

  static bonusNumber(input, winningLotto) {
    if (input === '') throw new Error(ERROR_MESSAGE.bonusError);

    const bonus = Number(input);
    if (
      Number.isNaN(bonus) ||
      bonus < CONSTANTS.lottoMin ||
      bonus > CONSTANTS.lottoMax ||
      winningLotto.includes(bonus)
    )
      throw new Error(ERROR_MESSAGE.bonusError);
  }
}

export default Validation;
