module.exports = function(_ctx, _liquid) {
  this.registerFilter("replace_with_regexp", (content, reg, text) => {
    const regexp = new RegExp(reg, "gm");
    return content.replace(regexp, text);
  });
};
