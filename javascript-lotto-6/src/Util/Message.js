import CONSTANTS from './Constants.js';

const INPUT_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  purchaseAmount: '[ERROR] 숫자가 잘못된 형식입니다.',
  lottoError: '[ERROR] 로또 번호가 잘못된 형식입니다.',
});

const OUTPUT_MESSAGE = Object.freeze({
  purchaseAmount: (purchaseAmount) =>
    `\n${Number(purchaseAmount / CONSTANTS.lottoPrice)}개를 구매했습니다.`,
});

export { INPUT_MESSAGE, ERROR_MESSAGE, OUTPUT_MESSAGE };
