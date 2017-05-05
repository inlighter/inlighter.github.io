var AI = function() {
  var game = {};

  function minimaxValue(state) {
    var terminalVal = state.isTerminal()[0];
    if (terminalVal) {
      return Game.score(state);
    } else {
      var stateScore;

      if (state.turn === 'X') {
        stateScore = -1000;
      } else {
        stateScore = 1000;
      }

      var availablePositions = state.emptyCells();
      var availableNextStates = availablePositions.map(function(pos) {
        var action = new AIAction(pos);
        var nextState = action.applyTo(state);
        return nextState;
      });

      availableNextStates.forEach(function(nextState) {
        var nextScore = minimaxValue(nextState);
        if (state.turn === 'X') {
          if (nextScore > stateScore) {
            stateScore = nextScore;
          }
        } else {
          if (nextScore < stateScore) {
            stateScore = nextScore;
          }
        }
      });

      return stateScore;
    }
  }

  function takeMove(turn) {
    var action;
    var bestActions;
    var available = game.currentState.emptyCells();
    if (available.length === 9 && turn === 'X') {

      bestActions = available.map(function(pos) {
        action = new AIAction(pos);
        return action;
      });
    } else {

      var availableActions = available.map(function(pos) {
        action = new AIAction(pos);
        var next = action.applyTo(game.currentState);

        action.minimaxVal = minimaxValue(next);
        return action;
      });

      if (turn === 'X') {
        availableActions.sort(AIAction.DESCENDING);
      } else {
        availableActions.sort(AIAction.ASCENDING);
      }

      var bestAction = availableActions[0];
      bestActions = availableActions.filter(function(value) {
        return value.minimaxVal === bestAction.minimaxVal;
      });
    }

    var randomIndx = Math.floor(Math.random() * bestActions.length);
    var chosenAction = bestActions[randomIndx];
    var next = chosenAction.applyTo(game.currentState);
    ttt.cells[chosenAction.movePosition].className += ' ocupied';
    if (turn === 'X') {
      ttt.cells[chosenAction.movePosition].text = '&#10005;';
    } else {
      ttt.cells[chosenAction.movePosition].className += ' o-color';
      ttt.cells[chosenAction.movePosition].text = '<i class="fa fa-circle-o" area-hidden="true"></i>'
    }

    game.advanceTo(next);
  }

  this.takeAdvice = function(turn) {
    var action;
    var bestActions;
    var available = game.currentState.emptyCells();
    if (available.length === 9 && turn === 'X') {
      bestActions = available.map(function(pos) {
        action = new AIAction(pos);
        return action;
      });
    } else {

      var availableActions = available.map(function(pos) {
        action = new AIAction(pos);
        var next = action.applyTo(game.currentState);

        action.minimaxVal = minimaxValue(next);
        return action;
      });

      if (turn === 'X') {
        availableActions.sort(AIAction.DESCENDING);
      } else {
        availableActions.sort(AIAction.ASCENDING);
      }

      var bestAction = availableActions[0];
      bestActions = availableActions.filter(function(value) {
        return value.minimaxVal === bestAction.minimaxVal;
      });
    }

    var bestMoves = [];
    for (var i = 0; i < bestActions.length; i++) {
      bestMoves.push(bestActions[i].movePosition);
    }

    ttt.toggleAdvice(bestMoves);

  }

  this.plays = function(_game) {
    game = _game;
  };

  this.notify = function(turn) {

    setTimeout(function() {
      takeMove(turn);
    }, 500);

  }

}

var AIAction = function(pos) {
  this.movePosition = pos;
  this.minimaxVal = 0;

  this.applyTo = function(state) {
    var next = new State(state);
    next.board[this.movePosition] = state.turn;

    if (state.turn === 'O') {
      next.oMovesCount++;
    }

    next.advanceTurn();
    return next;
  }
};

AIAction.ASCENDING = function(firstAction, secondAction) {
  return firstAction.minimaxVal - secondAction.minimaxVal;
}

AIAction.DESCENDING = function(firstAction, secondAction) {
  return secondAction.minimaxVal - firstAction.minimaxVal;
}