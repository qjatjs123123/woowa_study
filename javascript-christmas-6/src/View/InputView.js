import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async read(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },
};

export default InputView;
