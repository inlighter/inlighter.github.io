/*
 * Represents a state in the game
 * @param old [State]: old state to intialize the new state
 */
var aiPlayer;
var globalGame;

var State = function(old) {

  this.turn = "";

  this.oMovesCount = 0;

  this.result = "still running";

  this.board = [];

  if (typeof old !== "undefined") {

    var lenOld = old.board.length;
    while (lenOld--) {
      this.board[lenOld] = old.board[lenOld];
    }

    this.oMovesCount = old.oMovesCount;
    this.result = old.result;
    this.turn = old.turn;
  }

  this.advanceTurn = function() {
    this.turn = (this.turn === "X") ? "O" : "X";
  }

  this.emptyCells = function() {
    var indxs = [];
    for (var i = 0; i < 9; i++) {
      if (this.board[i] === "E") {
        indxs.push(i);
      }
    }
    return indxs;
  }

  this.isTerminal = function() {
    var B = this.board;

    //check rows
    for (var i = 0; i <= 6; i = i + 3) {
      if (B[i] !== "E" && B[i] === B[i + 1] && B[i] == B[i + 2]) {
        this.result = B[i] + "-won"; //update the state result
        //return true;

        return [true, [i, i + 1, i + 2]];
      }
    }

    //check columns
    for (var i = 0; i <= 2; i++) {
      if (B[i] !== "E" && B[i] === B[i + 3] && B[i] === B[i + 6]) {
        this.result = B[i] + "-won"; //update the state result
        //return true;
        return [true, [i, i + 3, i + 6]];
      }
    }

    //check diagonals
    for (var i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
      if (B[i] !== "E" && B[i] == B[i + j] && B[i + j] === B[i + 2 * j]) {
        this.result = B[i] + "-won"; //update the state result
        //return true;
        return [true, [i, i + j, i + 2 * j]];
      }
    }

    var freeCells = this.emptyCells();
    if (freeCells.length == 0) {
      //the game is draw
      this.result = "Draw"; //update the state result
      return [true, undefined];
    } else {
      return [false, undefined];
    }
  };

};

/*
 * Constructs a game object to be played
 * @param autoPlayer [AIPlayer] : the AI player to be play the game with
 */
var Game = function(autoPlayer) {

  //public : initialize the ai player for this game
  this.ai = autoPlayer;

  // public : initialize the game current state to empty board configuration
  this.currentState = new State();

  //"E" stands for empty board cell
  this.currentState.board = ["E", "E", "E",
    "E", "E", "E",
    "E", "E", "E"
  ];

  this.currentState.turn = 'X';
  //X plays first

  /*
   * initialize game status to beginning
   */
  this.status = "beginning";

  /*
   * public function that advances the game to a new state
   * @param _state [State]: the new state to advance the game to
   */
  this.advanceTo = function(_state) {

    this.currentState = _state;
    var terminalVal = _state.isTerminal()[0];

    if (terminalVal) {
      this.status = "ended";
      var winner = _state.result.charAt(0);
      var terminalIndxs = _state.isTerminal()[1];
      console.log(winner);
      console.log(ttt.picked);

      if (winner === ttt.picked) {
        //
        ttt.strikeThrough(winner, terminalIndxs);
        ttt.title = "You won!";
        setTimeout(ttt.popup, 500);
      } else if (winner === 'D') {
        //it's a draw
        ttt.title = _state.result;
        setTimeout(ttt.popup, 500);

      } else { //it's a draw
        ttt.strikeThrough(winner, terminalIndxs);
        ttt.title = "Computer won!";
        setTimeout(ttt.popup, 500);
      }

    } else {
      //the game is still running

      if (this.currentState.turn === ttt.picked) {
        //ttt.title = "It's your turn...";

        if (ttt.adviceMode) {
          this.ai.takeAdvice(ttt.picked);
        }
      } else if (this.currentState.turn) {
        ttt.title = '';

        //notify the AI player its turn has come up
        //
        if (ttt.picked === 'X') {
          this.ai.notify("O");
        } else {
          this.ai.notify("X");
        }
      }
    }
  };

  this.start = function() {

    if (this.status === "beginning" || this.status === "ended") {
      //invoke advanceTo with the initial state

      this.advanceTo(this.currentState);
      this.status = "running";
    }
  }

};

/*
 * public static function that calculates the score of the x player in a given terminal state
 * @param _state [State]: the state in which the score is calculated
 * @return [Number]: the score calculated for the human player
 */
Game.score = function(_state) {
  if (_state.result === "X-won") {
    // the x player won
    return 10 - _state.oMovesCount;
  } else if (_state.result === "O-won") {
    //the x player lost
    return -10 + _state.oMovesCount;
  } else {
    //it's a draw
    return 0;
  }
}