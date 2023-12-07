import REGEX from '../Util/Regex.js';
import { ERROR_MESSAGE } from '../Util/Message.js';

class Calendar {
  #date;

  constructor(date) {
    this.#date = this.#validate(date);
  }

  #validate(date) {
    const regex = REGEX.date;
    if (!regex.test(date)) throw new Error(ERROR_MESSAGE.date);
  }
}

export default Calendar;
