import { Console } from '@woowacourse/mission-utils';
import { OUPUT_MESSAGE } from '../Util/Message.js';

class OutputView {
  static printResultMessage() {
    Console.print(OUPUT_MESSAGE.resultMessage);
  }

  static printMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
