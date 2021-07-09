"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUserChannel = exports.getAllChannels = void 0;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllChannels = function getAllChannels() {
  return (0, _request["default"])({
    methods: 'GET',
    url: '/app/v1_0/channels'
  });
};
/*
* 添加用户频道
*/


exports.getAllChannels = getAllChannels;

var addUserChannel = function addUserChannel(channel) {
  return (0, _request["default"])({
    method: 'PATCH',
    url: '/app/v1_0/user/channels',
    data: {
      channels: [channel]
    }
  });
};
/*
* 获取用户频道
*/


exports.addUserChannel = addUserChannel;
//# sourceMappingURL=channel.dev.js.map
