import OutputView from '../View/OutputView.js';
import Calendar from '../Domain/Calendar.js';
import { OUTPUT_MESSAGE, INPUT_MESSAGE } from '../Util/Message.js';
import InputView from '../View/InputView.js';
import ErrorHandler from '../Util/ErrorHandler.js';
import UserDTO from '../Domain/UserDTO.js';
import ChristmasDday from '../Domain/ChristmasDday.js';
import Weekday from '../Domain/Weekday.js';

class EventController {
  async start() {
    OutputView.print(OUTPUT_MESSAGE.start);
    const calendar = await this.handleInputDate();
    const userDTO = await this.handleInputMenu();
    OutputView.print(OUTPUT_MESSAGE.event(calendar.date));
    this.handlePrintOrder(userDTO);

    this.handleEventDiscount(calendar, userDTO);
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

  handlePrintOrder(userDTO) {
    OutputView.print(OUTPUT_MESSAGE.order);
    OutputView.print(userDTO.getOrderMenu());
  }

  handleEventDiscount(calendar, userDTO) {
    const discountList = [];
    let discountTotal = 0;

    const applyDiscount = (result) => {
      if (result[0] !== 0) {
        discountTotal += result[0];
        discountList.push(result[1]);
      }
    };

    applyDiscount(ChristmasDday.discount(calendar));
    applyDiscount(Weekday.discount(calendar, userDTO));

    console.log(discountList, discountTotal);
  }
}

export default EventController;
