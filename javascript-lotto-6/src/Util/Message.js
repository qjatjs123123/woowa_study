import CONSTANTS from './Constants.js';

const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  winningNumber: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  purchaseAmount: '[ERROR] 숫자가 잘못된 형식입니다.',
  lottoError: '[ERROR] 로또 번호가 잘못된 형식입니다.',
  bonusError: '[ERROR] 보너스 번호가 잘못된 형식입니다.',
});

const OUTPUT_MESSAGE = Object.freeze({
  purchaseAmount: (purchaseAmount) =>
    `\n${Number(purchaseAmount / CONSTANTS.lottoPrice)}개를 구매했습니다.`,
  lotto: (lotto) => `[${lotto.join(', ')}]`,
  lottoThree: (result) => `3개 일치 (5,000원) - ${result}개`,
  lottoFour: (result) => `4개 일치 (50,000원) - ${result}개`,
  lottoFive: (result) => `5개 일치 (1,500,000원) - ${result}개`,
  lottoSix: (result) => `6개 일치 (2,000,000,000원) - ${result}개`,
  lottoBonus: (result) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result}개`,
});

export { INPUT_MESSAGE, ERROR_MESSAGE, OUTPUT_MESSAGE };
