'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var dialogHandle = setup.querySelector('.upload');
  var modalOpen = document.querySelector('.setup-open');
  var modalClose = document.querySelector('.setup-close');

  window.set = {
    setup: setup
  };

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


  // ---- Действия открытия окна ----

  var openPopup = function () {
    setup.classList.remove('hidden');
  };

  modalOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();

    setup.style.top = (evt.clientY / 1.9) + 'px';
    setup.style.left = (evt.clientX / 1.9) + 'px';

  });

  modalOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      openPopup();
    }
  });

  // ---- Действия закрытия окна ----

  var closePopup = function () {
    setup.classList.add('hidden');
  };

  modalClose.addEventListener('click', function () {
    closePopup();
  });

  modalClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (!setup.classList.contains('hidden')) {
        closePopup();
      }
    }
  });
})();
