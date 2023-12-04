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
  const userLotto = new UserLotto(8000);
  let lottoMachine = new LottoMachine([1,2,3,4,5,6], 7)
  let result = lottoMachine.compareLotto(userLotto);
  test('수익률은 62.5여야 한다.', () => {
    // when
    expect(result.profit).toBe('62.5');
  });

  test('3개 일치 개수는 1개여야 한다.', () => {
    // when
    expect(result.three).toBe(1);
  });
});

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
  const userLotto = new UserLotto(8000);
  let lottoMachine = new LottoMachine([8, 21, 23, 41, 42, 43], 7)
  let result = lottoMachine.compareLotto(userLotto);

  test('6개 일치 개수는 1개여야 한다.', () => {
    // when
    expect(result.six).toBe(1);
  });

  test('수익률', () => {
    // when
    expect(result.profit).toBe('25000062.5');
  });
  
});
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
  const userLotto = new UserLotto(8000);
  let lottoMachine = new LottoMachine([8, 21, 23, 41, 42, 40], 43)
  let result = lottoMachine.compareLotto(userLotto);

  test('보너스개 일치 개수는 1개여야 한다.', () => {
    // when
    expect(result.bonus).toBe(1);
  });
  test('3 일치 개수는 1개여야 한다.', () => {
    // when
    expect(result.three).toBe(1);
  });
  test('3 일치 개수는 1개여야 한다.', () => {
    // when
    expect(result.four).toBe(0);
  });

  test('수익률', () => {
    // when
    expect(result.profit).toBe('375062.5');
  });

});