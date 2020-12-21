const chessboard = {
	white: {
		queen: {
			location: [-Infinity, -Infinity],
			ableToMove: [],
		},
	},
	black: {
		queen: {
			location: [Infinity, Infinity],
			ableToMove: [],
		},
	},
	movePiece: function (side, piece, location) {},
	checkIfAbleToBeAttacked: function (side, piece) {},
	ableToMoveCalculations: {
		//Pawns
		forwardStart: function (location, side) {},
		forward: function (location, side) {},
		forwardDiagonalAttack: function (location, side) {},
		//Queen Rook
		frontBack: function (location) {},
		leftRight: function (location) {},
		//Queen Bishop
		diagonalLeft: function (location) {},
		diagonalRight: function (location) {},
		//Knight
		knight23: function (location) {},
		knight32: function (location) {},
		//King
		frontBackOne: function (location) {},
		leftRightOne: function (location) {},
		diagonalLeftOne: function (location) {},
		diagonalRightOne: function (location) {},
		//King Rook
		castling: function (location) {},
		//Pieces
		queen: function (location) {},
	},
}

//let whiteQueen = [0, 5]
//let blackQueen = [5, 0]
//let generatedBoard = generateBoard(whiteQueen, blackQueen)
//console.log(generatedBoard)
//console.log(queenThreat(generatedBoard))
