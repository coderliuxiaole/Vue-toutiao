"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _vant = _interopRequireDefault(require("vant"));

require("vant/lib/index.css");

require("./styles/index.less");

require("amfe-flexible");

require("@/utils/dayjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 加载 Vant 核心组件库
// 加载 Vant 全局样式
// 加载全局样式
// 加载动态设置 REM 基准值
// 注册使用 Vant 组件库
_vue["default"].use(_vant["default"]);

_vue["default"].config.productionTip = false;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');
//# sourceMappingURL=main.dev.js.map
