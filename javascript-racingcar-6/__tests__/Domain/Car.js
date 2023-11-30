import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../../src/Domain/Car';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Car 도메인 검사', () => {
  describe('4이상은 부터는 차가 움직일 수 있다.', () => {
    // given
    const car = new Car('pobi');
    const testCases = [
      { input: [4], expected: 'pobi : -' },
      { input: [5], expected: 'pobi : --' },
      { input: [9], expected: 'pobi : ---' },
    ];

    test.each(testCases)('$input를 입력한 경우 $expected가 되어야 한다.', ({ input, expected }) => {
      // when
      car.decideMoveOrStop();
      mockRandoms([...input]);
      const result = car.roundResult();

      // then
      expect(result).toBe(expected);
    });
  });

  describe('3이하은 부터는 차가 움직일 수 없다.', () => {
    // given
    const car = new Car('pobi');
    const testCases = [
      { input: [4], expected: 'pobi : -' },
      { input: [3], expected: 'pobi : -' },
      { input: [3], expected: 'pobi : -' },
    ];

    test.each(testCases)('$input를 입력한 경우 $expected가 되어야 한다.', ({ input, expected }) => {
      // when
      mockRandoms([...input]);
      car.decideMoveOrStop();
      const result = car.roundResult();
      // then
      expect(result).toBe(expected);
    });
  });
  
});
