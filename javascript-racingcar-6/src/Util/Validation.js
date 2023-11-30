import { ERROR_MESSAGE } from './Message.js';
import { REGEX } from './Constants.js';

class Validation {
  static isDuplicate(carNameList) {
    const carNameSet = new Set(carNameList);

    if (carNameList.length !== carNameSet.size) throw new Error(ERROR_MESSAGE.carNameDuplicate);
  }

  static isCarOne(carNameList) {
    if (carNameList.length === 1) throw new Error(ERROR_MESSAGE.carOne);
  }

  static isNumber(gameCount) {
    const regex = REGEX.gameCount;
    if (!regex.test(gameCount)) throw new Error(ERROR_MESSAGE.gameCount);
  }
}

export default Validation;
