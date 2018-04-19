/**
 * Timer
 * @module Timer
 */

let moment = require("moment");

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

    // titles
    var dTitle = moment().endOf('month').fromNow().split(' ')[2],
        hTitle = moment().endOf('days').fromNow().split(' ')[2],
        mTitle = moment().endOf('hours').fromNow().split(' ')[2];
        $dTitle.text(dTitle);
        $hTitle.text(hTitle);
        $mTitle.text(mTitle);
        

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

    }, interval);

  }

}

module.exports = {init};