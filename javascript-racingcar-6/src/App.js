import RacingCarController from './Controller/RacingCarController.js';

class App {
  #racingCarController;
  constructor() {
    this.#racingCarController = new RacingCarController();
  }

  async play() {
    await this.#racingCarController.gameStart();
  }
}

export default App;
