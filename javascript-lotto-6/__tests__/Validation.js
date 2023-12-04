import { ERROR_MESSAGE } from '../src/Util/Message';
import Validation from '../src/Util/Validation';

describe('유효성 검사 테스트,', () => {
  describe('구입 금액 유효성 검사 테스트', () => {
    // given
    const testCases = [
      { input: '', expected: ERROR_MESSAGE.purchaseAmount },
      { input: 'a', expected: ERROR_MESSAGE.purchaseAmount },
      { input: '100a', expected: ERROR_MESSAGE.purchaseAmount },
      { input: '1100', expected: ERROR_MESSAGE.purchaseAmount },
      { input: '112', expected: ERROR_MESSAGE.purchaseAmount },
      { input: '-1000', expected: ERROR_MESSAGE.purchaseAmount },
    ];
    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', async ({ input, expected }) => {
      // when
      const result = () => Validation.purchaseAmount(input);

      // then
      expect(result).toThrow(expected);
    });
  });

  describe('당첨번호 유효성 검사 테스트', () => {
    // given
    const testCases = [
      { input: '1,2,3,4,5,5', expected: ERROR_MESSAGE.lottoError },
      { input: '-1,2,3,4,5,6', expected: ERROR_MESSAGE.lottoError },
      { input: '1,2,3,4,5', expected: ERROR_MESSAGE.lottoError },
      { input: '1,2,3,4,5,6,7', expected: ERROR_MESSAGE.lottoError },
      { input: '0,1,2,3,4,5', expected: ERROR_MESSAGE.lottoError },
      { input: '1,2,3,4,5,46', expected: ERROR_MESSAGE.lottoError },
    ];
    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', async ({ input, expected }) => {
      // when
      const result = () => Validation.winningNumber(input);

      // then
      expect(result).toThrow(expected);
    });
  });

  describe('보너스 번호 유효성 검사', () => {
    // given
    const testCases = [
      { input: '', expected: ERROR_MESSAGE.bonusError },
      { input: 'a', expected: ERROR_MESSAGE.bonusError },
      { input: '-5', expected: ERROR_MESSAGE.bonusError },
      { input: '0', expected: ERROR_MESSAGE.bonusError },
      { input: '46', expected: ERROR_MESSAGE.bonusError },
      { input: '5', expected: ERROR_MESSAGE.bonusError },
      { input: '6', expected: ERROR_MESSAGE.bonusError },
    ];
    test.each(testCases)('$input를 입력한 경우 에러를 발생한다.', async ({ input, expected }) => {
      // when
      const winningNumber = [1, 2, 3, 4, 5, 6];
      const result = () => Validation.bonusNumber(input, winningNumber);

      // then
      expect(result).toThrow(expected);
    });
  });
});
