module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "@babel/preset-react",
      "module:metro-react-native-babel-preset",
    ],

    plugins: [
      "@babel/transform-flow-strip-types",
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      "@babel/transform-runtime",
    ],
    sourceMaps: true,
  };
};
