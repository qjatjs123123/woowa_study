import { SALE } from '../Util/Constants.js';
import { EVENT_MESSAGE } from '../Util/Message.js';

class Special {
  static discount(calendar) {
    if (calendar.isSpecial()) {
      return [SALE.special, EVENT_MESSAGE.special(SALE.special)];
    }
    return 0;
  }
}

export default Special;
