import OutputView from '../View/OutputView.js';

class ErrorHandler {
  static async handle(data, validateFunc, callbackFunc) {
    try {
      validateFunc(data);
    } catch (error) {
      OutputView.printOutputMessage(error.message);
      await callbackFunc();
    }
  }
}

export default ErrorHandler;
