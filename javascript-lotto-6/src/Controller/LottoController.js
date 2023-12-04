import InputView from '../View/InputView.js';
import ErrorHandler from '../Util/ErrorHandler.js';
import Validation from '../Util/Validation.js';
import UserLotto from '../Domain/UserLotto.js';
import { INPUT_MESSAGE } from '../Util/Message.js';

class LottoController {
  #inputPurchaseAmount = async () => {
    const purchaseAmount = await InputView.printInputMessage(INPUT_MESSAGE.purchaseAmount);
    await ErrorHandler.handle(purchaseAmount, Validation.purchaseAmount, this.#inputPurchaseAmount);
    return Number(purchaseAmount);
  };

  async start() {
    const purchaseAmount = await this.#inputPurchaseAmount();
    const userLotto = new UserLotto(purchaseAmount);
  }
}

export default LottoController;
