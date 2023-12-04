import OutputView from '../View/OutputView.js';

class ErrorHandler {
  static handle(data, validateFunc) {
    try {
      validateFunc(data);
      return true;
    } catch (error) {
      OutputView.printOutputMessage(error.message);
      return false;
    }
  }
}

export default ErrorHandler;
