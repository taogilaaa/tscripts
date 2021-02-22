'use strict';

const base = require('./babel.base.config');

module.exports = function(api) {
  const baseConfig = base(api);

  return {
    ...baseConfig,
    presets: [...baseConfig.presets, '@babel/preset-typescript'],
  };
};
