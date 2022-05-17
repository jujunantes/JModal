"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./JModal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation",
    className: "JModal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "JModal_window"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "JModal_h3"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "JModal_p"
  }, text), /*#__PURE__*/_react.default.createElement("p", {
    className: "JModal_close-button",
    onClick: closingModale
  }, "\u2716"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "JModal_button",
    onClick: closingModale
  }, btn_text))));
}

var _default = JModal;
exports.default = _default;