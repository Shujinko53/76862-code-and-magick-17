var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 130, 30);
  ctx.fillText('Список результатов:', 130, 50);

  ctx.fillStyle = rgba(255, 0, 0, 1);
  ctx.fillText('Вы', 160, 70);
  ctx.fillRext(40, 150, 40, 150);
};

var names = ['Вы'];
var times = [2725];
