import OutputView from '../View/OutputView.js';

class ErrorHandler {
  static handle(data, validateFunc, callbackFunc) {
    try {
      validateFunc(data);
    } catch (error) {
      OutputView.printOutputMessage(error.message);
      callbackFunc();
    }
  }
}

export default ErrorHandler;
