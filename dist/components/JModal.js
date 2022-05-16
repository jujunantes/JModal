"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./JModal.css");

function JModal(_ref) {
  let {
    title,
    text,
    btn_text,
    closingModale
  } = _ref;

  if (title === undefined) {
    title = 'Lorem Ipsum';
  }

  if (text === undefined) {
    text = 'Lorem Ipsum';
  }

  if (btn_text === undefined) {
    btn_text = 'OK';
  }

  return /*#__PURE__*/React.createElement("div", {
    id: "confirmation",
    className: "JModal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "JModal_window JModal_blur"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "JModal_h3"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "JModal_p"
  }, text), /*#__PURE__*/React.createElement("p", {
    className: "JModal_close-button",
    onClick: closingModale
  }, "\u2716"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
    className: "JModal_button",
    onClick: closingModale
  }, btn_text))));
}

var _default = JModal;
exports.default = _default;