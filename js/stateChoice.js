var StateChoice = {
  preload: function () {
    //Spritesheets for the 3 colored Gophers
    game.load.spritesheet("racerBlue", "assets/gopher-blue.png", 63, 60, 7);
    game.load.spritesheet("racerPink", "assets/gopher-pink.png", 63, 60, 7);
    game.load.spritesheet("racerPurple", "assets/gopher-purple.png", 63, 60, 7);

    //Add background


    //sample test button
    game.load.spritesheet("buttons", "assets/buttons-sprite.png", 111, 24, 4);

  },

  create: function () {
    //Blue Gopher
    this.racerBlue = game.add.sprite(game.world.centerX, game.world.centerY, "racerBlue");
    this.racerBlue.anchor.set(0.5, 0.5);
    this.racerBlue.animations.add("idle", [0, 1], 12, true);
    this.racerBlue.animations.play("idle");

    this.startBlue = game.add.button(game.world.centerX, game.world.centerY+50,
     "buttons", this.startBlue, this, 1, 0, 1);
    this.startBlue.anchor.set(0.5, 0.5);

    //Pink Gopher
    this.racerPink = game.add.sprite(game.world.centerX-150, game.world.centerY, "racerPink");
    this.racerPink.anchor.set(0.5, 0.5);
    this.racerPink.animations.add("idle", [0, 1], 12, true);
    this.racerPink.animations.play("idle");

    this.startPink = game.add.button(game.world.centerX-150, game.world.centerY+50,
     "buttons", this.startPink, this, 1, 0, 1);
    this.startPink.anchor.set(0.5, 0.5);

    //Purple Gopher
    this.racerPurple = game.add.sprite(game.world.centerX+150, game.world.centerY, "racerPurple");
    this.racerPurple.anchor.set(0.5, 0.5);
    this.racerPurple.animations.add("idle", [0, 1], 12, true);
    this.racerPurple.animations.play("idle");

    this.startPurple = game.add.button(game.world.centerX+150, game.world.centerY+50,
     "buttons", this.startPurple, this, 1, 0, 1);
    this.startPurple.anchor.set(0.5, 0.5);




    //Confirmation button
    this.startConfirm = game.add.button(game.world.centerX, game.world.height-50,
     "buttons", this.startConfirm, this, 1, 0, 1);
    this.startConfirm.anchor.set(0.5, 0.5);

    //Add "buttons" for choosing racer
    //Make "choose THIS racer" button
      //Erick plans to make a "power on" button
      //It should turn on color and play animations
      //Accessing one of the racer buttons should also "turn on" the confirm this racer button
      //and start the game
      //Due to similar functions in many of the buttons
      //Create a function that gets called within the button
        //Should turn on animation change the color, etc.
        //....OR put all of the color gophers in 1 spritesheet
        //Having so many is memory heavy and repeatative.

  },

  startBlue: function () {
    character = "blue";
    console.log(character);
  },

  startPink: function () {
    character = "pink";
    console.log(character);
  },

  startPurple: function () {
    character = "purple";
    console.log(character);
  },

  startConfirm: function () {
    game.state.start("StateMain");
  },

  //choose racer should call THAT color racer's function
  //Pass THAT "character" value to Confirm button
  //Maybe access object number that refers to the series of frames for THAT gopher

  //Should NOT e able to press confirmation button prior to choosing a racer
  //If unable to do that  -->
    //If "character" is empty show message --> "You haven't picked a racer!"

  update: function () {

  },


};
