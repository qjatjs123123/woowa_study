import { MENU, CATEGORY } from '../Util/Menu.js';
import { ERROR_MESSAGE } from '../Util/Message.js';

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
    this.#isMenuInclude();
  }

  #isMenuInclude() {
    const result = this.#userMenu.some(
      ([menuName]) => CATEGORY.some((category) => menuName in MENU[category]) === false,
    );

    if (result) throw new Error(ERROR_MESSAGE.menu);
  }
}

export default UserDTO;
