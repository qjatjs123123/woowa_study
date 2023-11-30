import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../Util/Message.js';

class InputView {
  static async inputCarNameList() {
    const carNameList = await Console.readLineAsync(INPUT_MESSAGE.carNameList);
    return carNameList;
  }
}

export default InputView;
