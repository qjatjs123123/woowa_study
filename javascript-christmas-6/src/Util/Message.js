const OUTPUT_MESSAGE = Object.freeze({
  start: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  event: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
  order: '<주문 메뉴>',
  totalAmount: '<할인 전 총주문 금액>',
  free: '<증정 메뉴>',
  nothing: '없음\n',
  comma: (amount) => `${amount.toLocaleString()}원\n`,
  eventList: '<혜택 내역>',
  profit: '<총혜택 금액>',
  expectAmount: '<할인 후 예상 결제 금액>',
  eventbadge: '<12월 이벤트 배지>',
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
  weekday: (discount) => `평일 할인: -${discount.toLocaleString()}원`,
  weekend: (discount) => `주말 할인: -${discount.toLocaleString()}원`,
  special: (discount) => `특별 할인: -${discount.toLocaleString()}원`,
  free: (discount) => `증정 이벤트: -${discount.toLocaleString()}원`,
  freeItem: (name, count) => `${name} ${count}개\n`,
});

export { OUTPUT_MESSAGE, INPUT_MESSAGE, ERROR_MESSAGE, EVENT_MESSAGE };
