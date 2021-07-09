"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCompletion = exports.getSearchList = void 0;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getSearchList = function getSearchList(params) {
  return (0, _request["default"])({
    method: 'GET',
    url: '/app/v1_0/search',
    params: params
  });
};

exports.getSearchList = getSearchList;

var getCompletion = function getCompletion(params) {
  return (0, _request["default"])({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: params
  });
};

exports.getCompletion = getCompletion;
//# sourceMappingURL=search.dev.js.map
