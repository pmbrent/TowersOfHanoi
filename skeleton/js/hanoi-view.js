(function () {

var View = Hanoi.View = function(game, $el) {

  this.game = game;
  this.$el = $el;
  this.setupTowers();
}

Hanoi.View.prototype.setupTowers = function() {


  for (var tower = 1; tower < 4; tower++) {
    var $ul = $("<ul>").addClass("tower").data("num", tower);
    for (var disc=1; disc < 4; disc++) {
      $("<li>").addClass("disc" + disc).appendTo($ul);
    }
    $ul.appendTo(this.$el);
  }

}

Hanoi.View.prototype.render = function () {





}

})();
