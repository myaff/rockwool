let DeviceDetection = require("./components/device-detection");
let Helpers = require("./components/helpers");
let Input = require("./components/input");
let Form = require("./components/form");
let Modal = require("./components/modal");
let Timer = require("./components/timer");
let Accordion = require("./components/accordion");
let Tabs = require("./components/tabs");

$(document).ready(function(){
  
  DeviceDetection.run();
  Helpers.init();
  Input.init();
  Form.init();
  Modal.init();
  Timer.init();
  Accordion.init();
  Tabs.init();
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
  Tabs
};