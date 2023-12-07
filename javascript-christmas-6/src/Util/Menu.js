const MENU = Object.freeze({
  appetizer: Object.freeze({
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
  }),

  main: Object.freeze({
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
  }),

  dessert: Object.freeze({
    초코케이크: 15000,
    아이스크림: 5000,
  }),

  drink: Object.freeze({
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
  }),
});

const CATEGORY = Object.keys(MENU);

export { MENU, CATEGORY };
