'use strict';

module.exports = function(api) {
  api.cache(true);

  const presets = [['@babel/preset-env', { targets: { node: 'current' } }]];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ];

  return {
    presets,
    plugins,
  };
};
