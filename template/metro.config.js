const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const {
  withStorybook,
} = require('@storybook/react-native/metro/withStorybook');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

const finalConfig = mergeConfig(getDefaultConfig(__dirname), config);

module.exports = withStorybook(finalConfig, {
  // set this to `enabled: true` to always include storybook in the bundle
  enabled: process.env.STORYBOOK_ENABLED === 'true',
});
