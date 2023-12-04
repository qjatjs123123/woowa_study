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
    const purchaseAmount = await InputView.printInputMessage(INPUT_MESSAGE.purchaseAmount);
    await ErrorHandler.handle(purchaseAmount, Validation.purchaseAmount, this.#inputPurchaseAmount);
    return Number(purchaseAmount);
  };

  async start() {
    const purchaseAmount = await this.#inputPurchaseAmount();
    const userLotto = new UserLotto(purchaseAmount);
    this.#outputPurchaseAmount(userLotto, purchaseAmount);
  }
}

export default LottoController;
