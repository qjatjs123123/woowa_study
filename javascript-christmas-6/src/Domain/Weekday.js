import { SALE } from '../Util/Constants.js';
import { EVENT_MESSAGE } from '../Util/Message.js';

class Weekday {
  static discount(calendar, userDTO) {
    if (calendar.isWeekday()) {
      const discount = userDTO.getDessertCount() * SALE.discount;
      return [discount, EVENT_MESSAGE.weekday(discount)];
    }
    return 0;
  }
}

export default Weekday;
