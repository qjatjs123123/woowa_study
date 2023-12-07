import { EVENT_MESSAGE } from '../Util/Message.js';
import { SALE } from '../Util/Constants.js';

class ChristmasDday {
  static discount(calendar) {
    if (calendar.isDday()) {
      const discount = SALE.base + (calendar.date - 1) * SALE.dday;
      return [discount, EVENT_MESSAGE.dday(discount)];
    }
    return 0;
  }
}

export default ChristmasDday;
