import { CONSTANTS } from './Constants.js';

const INPUT_MESSAGE = Object.freeze({
  carNameStr: `경주할 자동차 이름을 입력하세요.(이름은 쉼표(${CONSTANTS.carNameSeparator}) 기준으로 구분)\n`,
  gameCount: '시도할 횟수는 몇 회인가요?\n',
});

const OUPUT_MESSAGE = Object.freeze({
  resultMessage: '\n실행 결과',
  roundResult: (carName, carMove) => `${carName} : ${CONSTANTS.carMoveChar.repeat(carMove)}`,
  winnerResult: (winnerList) => `최종 우승자 : ${winnerList.join(CONSTANTS.winnerNameSeparator)}`,
});

const ERROR_MESSAGE = Object.freeze({
  carNameDuplicate: '[ERROR] 자동차 이름은 중복되면 안 됩니다.',
  carOne: '[ERROR] 자동차 이름은 최소 2개 이상 입력하셔야 합니다.',
  carNameEmpty: '[ERROR] 자동차 이름은 공백이면 안 됩니다.',
  carNameLength: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  gameCount: '[ERROR] 숫자가 잘못된 형식입니다.',
});

export { INPUT_MESSAGE, ERROR_MESSAGE, OUPUT_MESSAGE };
