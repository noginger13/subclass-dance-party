// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  this.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), timeBetweenSteps);

  };
  this.step();
  // now that we have defined the this object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var randomColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    var styleSettings = {
      top: top,
      left: left,
      'border-color': randomColor

    };
    this.lineUp = function() {
      var styleSettings = {
        left: 0
      };
      this.$node.css(styleSettings);
    };

    this.interact = function(left) {
      var styleSettings = {
        left: left
      };
      this.$node.css(styleSettings);
    };

    this.$node.css(styleSettings);
  };
  this.setPosition(top, left);

};

