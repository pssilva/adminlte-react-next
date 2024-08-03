export default function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        bugfixes: true,
        modules: false,
        exclude: ['transform-typeof-symbol']
      }
    ]
  ];
  const plugins = [];

  return {
    presets,
    plugins
  };
}

