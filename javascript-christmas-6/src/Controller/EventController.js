import OutputView from '../View/OutputView.js';
import { OUTPUT_MESSAGE } from '../Util/Message.js';

class EventController {
  start() {
    OutputView.print(OUTPUT_MESSAGE.start);
  }
}

export default EventController;
