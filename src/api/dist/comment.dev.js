"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComments = void 0;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 获取用户评论列表
 */
var getComments = function getComments(params) {
  return (0, _request["default"])({
    method: 'GET',
    url: '/app/v1_0/comments',
    params: params
  });
};

exports.getComments = getComments;
//# sourceMappingURL=comment.dev.js.map
