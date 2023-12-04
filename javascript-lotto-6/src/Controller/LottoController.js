import InputView from '../View/InputView.js';
import ErrorHandler from '../Util/ErrorHandler.js';
import Validation from '../Util/Validation.js';
import { INPUT_MESSAGE } from '../Util/Message.js';

class LottoController {
  inputPurchaseAmount = async () => {
    const purchaseAmount = await InputView.printInputMessage(INPUT_MESSAGE.purchaseAmount);
    ErrorHandler.handle(purchaseAmount, Validation.purchaseAmount, this.inputPurchaseAmount);
  };

  async start() {
    const purchaseAmount = await this.inputPurchaseAmount();
  }
}

export default LottoController;
