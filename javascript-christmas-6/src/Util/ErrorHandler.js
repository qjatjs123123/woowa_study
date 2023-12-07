import OutputView from '../View/OutputView.js';

const ErrorHandler = {
  handle(validateFunc) {
    try {
      validateFunc();
      return true;
    } catch (error) {
      OutputView.print(error.message);
      return false;
    }
  },
};

export default ErrorHandler;
