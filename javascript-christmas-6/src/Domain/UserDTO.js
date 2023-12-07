import { MENU, CATEGORY } from '../Util/Menu.js';
import { ERROR_MESSAGE } from '../Util/Message.js';
import REGEX from '../Util/Regex.js';
import { CONSTANT } from '../Util/Constants.js';

class UserDTO {
  #userMenu;

  constructor(input) {
    this.#parse(input);
    this.#validate(input);
  }

  #parse(input) {
    this.#userMenu = input.split(',').map((menu) => {
      const menuList = menu.split('-');
      return [menuList[0], Number(menuList[1])];
    });
  }

  #validate() {
    this.#isMenuValidate();
    this.#isMenuInclude();
    this.#isMenuDuplicate();
    this.#isOnlyDrink();
    this.#isCountLimit();
  }

  #isMenuValidate() {
    const regex = REGEX.menu;
    const result = this.#userMenu.some((menu) => regex.test(menu.join('-')) === false);

    if (result) throw new Error(ERROR_MESSAGE.menu);
  }

  #isMenuInclude() {
    const result = this.#userMenu.some(
      ([menuName]) => CATEGORY.some((category) => menuName in MENU[category]) === false,
    );

    if (result) throw new Error(ERROR_MESSAGE.menu);
  }

  #isMenuDuplicate() {
    const menuList = this.#userMenu.map(([menuName]) => menuName);

    if (menuList.length !== new Set(menuList).size) throw new Error(ERROR_MESSAGE.menu);
  }

  #isOnlyDrink() {
    const result = this.#userMenu.some(([menuName]) => menuName in MENU.drink === false);
    if (!result) throw new Error(ERROR_MESSAGE.drink);
  }

  #isCountLimit() {
    // eslint-disable-next-line no-unused-vars
    const result = this.#userMenu.reduce((total, [_, menuCount]) => {
      return total + menuCount;
    }, 0);

    if (result > CONSTANT.menuLimitCnt) throw new Error(ERROR_MESSAGE.countLimit);
  }

  getOrderMenu() {
    let orderMenu = '';

    this.#userMenu.forEach(
      ([menuName, menuCount]) => (orderMenu += `${menuName} ${menuCount}개\n`),
    );
    return orderMenu;
  }

  getTotalAmount() {
    return this.#userMenu.reduce((totalAmount, [menuName, menuCount]) => {
      CATEGORY.forEach((category) => {
        if (menuName in MENU[category]) {
          // eslint-disable-next-line no-param-reassign
          totalAmount += MENU[category][menuName] * menuCount;
        }
      });
      return totalAmount;
    }, 0);
  }

  getDessertCount() {
    return this.#userMenu.reduce((totalCount, [menuName, menuCount]) => {
      if (menuName in MENU.dessert) {
        // eslint-disable-next-line no-param-reassign
        totalCount += menuCount;
      }
      return totalCount;
    }, 0);
  }

  getMainCount() {
    return this.#userMenu.reduce((totalCount, [menuName, menuCount]) => {
      if (menuName in MENU.main) {
        // eslint-disable-next-line no-param-reassign
        totalCount += menuCount;
      }
      return totalCount;
    }, 0);
  }
}

export default UserDTO;
