import CONSTANTS from './Constants.js';

const INPUT_MESSAGE = Object.freeze({
  carNameStr: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${CONSTANTS.carNameSeparator}) 기준으로 구분)\n`,
});

const ERROR_MESSAGE = Object.freeze({
  carNameDuplicate: '[ERROR] 자동차 이름은 중복되면 안 됩니다.',
  carOne: '[ERROR] 자동차 이름은 최소 2개 이상 입력하셔야 합니다.',
});

export { INPUT_MESSAGE, ERROR_MESSAGE };
