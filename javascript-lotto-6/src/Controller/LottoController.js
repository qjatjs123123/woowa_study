import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import ErrorHandler from '../Util/ErrorHandler.js';
import Validation from '../Util/Validation.js';
import UserLotto from '../Domain/UserLotto.js';
import LottoMachine from '../Domain/LottoMachine.js';
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from '../Util/Message.js';
import CONSTANTS from '../Util/Constants.js';

class LottoController {
  #outputPurchaseAmount(userLotto, purchaseAmount) {
    const userLottoList = userLotto.getUserLotto();
    OutputView.printOutputMessage(OUTPUT_MESSAGE.purchaseAmount(purchaseAmount));
    userLottoList.forEach((lotto) => OutputView.printOutputMessage(OUTPUT_MESSAGE.lotto(lotto)));
  }

  #outputLottoResult(lottoResult) {
    OutputView.printOutputMessage(OUTPUT_MESSAGE.lottoThree(lottoResult.three));
    OutputView.printOutputMessage(OUTPUT_MESSAGE.lottoFour(lottoResult.four));
    OutputView.printOutputMessage(OUTPUT_MESSAGE.lottoFive(lottoResult.five));
    OutputView.printOutputMessage(OUTPUT_MESSAGE.lottoBonus(lottoResult.bonus));
    OutputView.printOutputMessage(OUTPUT_MESSAGE.lottoSix(lottoResult.six));
    OutputView.printOutputMessage(OUTPUT_MESSAGE.lottoProfit(lottoResult.profit));
  }

  async #inputPurchaseAmount() {
    let amount = 0;
    while (true) {
      amount = await InputView.printInputMessage(INPUT_MESSAGE.purchaseAmount);
      if (ErrorHandler.handle(amount, Validation.purchaseAmount)) break;
    }
    return Number(amount);
  }

  async #inputWinningNumber() {
    let winningNumber = 0;
    while (true) {
      winningNumber = await InputView.printInputMessage(INPUT_MESSAGE.winningNumber);
      if (ErrorHandler.handle(winningNumber, Validation.winningNumber)) break;
    }
    return winningNumber.split(CONSTANTS.lottoSplitChar).map((lotto) => Number(lotto));
  }

  async #inputBonusNumber(winningNumber) {
    let bonusNumber = 0;
    while (true) {
      bonusNumber = await InputView.printInputMessage(INPUT_MESSAGE.bonusNumber);
      if (ErrorHandler.handle(bonusNumber, Validation.bonusNumber, winningNumber)) break;
    }
    return Number(bonusNumber);
  }

  async start() {
    const purchaseAmount = await this.#inputPurchaseAmount();
    const userLotto = new UserLotto(purchaseAmount);
    this.#outputPurchaseAmount(userLotto, purchaseAmount);
    const winningNumber = await this.#inputWinningNumber();
    const bonusNumber = await this.#inputBonusNumber(winningNumber);
    const lottoMachine = new LottoMachine(winningNumber, bonusNumber);
    const lottoResult = lottoMachine.compareLotto(userLotto);
    this.#outputLottoResult(lottoResult);
  }
}

export default LottoController;
