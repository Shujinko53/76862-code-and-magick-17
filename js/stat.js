'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_PADDING = 50;
  var CONTENT_X = CLOUD_PADDING + CLOUD_X;
  var COLUMN_HEIGHT = 150;
  var GAP = 10;
  var FONT_GAP = 15;
  var TEXT_WIDTH = 50;
  var BAR_WIDTH = 40;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var renderDiagramm = function (x, y, width, height, ctx) {

    ctx.fillRect(x, y, width, height);
  };

  var calculateDiagramm = function (times, maxTime, i) {
    var columnHeight = ((COLUMN_HEIGHT * times[i]) / maxTime);
    var x = CONTENT_X + (CLOUD_PADDING + BAR_WIDTH) * i;
    var y = COLUMN_HEIGHT - columnHeight + 20 * 2 + 50;
    var width = BAR_WIDTH;
    var height = columnHeight;

    return {
      x: x,
      y: y,
      width: width,
      height: height
    };
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, 1)';
        ctx.filter = 'saturate(' + Math.random() + ')';
      }

      var data = calculateDiagramm(times, maxTime, i);
      renderDiagramm(data.x, data.y, data.width, data.height, ctx);
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], (TEXT_WIDTH + GAP * 2) * 2 + (CLOUD_X * i), CLOUD_HEIGHT);
    }

    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, FONT_GAP * 2);
    ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, TEXT_WIDTH);

  };
})();
