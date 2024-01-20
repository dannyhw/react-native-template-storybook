module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
  ],
};
