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
}

export default Validation;
