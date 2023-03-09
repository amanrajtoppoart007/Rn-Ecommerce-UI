module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    //react-native reanimated should be at last
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
