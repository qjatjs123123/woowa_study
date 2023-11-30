import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../../src/App';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('최종 우승자 테스트', () => {
  test('최종 우승자', async () => {
    // given
    const inputs = ["pobi,woni,jun", "1"];
    const outputs = ["pobi : -", "woni : -", "jun : -", "최종 우승자 : pobi, woni, jun"];
    const randoms = [4, 4, 4];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  
  test('최종 우승자', async () => {
    // given
    const inputs = ["pobi,woni,jun", "1"];
    const outputs = ["pobi : -", "woni : ", "jun : -", "최종 우승자 : pobi, jun"];
    const randoms = [4, 3, 4];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('최종 우승자', async () => {
    // given
    const inputs = ["pobi,woni,jun", "1"];
    const outputs = ["pobi : -", "woni : ", "jun : ", "최종 우승자 : pobi"];
    const randoms = [4, 3, 3];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
