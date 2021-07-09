"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _dayjs = _interopRequireDefault(require("dayjs"));

require("dayjs/locale/zh-cn");

var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 加载中文语言包
// 配置使用处理相对时间的插件
_dayjs["default"].extend(_relativeTime["default"]); // dayjs 默认语言是英文，我们这里配置为中文


_dayjs["default"].locale('zh-cn'); // 全局使用
// 定义一个全局过滤器，然后就可以在任何组件的模板中使用了
// 其实过滤器就相当于一个全局可用的方法（仅供模板使用）
// 参数1：过滤器名称
// 参数2：过滤器函数
// 使用方式：{{ 表达式 | 过滤器名称 }}
// 管道符前面的表达式的结果会作为参数传递到过滤器函数中
// 过滤器的返回值会渲染到使用过滤器的模板位置


_vue["default"].filter('relativeTime', function (value) {
  return (0, _dayjs["default"])().to((0, _dayjs["default"])(value));
}); // dayjs() 获取当前最新时间
// console.log(dayjs().format('YYYY-MM-DD'))
// console.log(dayjs().to(dayjs('2015'))) // 2 年以前
//# sourceMappingURL=dayjs.dev.js.map
