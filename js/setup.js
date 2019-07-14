'use strict';

(function () {
  // var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIRE = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var userNameInput = window.set.setup.querySelector('.setup-user-name');
  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  userDialog.classList.remove('hidden');

  // var wizards = [
  //   {
  //     name: WIZARD_NAMES[0],
  //     coatColor: WIZARD_COAT[0],
  //     eyesColor: WIZARD_EYES[0]
  //   },
  //   {
  //     name: WIZARD_NAMES[1],
  //     coatColor: WIZARD_COAT[5],
  //     eyesColor: WIZARD_EYES[2]
  //   },
  //   {
  //     name: WIZARD_NAMES[2],
  //     coatColor: WIZARD_COAT[2],
  //     eyesColor: WIZARD_EYES[1]
  //   },
  //   {
  //     name: WIZARD_NAMES[3],
  //     coatColor: WIZARD_COAT[3],
  //     eyesColor: WIZARD_EYES[4]
  //   }
  // ];


  /* Проверка на валидность введенного имени персонажа -- */

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;

    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (target.value.length > 25) {
      target.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else {
      target.setCustomValidity('');
    }

  });


  // ---- Смена одежды при клике ----

  var coatColor;
  var eyesColor;
  var wizards = [];

  var updateWizards = function () {

    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor;
    });
    var sameEyesWizards = wizards.filter(function (it) {
      return it.colorEyes === eyesColor;
    });

    window.render(sameCoatWizards.concat(sameEyesWizards).concat(wizards));
  };

  var wizard = document.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = userDialog.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = WIZARD_COAT[Math.floor(WIZARD_COAT.length * Math.random())];
    coatColor = wizardCoat.style.fill;
    updateWizards();
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = WIZARD_EYES[Math.floor(WIZARD_EYES.length * Math.random())];
    eyesColor = wizardEyes.style.fill;
    updateWizards();
  });

  fireball.addEventListener('click', function () {
    fireball.style.backgroundColor = WIZARD_FIRE[Math.floor(WIZARD_FIRE.length * Math.random())];
  });

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });

  window.set1 = {
    userDialog: userDialog
  };

})();
