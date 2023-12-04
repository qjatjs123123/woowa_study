import OutputView from '../View/OutputView.js';

class ErrorHandler {
  static handle(data, validateFunc, winningLotto) {
    try {
      validateFunc(data, winningLotto);
      return true;
    } catch (error) {
      OutputView.printOutputMessage(error.message);
      return false;
    }
  }
}

export default ErrorHandler;
