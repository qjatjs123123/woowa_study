import InputView from '../View/InputView.js';
import CONSTANTS from '../Util/Constants.js';
import Validation from '../Util/Validation.js';
import Car from '../Domain/Car.js';

class RacingCarController {
  async gameStart() {
    const carNameStr = await InputView.inputcarNameStr();
    let carNameList = carNameStr.split(CONSTANTS.carNameSeparator);
    this.#carNameStrValidation(carNameList);
    carNameList = carNameList.map((carName) => new Car(carName));
  }

  #carNameStrValidation(carNameList) {
    Validation.isCarOne(carNameList);
    Validation.isDuplicate(carNameList);
  }

}

export default RacingCarController;
