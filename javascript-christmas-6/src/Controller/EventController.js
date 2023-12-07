import OutputView from '../View/OutputView.js';
import Calendar from '../Domain/Calendar.js';
import { OUTPUT_MESSAGE, INPUT_MESSAGE } from '../Util/Message.js';
import InputView from '../View/InputView.js';
import ErrorHandler from '../Util/ErrorHandler.js';
import UserDTO from '../Domain/UserDTO.js';

class EventController {
  async start() {
    OutputView.print(OUTPUT_MESSAGE.start);
    const calendar = await this.handleInputDate();
    const userDTO = await this.handleInputMenu();
    OutputView.print(OUTPUT_MESSAGE.event(calendar.date));
  }

  async handleInputDate() {
    while (true) {
      const input = await InputView.read(INPUT_MESSAGE.date);
      const isValidate = ErrorHandler.handle(() => new Calendar(input));

      if (isValidate) return new Calendar(input);
    }
  }

  async handleInputMenu() {
    while (true) {
      const menu = await InputView.read(INPUT_MESSAGE.menu);
      const isValidate = ErrorHandler.handle(() => new UserDTO(menu));

      if (isValidate) return new UserDTO(menu);
    }
  }
}

export default EventController;
