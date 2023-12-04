import CONSTANTS from '../Util/Constants.js';

const totalCount = CONSTANTS.lottoCount * 2;
const mapper = {
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'bonus',
};

const price = {
  3: 5000,
  4: 50000,
  5: 1500000,
  7: 30000000,
  6: 2000000000,
};

class LottoMachine {
  #winningNumber;
  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
  }

  compareLotto(userLotto) {
    const result = { three: 0, four: 0, five: 0, six: 0, bonus: 0, profit: 0 };

    userLotto.getUserLotto().forEach((lotto) => {
      let matchCount = totalCount - new Set([...this.#winningNumber, ...lotto]).size;
      if (matchCount < 3) return;
      if (matchCount === 5 && lotto.includes(this.#bonusNumber)) matchCount = 7;
      result[mapper[matchCount]] += 1;
      result.profit += price[matchCount];
    });
    result.profit = ((result.profit / userLotto.purchaseAmount) * 100).toFixed(1);
    return result;
  }
}
export default LottoMachine;
