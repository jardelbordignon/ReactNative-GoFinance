/* eslint-disable semi */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', 'cjs'],
        alias: {
          src: './src',
        },
      },
    ],
  ],
}