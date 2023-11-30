import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import { CONSTANTS } from '../Util/Constants.js';
import Validation from '../Util/Validation.js';
import Car from '../Domain/Car.js';

class RacingCarController {
  async gameStart() {
    const carNameStr = await InputView.inputcarNameStr();
    const carList = this.#handleCarNameStr(carNameStr);

    let gameCount = await InputView.inputgameCount();
    gameCount = this.#handlegameCount(gameCount);

    OutputView.printResultMessage();
    this.#handleCarMove(carList, gameCount);
  }

  #handleCarMove(carList, gameCount) {
    for (let round = 0; round < gameCount; round += 1) {
      carList.forEach((carName) => carName.decideMoveOrStop());
      this.#printRoundResult(carList);
    }
  }

  #printRoundResult(carList) {
    carList.forEach((car) => {
      const message = car.roundResult();
      OutputView.printRoundResult(message);
    });
    OutputView.printRoundResult('');
  }

  #handleCarNameStr(carNameStr) {
    const carNameList = carNameStr.split(CONSTANTS.carNameSeparator);

    Validation.isCarOne(carNameList);
    Validation.isDuplicate(carNameList);

    return carNameList.map((carName) => new Car(carName));
  }

  #handlegameCount(gameCount) {
    Validation.isNumber(gameCount);

    return Number(gameCount);
  }
}

export default RacingCarController;
