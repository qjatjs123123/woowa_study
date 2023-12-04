import RandomNumberGenerator from '../Util/RandomNumberGenerator.js';
import Lotto from '../Lotto.js';

class UserLotto {
  #purchaseAmount;
  #userLotto;

  constructor(purchaseAmount) {
    this.#purchaseAmount = purchaseAmount;
    this.#userLotto = [];
    this.#lottoPurchase();
  }

  #lottoPurchase() {
    for (let count = 0; count < Number(this.#purchaseAmount / 1000); count += 1)
      this.#userLotto.push(new Lotto(RandomNumberGenerator.generator()));
  }

  getUserLotto() {
    return this.#userLotto.map((lotto) => lotto.numbers);
  }

  get purchaseAmount() {
    return this.#purchaseAmount;
  }
}

export default UserLotto;
