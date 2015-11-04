(function () {

var View = Hanoi.View = function(game, $el) {

  this.game = game;
  this.$el = $el;
  this.setupTowers();
  this.render();
}

Hanoi.View.prototype.setupTowers = function() {


  for (var tower = 1; tower < 4; tower++) {
    var $ul = $("<ul>").addClass("tower group").data("num", tower);
    for (var disc=1; disc < 4; disc++) {
      $("<li>").addClass("disc" + disc).appendTo($ul);
    }
    $ul.appendTo(this.$el);
  }

}

Hanoi.View.prototype.render = function () {
  // var towers = this.game.towers;
  var towers = [[3],[2,1],[]];

  for (var i = 0; i < 3; i++) {
    var $tower = $($("ul")[i]);
        $($tower.find("li")).removeClass();
    for (var j = 0; j < 3; j++) {
      if (j < towers[i].length) {
        $($($tower.find("li"))[2-j]).addClass("disc" + towers[i][j]);
      }
    }
  }

}

})();
