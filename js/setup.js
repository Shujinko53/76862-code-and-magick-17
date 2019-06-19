'use strict';

var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

userDialog.classList.remove('hidden');

var wizards = [
  {
    name: WIZARD_NAMES[0],
    coatColor: WIZARD_COAT[0],
    eyesColor: WIZARD_EYES[0]
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: WIZARD_COAT[5],
    eyesColor: WIZARD_EYES[2]
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: WIZARD_COAT[2],
    eyesColor: WIZARD_EYES[1]
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: WIZARD_COAT[3],
    eyesColor: WIZARD_EYES[4]
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// ----------- 4-ый раздел заданий -----------------
// ---- 1-ый пункт заданий ----
var modal = document.querySelector('.setup');
var modalOpen = document.querySelector('.setup-open');
var modalClose = document.querySelector('.setup-close');
var userNameInput = modal.querySelector('.setup-user-name');

// ---- Действия открытия окна ----

var openPopup = function () {
  modal.classList.remove('hidden');
};

modalOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});

modalOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openPopup();
  }
});

// ---- Действия закрытия окна ----

var closePopup = function () {
  modal.classList.add('hidden');
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
    if (!modal.classList.contains('hidden')) {
      closePopup();
    }
  }
});
// ---- 2-ой пункт заданий ----
// ---- Проверка на валидность введенного имени персонажа ----

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

// ---- 3-ий пункт заданий ----
var wizard = document.querySelector('.wizard');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = renderColor(WIZARD_COAT);

});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = renderColor(WIZARD_EYES);
});

var renderColor = function (array) {
  var colors = getRandomNumber(array);
  for (var i = 0; i < array.length; i++) {
    colors = array[i];
  }
  return colors;
};

var getRandomNumber = function(coordinate) {
  var num = Math.floor(coordinate[0] + Math.random() * (coordinate[1] + 1 - coordinate[0]));

  return num;
};
