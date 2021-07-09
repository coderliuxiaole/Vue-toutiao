"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteArticleLike = exports.addArticleLike = exports.getArticleData = exports.getArticles = void 0;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 文章请求模块
 */

/**
 * 获取文章列表
 */
var getArticles = function getArticles(params) {
  return (0, _request["default"])({
    method: 'GET',
    url: '/app/v1_1/articles',
    // params 选项用来配置 Query 参数
    params: params
  });
};
/**
 * 获取文章数据
 */


exports.getArticles = getArticles;

var getArticleData = function getArticleData(articleId) {
  return (0, _request["default"])({
    method: 'GET',
    url: "/app/v1_0/articles/".concat(articleId)
  });
};
/**
 * 对文章点赞
 */


exports.getArticleData = getArticleData;

var addArticleLike = function addArticleLike(target) {
  return (0, _request["default"])({
    method: 'POST',
    url: '/app/v1_0/comment/likings',
    data: {
      target: target
    }
  });
};
/**
 * 取消对文章点赞
 */


exports.addArticleLike = addArticleLike;

var deleteArticleLike = function deleteArticleLike(target) {
  return (0, _request["default"])({
    method: 'DELETE',
    url: "/app/v1_0/comment/likings/".concat(target)
  });
};

exports.deleteArticleLike = deleteArticleLike;
//# sourceMappingURL=article.dev.js.map
