import { Console } from '@woowacourse/mission-utils';

class InputView {
  static async printInputMessage(message) {
    const data = await Console.readLineAsync(message);
    return data;
  }
}

export default InputView;
