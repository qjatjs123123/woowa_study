import EventController from './Controller/EventController.js';

class App {
  constructor() {
    this.EventController = new EventController();
  }

  async run() {
    await this.EventController.start();
  }
}

export default App;
