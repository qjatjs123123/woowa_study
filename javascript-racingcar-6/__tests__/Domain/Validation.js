import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../../src/Util/Message';
import App from '../../src/App';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('유효성 검사 테스트', () => {
  describe('자동차는 2개 이상 입력하여야 한다.', () => {
    // given
    const testCases = [
      { input: ['pobi'], expected: ERROR_MESSAGE.carOne },
      { input: [''], expected: ERROR_MESSAGE.carOne },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', async ({ input, expected }) => {
      // given
      mockQuestions(input);

      // when
      const app = new App();

      // then
      await expect(() => app.play()).rejects.toThrow(expected);
    });
  });

  describe('자동차이름은 중복 검사', () => {
    // given
    const testCases = [
      { input: ['pobi,pobi,jun'], expected: ERROR_MESSAGE.carNameDuplicate },
      { input: ['pobi,pobi1,jun,jun'], expected: ERROR_MESSAGE.carNameDuplicate },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', async ({ input, expected }) => {
      // given
      mockQuestions(input);

      // when
      const app = new App();

      // then
      await expect(() => app.play()).rejects.toThrow(expected);
    });
  });

  describe('자동차이름은 공백이면 안된다.', () => {
    // given
    const testCases = [
      { input: ['pobi,jun,'], expected: ERROR_MESSAGE.carNameEmpty },
      { input: ['pobi,,jun'], expected: ERROR_MESSAGE.carNameEmpty },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', async ({ input, expected }) => {
      // given
      mockQuestions(input);

      // when
      const app = new App();

      // then
      await expect(() => app.play()).rejects.toThrow(expected);
    });
  });

  describe('자동차이름은 1이상 5이하여야 한다.', () => {
    // given
    const testCases = [
      { input: ['pobiq2,pobi,jun'], expected: ERROR_MESSAGE.carNameLength },
      { input: ['pobi  ,j,jun'], expected: ERROR_MESSAGE.carNameLength },
      { input: ['pobi  ,j,jun'], expected: ERROR_MESSAGE.carNameLength },
      { input: ['po  bi,j,jun'], expected: ERROR_MESSAGE.carNameLength },
      { input: ['pobi_!,j,jun'], expected: ERROR_MESSAGE.carNameLength },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', async ({ input, expected }) => {
      // given
      mockQuestions(input);

      // when
      const app = new App();

      // then
      await expect(() => app.play()).rejects.toThrow(expected);
    });
  });

  describe('시도 횟수는 0이상 숫자여야 한다.', () => {
    // given
    const testCases = [
      { input: ['pobiq,pobi', '-1'], expected: ERROR_MESSAGE.gameCount },
      { input: ['pobiq,pobi', 'a'], expected: ERROR_MESSAGE.gameCount },
      { input: ['pobiq,pobi', ''], expected: ERROR_MESSAGE.gameCount },
      { input: ['pobiq,pobi', '1!'], expected: ERROR_MESSAGE.gameCount },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', async ({ input, expected }) => {
      // given
      mockQuestions(input);

      // when
      const app = new App();

      // then
      await expect(() => app.play()).rejects.toThrow(expected);
    });
  });

  describe('정상적으로 입력할 경우 에러가 발생하지 않는다.', () => {
    // given
    const testCases = [
      { input: ['pobiq,pobi', '1'], expected: ERROR_MESSAGE.gameCount },
      { input: ['pobiq,pobi', '2'], expected: ERROR_MESSAGE.gameCount },
      { input: ['pobiq,pobi', '3'], expected: ERROR_MESSAGE.gameCount },
      { input: ['pobiq,pobi', '4'], expected: ERROR_MESSAGE.gameCount },
    ];

    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', async ({ input, expected }) => {
      // given
      mockQuestions(input);

      // when
      const app = new App();

      // then
      await expect(() => app.play()).not.toThrow(expected);
    });
  });
});
