import { MENU } from './Menu.js';

const CONSTANT = Object.freeze({
  menuLimitCnt: 20,
  freeLimitAmount: 120000,
  year: 2023,
  month: 12,
  star: [5000, '별'],
  tree: [10000, '트리'],
  santa: [20000, '산타'],
  nothing: '없음',
});

const SALE = Object.freeze({
  discount: 2023,
  special: 1000,
  dday: 100,
  base: 1000,
});

const EVENT = Object.freeze({
  Dday: 25,
  weekday: [0, 1, 2, 3, 4],
  weekend: [5, 6],
  special: [3, 10, 17, 24, 25, 31],
  freeItem: ['샴페인', MENU.drink.샴페인, 1],
});

export { CONSTANT, SALE, EVENT };
