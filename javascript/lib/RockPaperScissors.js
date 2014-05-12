PAIRS = {
	'rock' : {'beats': ['scissors', 'lizard']},
	'paper' : {'beats': ['rock', 'Spock']},
	'scissors' : {'beats':['paper', 'lizard']},
	'lizard' : {'beats' : ['paper', 'Spock']},
	'Spock' : {'beats' : ['rock', 'scissors']},
}

function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function() {
  if(this.player1.pick === this.player2.pick) {
  	return null;
  }
  else if(PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) === -1){
  	return this.player2;
  }

  else 
  	return this.player1;
};

