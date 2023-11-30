import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Util/Message.js';

class InputView {
  static async inputcarNameStr() {
    const carNameStr = await Console.readLineAsync(INPUT_MESSAGE.carNameStr);
    return carNameStr;
  }

  static async inputgameCount() {
    const gameCount = await Console.readLineAsync(INPUT_MESSAGE.gameCount);
    return gameCount;
  }
}

export default InputView;
