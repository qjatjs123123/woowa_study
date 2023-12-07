import OutputView from '../View/OutputView.js';
import Calendar from '../Domain/Calendar.js';
import { OUTPUT_MESSAGE, INPUT_MESSAGE, EVENT_MESSAGE } from '../Util/Message.js';
import { EVENT } from '../Util/Constants.js';
import InputView from '../View/InputView.js';
import ErrorHandler from '../Util/ErrorHandler.js';
import UserDTO from '../Domain/UserDTO.js';
import ChristmasDday from '../Domain/ChristmasDday.js';
import Weekday from '../Domain/Weekday.js';
import Special from '../Domain/Special.js';
import Free from '../Domain/Free.js';
import Weekend from '../Domain/Weekend.js';
import EventBadge from '../Domain/EventBadge.js';

class EventController {
  async start() {
    OutputView.print(OUTPUT_MESSAGE.start);
    const calendar = await this.handleInputDate();
    const userDTO = await this.handleInputMenu();
    OutputView.print(OUTPUT_MESSAGE.event(calendar.date));

    this.handlePrintOrder(userDTO);
    this.handlePrintTotalAmount(userDTO);
    this.handlePrintFree(userDTO);

    const [eventList, profit] = this.handleEventDiscount(calendar, userDTO);
    this.handlePrintEventList(eventList);
    this.handlePrintProfit(profit);
    this.handleExpectAmount(userDTO, profit);
    this.handlePrintBadge(profit);
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

  handlePrintFree(userDTO) {
    const result = Free.event(userDTO);
    OutputView.print(OUTPUT_MESSAGE.free);
    if (result === 0) OutputView.print(OUTPUT_MESSAGE.nothing);
    else OutputView.print(EVENT_MESSAGE.freeItem(EVENT.freeItem[0], EVENT.freeItem[2]));
  }

  handleExpectAmount(userDTO, profit) {
    const result = Free.event(userDTO);
    let expectAmount = userDTO.getTotalAmount() - profit;
    if (result !== 0) expectAmount += EVENT.freeItem[1];
    OutputView.print(OUTPUT_MESSAGE.expectAmount);
    OutputView.print(OUTPUT_MESSAGE.comma(expectAmount));
  }

  handlePrintOrder(userDTO) {
    OutputView.print(OUTPUT_MESSAGE.order);
    OutputView.print(userDTO.getOrderMenu());
  }

  handlePrintBadge(profit) {
    OutputView.print(OUTPUT_MESSAGE.eventbadge);
    OutputView.print(EventBadge.event(profit));
  }

  handlePrintTotalAmount(userDTO) {
    OutputView.print(OUTPUT_MESSAGE.totalAmount);
    OutputView.print(OUTPUT_MESSAGE.comma(userDTO.getTotalAmount()));
  }

  handlePrintProfit(profit) {
    OutputView.print(OUTPUT_MESSAGE.profit);
    if (profit === 0) OutputView.print(OUTPUT_MESSAGE.nothing);
    else OutputView.print(`-${OUTPUT_MESSAGE.comma(profit)}`);
  }

  handleEventDiscount(calendar, userDTO) {
    const discountList = [];
    let discountTotal = 0;

    const applyDiscount = (result) => {
      if (result !== 0) {
        discountTotal += result[0];
        discountList.push(result[1]);
      }
    };
    applyDiscount(ChristmasDday.discount(calendar));
    applyDiscount(Weekday.discount(calendar, userDTO));
    applyDiscount(Weekend.discount(calendar, userDTO));
    applyDiscount(Special.discount(calendar));
    applyDiscount(Free.event(userDTO));
    return [discountList, discountTotal];
  }

  handlePrintEventList(eventList) {
    OutputView.print(OUTPUT_MESSAGE.eventList);
    if (eventList.length !== 0) {
      eventList.forEach((event) => OutputView.print(event));
      OutputView.print('');
    } else OutputView.print(OUTPUT_MESSAGE.nothing);
  }
}

export default EventController;
