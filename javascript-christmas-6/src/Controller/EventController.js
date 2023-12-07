import OutputView from '../View/OutputView.js';
import Calendar from '../Domain/Calendar.js';
import { OUTPUT_MESSAGE, INPUT_MESSAGE } from '../Util/Message.js';
import InputView from '../View/InputView.js';

class EventController {
  async start() {
    OutputView.print(OUTPUT_MESSAGE.start);
    await this.handleInputDate();
  }

  async handleInputDate() {
    const input = await InputView.read(INPUT_MESSAGE.date);
    const calendar = new Calendar(input);
  }
}

export default EventController;
