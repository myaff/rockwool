/**
 * Test
 * @module Test
 */

let score = 0;
let min = 5;
let activeTest = 1;

function checkCorrect(ctrl) {
  return !!ctrl.data('correct');
}

function getCorrect(ctrl) {
  let correctEl;
  let isCorrect = checkCorrect(ctrl);
  if (isCorrect) {
    correctEl = ctrl;
  } else {
    correctEl = ctrl.siblings('.test-ctrl[data-correct="true"]');
  }
  return correctEl;
}


function animateTest(ctrl, isCorrect) {
  let test = ctrl.closest('.test');
  let modal = ctrl.closest('.modal');
  ctrl.siblings('.test-ctrl').addClass('inactive').slideUp(500);
  modal.find('.modal__header').slideUp(500);
  test.addClass('done');
  if (isCorrect) {
    ctrl.addClass('is-correct');
  } else {
    ctrl.addClass('is-error');
  }
  test.find('.test-content').slideDown(500).addClass('active');
}

function clearTest() {
  score = 0;
  activeTest = 1;
  $('.test-ctrl').removeClass('inactive is-correct is-error').slideDown(100);
  $('.modal__header').slideDown(100);
  $('.test').removeClass('done');
  $('.test-content').slideUp(100).removeClass('active');
}

function getResult() {
  return score >= min ? '#test-win' : '#test-loose';
}

function init() {
  // init
  $('.js-modal[data-target="test"]').on('click', function(){
    Main.Modal.openModal("#test-" + activeTest);
  });
  
  // process
  $('.test-ctrl').on('click', function(){
    let isCorrect = checkCorrect($(this));
    let correctEl = getCorrect($(this));
    if (isCorrect) {
      score++;
    }
    animateTest(correctEl, isCorrect);
  });
  
  $('.test-next').on('click', function(){
    if ($(this).data('target') === 'result') {
      Main.Modal.openModal(getResult());
    } else {
      activeTest++;
    }
  });
  
  // reset
  $('.test-reset').on('click', function(){
    clearTest();
    Main.Modal.openModal('#test-1');
  });
  $('#modal-win, #modal-loose').on('closed', function(){
    clearTest();
  });
}

module.exports = { init };