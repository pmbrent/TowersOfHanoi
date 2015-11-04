(function () {

var View = Hanoi.View = function(game, $el) {

  this.game = game;
  this.$el = $el;
  this.setupTowers();
  this.render();
  this.sourceTower;
  this.bindEvents();

}

Hanoi.View.prototype.bindEvents = function() {
  var that = this;
  $("ul").on("click", function(e) {
    that.clickTower($(e.currentTarget));
  })
}

Hanoi.View.prototype.clickTower = function(tower) {
  // debugger;
  if (this.sourceTower == undefined) {
   this.sourceTower = tower
 } else {
   if (this.game.move(this.sourceTower.data("num"), tower.data("num"))) {
     this.sourceTower = undefined;
   }
 }
 this.render();
}

Hanoi.View.prototype.setupTowers = function() {
  for (var tower = 0; tower < 3; tower++) {
    var $ul = $("<ul>").addClass("tower group").data("num", tower);
    for (var disc=1; disc < 4; disc++) {
      $("<li>").addClass("disc" + disc).appendTo($ul);
    }
    $ul.appendTo(this.$el);
  }

}

Hanoi.View.prototype.render = function () {
  var towers = this.game.towers;

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
