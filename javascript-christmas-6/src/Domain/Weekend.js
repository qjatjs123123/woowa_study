import { SALE } from '../Util/Constants.js';
import { EVENT_MESSAGE } from '../Util/Message.js';

class Weekend {
  static discount(calendar, userDTO) {
    if (calendar.isWeekend()) {
      const discount = userDTO.getMainCount() * SALE.discount;
      if (discount === 0) return 0;
      return [discount, EVENT_MESSAGE.weekend(discount)];
    }
    return 0;
  }
}

export default Weekend;