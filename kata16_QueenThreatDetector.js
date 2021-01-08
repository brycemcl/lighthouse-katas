const generateBoard = (whiteQueen, blackQueen) => {
  let boardToReturn = [];
  for (let row = 0; row < 8; row++) {
    boardToReturn.push([]);
    for (let column = 0; column < 8; column++) {
      if (whiteQueen[0] === row && whiteQueen[1] === column) {
        boardToReturn[row][column] = 1;
      } else if (blackQueen[0] === row && blackQueen[1] === column) {
        boardToReturn[row][column] = 1;
      } else {
        boardToReturn[row][column] = 0;
      }
    }
  }
  return boardToReturn;
};
const queenThreat = (generatedBoard) => {
  const queenPositions = calculateQueenPositions(generatedBoard);
  for (const threatenedSpot of queenAttack(queenPositions[0])) {
    if (
      threatenedSpot[0] === queenPositions[1][0] &&
			threatenedSpot[1] === queenPositions[1][1]
    ) {
      return true;
    }
  }
  return false;
};

const calculateQueenPositions = (generatedBoard) => {
  let queenPositions = [];
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if (generatedBoard[row][column] === 1) {
        queenPositions.push([row, column]);
      }
    }
  }
  return queenPositions;
};

const queenAttackDiagonal = (queenPosition) => {
  let arrayOfPlacesQueenCanAttack = [];
  let temporaryRow = queenPosition[0];
  let temporaryColumn = queenPosition[1];
  //There are four diagonal ways the queen can go
  //one while loop for each way
  //1
  temporaryRow = queenPosition[0] + 1;
  temporaryColumn = queenPosition[1] + 1;
  while (
    temporaryColumn > 0 &&
		temporaryColumn < 7 &&
		temporaryRow > 0 &&
		temporaryRow < 7
  ) {
    arrayOfPlacesQueenCanAttack.push([temporaryRow, temporaryColumn]);
    temporaryRow++; //row direction
    temporaryColumn++; //column direction
  }
  //next direction 2
  temporaryRow = queenPosition[0] + 1;
  temporaryColumn = queenPosition[1] - 1;
  while (
    temporaryColumn > 0 &&
		temporaryColumn < 7 &&
		temporaryRow > 0 &&
		temporaryRow < 7
  ) {
    arrayOfPlacesQueenCanAttack.push([temporaryRow, temporaryColumn]);
    temporaryRow++; //row direction
    temporaryColumn--; //column direction
  }
  //next direction 3
  temporaryRow = queenPosition[0] - 1;
  temporaryColumn = queenPosition[1] - 1;
  while (
    temporaryColumn > 0 &&
		temporaryColumn < 7 &&
		temporaryRow > 0 &&
		temporaryRow < 7
  ) {
    arrayOfPlacesQueenCanAttack.push([temporaryRow, temporaryColumn]);
    temporaryRow--; //row direction
    temporaryColumn--; //column direction
  }
  //next direction 4
  temporaryRow = queenPosition[0] - 1;
  temporaryColumn = queenPosition[1] + 1;
  while (
    temporaryColumn > 0 &&
		temporaryColumn < 7 &&
		temporaryRow > 0 &&
		temporaryRow < 7
  ) {
    arrayOfPlacesQueenCanAttack.push([temporaryRow, temporaryColumn]);
    temporaryRow--; //row direction
    temporaryColumn++; //column direction
  }
  return arrayOfPlacesQueenCanAttack;
};
const queenAttackFrontBack = (queenPosition) => {
  return [
    [0, queenPosition[1]],
    [1, queenPosition[1]],
    [2, queenPosition[1]],
    [3, queenPosition[1]],
    [4, queenPosition[1]],
    [5, queenPosition[1]],
    [6, queenPosition[1]],
    [7, queenPosition[1]],
  ];
};
const queenAttackLeftRight = (queenPosition) => {
  return [
    [queenPosition[1], 0],
    [queenPosition[1], 1],
    [queenPosition[1], 2],
    [queenPosition[1], 3],
    [queenPosition[1], 4],
    [queenPosition[1], 5],
    [queenPosition[1], 6],
    [queenPosition[1], 7],
  ];
};
const queenAttack = (queenPosition) => {
  return [].concat(
    queenAttackDiagonal(queenPosition),
    queenAttackFrontBack(queenPosition),
    queenAttackLeftRight(queenPosition)
  );
};
