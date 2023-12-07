import OutputView from '../View/OutputView.js';
import Calendar from '../Domain/Calendar.js';
import { OUTPUT_MESSAGE, INPUT_MESSAGE } from '../Util/Message.js';
import InputView from '../View/InputView.js';
import ErrorHandler from '../Util/ErrorHandler.js';

class EventController {
  async start() {
    OutputView.print(OUTPUT_MESSAGE.start);
    const calendar = await this.handleInputDate();
    console.log(calendar);
  }

  async handleInputDate() {
    while (true) {
      const input = await InputView.read(INPUT_MESSAGE.date);
      const isValidate = ErrorHandler.handle(() => new Calendar(input));

      if (isValidate) return new Calendar(input);
    }
  }
}

export default EventController;
