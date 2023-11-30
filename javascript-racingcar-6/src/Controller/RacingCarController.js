import InputView from '../View/InputView.js';

class RacingCarController {
  async gameStart() {
    const carNameList = await InputView.inputCarNameList();
    console.log(carNameList);
  }
}

export default RacingCarController;
