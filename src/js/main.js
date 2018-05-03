let DeviceDetection = require("./components/device-detection");
let Helpers = require("./components/helpers");
let Input = require("./components/input");
let Form = require("./components/form");
let Modal = require("./components/modal");
let Timer = require("./components/timer");
let Accordion = require("./components/accordion");
let Tabs = require("./components/tabs");
let MainMenu = require("./components/main-menu");
let Video = require("./components/video");
let Test = require("./components/test");

$(document).ready(function(){
  
  DeviceDetection.run();
  Helpers.init();
  Input.init();
  Form.init();
  Modal.init();
  Timer.init();
  Accordion.init();
  Tabs.init();
  MainMenu.init();
  Video.init();
  Test.init();
});


/**
 * Список экспортируемых модулей, чтобы иметь к ним доступ извне
 * @example
 * Main.Form.isFormValid();
 */
module.exports = {
  DeviceDetection,
  Helpers,
  Input,
  Form,
  Modal,
  Timer,
  Accordion,
  Tabs,
  MainMenu,
  Video,
  Test
};