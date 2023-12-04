import { MissionUtils } from "@woowacourse/mission-utils";
import UserLotto from '../src/Domain/UserLotto';
import LottoMachine from "../src/Domain/LottoMachine";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 일치 테스트', () => {
  mockRandoms([
    [8, 21, 23, 41, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [7, 11, 16, 35, 36, 44],
    [1, 8, 11, 31, 41, 42],
    [13, 14, 16, 38, 42, 45],
    [7, 11, 30, 40, 42, 43],
    [2, 13, 22, 32, 38, 45],
    [1, 3, 5, 14, 22, 45],
  ]);
  test('테스트', () => {
    // given
    const userLotto = new UserLotto(8000);
    const lottoMachine = new LottoMachine([1,2,3,4,5,6], 7)
    const result = lottoMachine.compareLotto(userLotto);
    // when
    expect(result.profit).toBe('62.5');
    expect(result.three).toBe(1);
  });
});