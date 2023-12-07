import OutputView from '../View/OutputView.js';
import Calendar from '../Domain/Calendar.js';
import { OUTPUT_MESSAGE, INPUT_MESSAGE } from '../Util/Message.js';
import InputView from '../View/InputView.js';
import ErrorHandler from '../Util/ErrorHandler.js';

class EventController {
  async start() {
    OutputView.print(OUTPUT_MESSAGE.start);
    await this.handleInputDate();
  }

  async handleInputDate() {
    let calendar = '';
    while (true) {
      const input = await InputView.read(INPUT_MESSAGE.date);
      const isValidate = ErrorHandler.handle(() => new Calendar(input));

      if (isValidate) {
        calendar = new Calendar(input);
        break;
      }
    }
    return calendar;
  }
}

export default EventController;
