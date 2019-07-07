'use strict';

(function () {

  window.backend = {

    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      var URL = 'https://js.dump.academy/code-and-magick/data';

      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться' + xhr.timeout + 'мс');
      });

      xhr.open('GET', URL);

      xhr.send();
    },


    save: function (data, onLoad, onError) {
      var URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.addEventListener('error', function () {
        onError('Ошибка соединения');
      });

      xhr.open('POST', URL);
      xhr.send(data);
    }

  };
})();
