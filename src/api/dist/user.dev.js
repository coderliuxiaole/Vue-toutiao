"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFollowUser = exports.addFollowUser = exports.getUserChannels = exports.getUserInfo = exports.sendSms = exports.login = void 0;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 用户相关请求模块
 */
// import store from '@/store'
var login = function login(data) {
  return (0, _request["default"])({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: data
  });
};
/**
 * 发送验证码
 * 注意：每手机号每分钟1次
 */


exports.login = login;

var sendSms = function sendSms(mobile) {
  return (0, _request["default"])({
    method: 'GET',
    url: "/app/v1_0/sms/codes/".concat(mobile)
  });
};
/**
 * 获取用户自己的信息
 */


exports.sendSms = sendSms;

var getUserInfo = function getUserInfo() {
  return (0, _request["default"])({
    method: 'GET',
    url: '/app/v1_0/user' // 发送请求头数据
    // headers: {
    //   // 注意：该接口需要授权才能访问
    //   //       token的数据格式：Bearer token数据，注意 Bearer 后面有个空格
    //   Authorization: `Bearer ${store.state.user.token}`
    // }

  });
};
/**
 * 获取用户频道列表
 */


exports.getUserInfo = getUserInfo;

var getUserChannels = function getUserChannels() {
  return (0, _request["default"])({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  });
};
/**
 * 关注用户
 */


exports.getUserChannels = getUserChannels;

var addFollowUser = function addFollowUser(target) {
  return (0, _request["default"])({
    method: 'POST',
    url: '/app/v1_0/user/followings',
    data: {
      target: target
    }
  });
};
/**
 * 取消关注用户
 */


exports.addFollowUser = addFollowUser;

var deleteFollowUser = function deleteFollowUser(target) {
  return (0, _request["default"])({
    method: 'DELETE',
    url: " /app/v1_0/user/followings/:target/".concat(target)
  });
};

exports.deleteFollowUser = deleteFollowUser;
//# sourceMappingURL=user.dev.js.map
