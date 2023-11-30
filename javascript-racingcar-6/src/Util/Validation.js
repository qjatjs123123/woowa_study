import { ERROR_MESSAGE } from './Message.js';

class Validation {
  static isDuplicate(carNameList) {
    const carNameSet = new Set(carNameList);

    if (carNameList.length !== carNameSet.size) throw new Error(ERROR_MESSAGE.carNameDuplicate);
  }
}

export default Validation;
