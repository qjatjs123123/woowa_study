import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import ErrorHandler from '../Util/ErrorHandler.js';
import Validation from '../Util/Validation.js';
import UserLotto from '../Domain/UserLotto.js';
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from '../Util/Message.js';

class LottoController {
  #outputPurchaseAmount(userLotto, purchaseAmount) {
    const userLottoList = userLotto.getUserLotto();
    OutputView.printOutputMessage(OUTPUT_MESSAGE.purchaseAmount(purchaseAmount));
    userLottoList.forEach((lotto) => OutputView.printOutputMessage(OUTPUT_MESSAGE.lotto(lotto)));
  }

  #inputPurchaseAmount = async () => {
    let amount = 0;
    while (true) {
      amount = await InputView.printInputMessage(INPUT_MESSAGE.purchaseAmount);
      if (ErrorHandler.handle(amount, Validation.purchaseAmount)) break;
    }
    return Number(amount);
  };

  async start() {
    const purchaseAmount = await this.#inputPurchaseAmount();
    console.log(purchaseAmount);
    const userLotto = new UserLotto(purchaseAmount);
    this.#outputPurchaseAmount(userLotto, purchaseAmount);
  }
}

export default LottoController;
