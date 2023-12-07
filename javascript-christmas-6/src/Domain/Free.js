import { CONSTANT, EVENT } from '../Util/Constants.js';
import { EVENT_MESSAGE } from '../Util/Message.js';

class Free {
  static event(userDTO) {
    const userTotalAmount = userDTO.getTotalAmount();
    if (userTotalAmount >= CONSTANT.freeLimitAmount) {
      return [EVENT.freeItem[1], EVENT_MESSAGE.free(EVENT.freeItem[1])];
    }
    return 0;
  }
}

export default Free;
