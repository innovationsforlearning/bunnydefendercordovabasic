BunnyDefender.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

BunnyDefender.Preloader.prototype = {

	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
        this.load.image('titlescreen', 'img/TitleBG.png');
        this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
        this.load.image('hill', 'img/hill.png');
        this.load.image('sky', 'img/sky.png');
        this.load.atlasXML('bunny', 'img/spritesheets/bunny.png', 'img/spritesheets/bunny.xml');
        this.load.atlasXML('spacerock', 'img/spritesheets/SpaceRock.png', 'img/spritesheets/SpaceRock.xml');
        this.load.image('explosion', 'img/explosion.png');
        this.load.image('ghost', 'img/ghost.png');
        this.load.audio('explosion_audio', 'audio/explosion.mp3');
        this.load.audio('hurt_audio', 'audio/hurt.mp3');
        this.load.audio('select_audio', 'audio/select.mp3');
        this.load.audio('game_audio', 'audio/bgm.mp3');
	},

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
    if (this.cache.isSoundDecoded('game_audio') && this.ready == false) {
        this.ready = true;
        this.state.start('StartMenu');
    };
	}
};
