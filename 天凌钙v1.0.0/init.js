module.exports = function(_ctx, _liquid) {
  // 注册了一个过滤器，用于替换字符串中的正则表达式为指定的字符串。
  // 常见的用法有替换图片之类的特殊 Element。
  this.registerFilter("replace_with_regexp", (content, reg, text) => {
    const regexp = new RegExp(reg, "gm");
    return content.replace(regexp, text);
  });
};
