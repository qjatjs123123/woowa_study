import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, OUPUT_MESSAGE } from '../Util/Message.js';
import { CONSTANTS } from '../Util/Constants.js';

class Car {
  #carName;
  #carMove;

  constructor(carName) {
    this.#validation(carName);
    this.#carName = carName;
    this.#carMove = 0;
  }

  #validation(carName) {
    if (carName === '') throw new Error(ERROR_MESSAGE.carNameEmpty);
    if (carName.length > CONSTANTS.carNameMaxLength) throw new Error(ERROR_MESSAGE.carNameLength);
  }

  decideMoveOrStop() {
    const random = Random.pickNumberInRange(CONSTANTS.randomMin, CONSTANTS.randomMax);

    if (random >= CONSTANTS.moveNumber) this.#carMove += 1;
  }

  roundResult() {
    return OUPUT_MESSAGE.roundResult(this.#carName, this.#carMove);
  }

  get carMove() {
    return this.#carMove;
  }

  get carName() {
    return this.#carName;
  }
}

export default Car;
