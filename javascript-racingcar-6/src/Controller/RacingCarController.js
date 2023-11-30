import InputView from '../View/InputView.js';
import CONSTANTS from '../Util/Constants.js';
import Validation from '../Util/Validation.js';

class RacingCarController {
  async gameStart() {
    const carNameStr = await InputView.inputcarNameStr();
    const carNameList = carNameStr.split(CONSTANTS.carNameSeparator);
    this.#carNameStrValidation(carNameList);
  }

  #carNameStrValidation(carNameList) {
    Validation.isDuplicate(carNameList);
  }
}

export default RacingCarController;
