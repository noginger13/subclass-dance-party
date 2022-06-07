var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="dancer BlinkyDancer"><img src="Pics of dancer/johnny.jpeg" width="100" height="100"></span>');
  var oldStep = this.step;
  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };
  this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
  this.setPosition(top, left);

};

BlinkyDancer.prototpye = Object.create(Dancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

