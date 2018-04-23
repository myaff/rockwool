/**
 * Timer
 * @module Timer
 */

let moment = require("moment");
function getSkl(num) {
  let group;
  if (num < 10 || num > 20) {
    if (num%10 == 1) {
      group = 1;
    } else if (num%10 > 1 && num%10 < 5) {
      group = 2;
    } else {
      group = 3;
    }
  } else {
    group = 3;
  }
  return group;
}
function getLocaleTitleD(num) {
  let title;
  switch (num) {
    case 1:
      title = 'день';
      break;
    case 2:
    case 3:
    case 4:
      title = 'дня';
      break;
    default:
      title = 'дней';
      break;
  }
  return title;
}
function getLocaleTitleH(num) {
  let title;
  switch (getSkl(num)) {
    case 1:
      title = 'час';
      break;
    case 2:
      title = 'часа';
      break;
    default:
      title = 'часов';
      break;
  }
  return title;
}
function getLocaleTitleM(num) {
  let title;
  switch (getSkl(num)) {
    case 1:
      title = 'минуту';
      break;
    case 2:
      title = 'минуты';
      break;
    default:
      title = 'минут';
      break;
  }
  return title;
}
/**
 * инициализация событий для таймера
 * @example
 * Timer.init();
 */
function init(){
  //console.dir(moment());
  moment.locale('ru');
  var $clock = $('#timer'),
      eventTime = moment($clock.data('final'), 'DD-MM-YYYY').unix(),
      currentTime = moment().unix(),
      diffTime = eventTime - currentTime,
      duration = moment.duration(diffTime * 1000, 'milliseconds'),
      interval = 1000;

  // if time to countdown
  if(diffTime > 0) {

    // Show clock
    // $clock.show();

    var $d = $('<div class="days" ></div>').appendTo($clock),
        $h = $('<div class="hours" ></div>').appendTo($clock),
        $m = $('<div class="minutes" ></div>').appendTo($clock);
    var $dNum = $('<div class="num" ></div>').appendTo($d),
        $hNum = $('<div class="num" ></div>').appendTo($h),
        $mNum = $('<div class="num" ></div>').appendTo($m);
    var $dTitle = $('<div class="title" ></div>').appendTo($d),
        $hTitle = $('<div class="title" ></div>').appendTo($h),
        $mTitle = $('<div class="title" ></div>').appendTo($m);
        

    setInterval(function(){

      duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
      var d = moment.duration(duration).days(),
          h = moment.duration(duration).hours(),
          m = moment.duration(duration).minutes();

      d = $.trim(d).length === 1 ? '0' + d : d;
      h = $.trim(h).length === 1 ? '0' + h : h;
      m = $.trim(m).length === 1 ? '0' + m : m;
      
      // show how many  days, hours and minutes are left
      $dNum.text(d);
      $hNum.text(h);
      $mNum.text(m);
      
      // title
      $dTitle.text(getLocaleTitleD(d));
      $hTitle.text(getLocaleTitleH(h));
      $mTitle.text(getLocaleTitleM(m));

    }, interval);

  }

}

module.exports = {init};