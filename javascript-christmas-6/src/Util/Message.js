const OUTPUT_MESSAGE = Object.freeze({
  start: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  event: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
  order: '<주문 메뉴>',
});

const INPUT_MESSAGE = Object.freeze({
  date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  menu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

const ERROR_MESSAGE = Object.freeze({
  date: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  menu: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  drink: '[ERROR] 음료만 주문하셨습니다. 다시 입력해 주세요.',
  countLimit: '[ERROR] 20개 이상 넘게 입력하셨습니다. 다시 입력해 주세요.',
});

const EVENT_MESSAGE = Object.freeze({
  dday: (discount) => `크리스마스 디데이 할인: -${discount.toLocaleString()}원`,
});

export { OUTPUT_MESSAGE, INPUT_MESSAGE, ERROR_MESSAGE, EVENT_MESSAGE };
