BunnyDefender.StartMenu = function(game) {
    this.startBG;
    this.startPrompt;
    this.ding;
}

BunnyDefender.StartMenu.prototype = {

	create: function () {
    this.ding = this.add.audio('select_audio');
		startBG = this.add.image(0, 0, 'titlescreen');
		startBG.inputEnabled = true;
    this.getLastScore();
		startBG.events.onInputDown.addOnce(this.startGame, this);

		startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, 'eightbitwonder', 'Touch to Start!', 24);
	},

	startGame: function (pointer) {
    this.ding.play();
		this.state.start('Game');
	},

  getLastScore: function() {
    $.ajax({
      type: 'GET',
      url: prod_api_url + '/api/v1/users/' + currentUser.id + '.json',
      // url: 'http://localhost:3000/api/v1/users/' + currentUser.id + '.json',
      crossDomain: true,
      data: {
        user: {
            id: currentUser.id,
            email: currentUser.email,
            authentication_token: currentUser.authentication_token
        },
      },
      dataType: 'json',
      success: function(responseData) {
            console.log(responseData);
            alert("Your last score was " + responseData.score);
      },
      error: function(responseData) {
        console.log(responseData);
        alert("There was a problem, please try again.");
      }
    });
  }
};
