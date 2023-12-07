import REGEX from '../Util/Regex.js';
import { ERROR_MESSAGE } from '../Util/Message.js';
import { EVENT } from '../Util/Constants.js';

class Calendar {
  #date;

  constructor(date) {
    this.#date = this.#validate(date);
  }

  #validate(date) {
    const regex = REGEX.date;
    if (!regex.test(date)) throw new Error(ERROR_MESSAGE.date);
    return Number(date);
  }

  isDday() {
    return EVENT.Dday >= this.#date;
  }

  get date() {
    return this.#date;
  }
}

export default Calendar;
