'use strict';

var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


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
// ---- 1 пункт заданий ----
var modal = document.querySelector('.setup');
var modalOpener = document.querySelector('.setup-open');
var modalCloser = document.querySelector('.setup-close');

modalOpener.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('hidden');
});

modalCloser.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('hidden');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13 || evt.keyCode === 32) {
    modal.classList.remove('hidden');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  }
});

