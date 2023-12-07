import REGEX from '../Util/Regex.js';
import { ERROR_MESSAGE } from '../Util/Message.js';
import { EVENT, CONSTANT } from '../Util/Constants.js';

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

  isWeekday() {
    const day = new Date(`${CONSTANT.year}-${CONSTANT.month}-${this.#date}`);
    return EVENT.weekday.includes(day.getDay());
  }

  isWeekend() {
    const day = new Date(`${CONSTANT.year}-${CONSTANT.month}-${this.#date}`);
    return EVENT.weekend.includes(day.getDay());
  }

  isSpecial() {
    return EVENT.special.includes(this.#date);
  }

  get date() {
    return this.#date;
  }
}

export default Calendar;
