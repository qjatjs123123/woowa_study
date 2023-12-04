import InputView from '../View/InputView.js';
import { INPUT_MESSAGE } from '../Util/Message.js';

class LottoController {
  async inputPurchaseAmount() {
    const purchaseAmount = await InputView.printInputMessage(INPUT_MESSAGE.purchaseAmount);
  }

  async start() {
    const purchaseAmount = await this.inputPurchaseAmount();
  }
}

export default LottoController;
