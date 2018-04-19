let breakpoints = {
  sm: 767,
  md: 1024,
  lg: 1280,
  xl: 1600
};

function isMobile(){
  return ($(window).width() <= breakpoints.sm);
}
function isTablet(){
  return ($(window).width() > breakpoints.sm && $(window).width() <= breakpoints.md)
}
function isTouch(){
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
function isMobileVersion(){
  return !!~window.location.href.indexOf("/mobile/");
}

function run(){
  if(isTouch()){
    $('html').removeClass('no-touch').addClass('touch');
  } else {
    $('html').removeClass('touch').addClass('no-touch');
  }
}

module.exports = {run, isTouch, isMobile, isTablet, isMobileVersion};