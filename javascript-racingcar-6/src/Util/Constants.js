const CONSTANTS = Object({
  carNameSeparator: ',',
  winnerNameSeparator: ', ',
  carMoveChar: '-',
  carNameMaxLength: 5,
  randomMin: 0,
  randomMax: 9,
  moveNumber: 4,
});

const REGEX = Object({
  gameCount: /^\d+$/,
});

export { CONSTANTS, REGEX };
