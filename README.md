![picture of storybook](https://github.com/user-attachments/assets/cf98766d-8b90-44ab-b718-94ab16e63205)

# React Native Storybook Template

> The base React Native template with Storybook added on top

## :star: Features

- Bootstrapped with the [React Native Community CLI](https://github.com/react-native-community/cli)
- Based on the official [React Native template](https://github.com/react-native-community/template)
- On-device Storybook with [`@storybook/react-native`](https://github.com/storybookjs/react-native) and the notes, controls, backgrounds and actions addons
- Web Storybook with [`@storybook/react-native-web-vite`](https://github.com/storybookjs/react-native-web-vite)

### Versions

| Package                             | Version |
| ----------------------------------- | ------- |
| react-native                        | 0.87.1  |
| react                               | 19.2.3  |
| storybook / @storybook/react-native | 10.6.x  |
| react-native-reanimated             | 4.7.x   |
| @react-native-community/cli         | 20.2.0  |
| vite                                | 8.x     |
| typescript                          | 6.x     |

Node.js `^22.13.0 || ^24.3.0 || >= 26.0.0` is required.

## Usage

```sh
npx @react-native-community/cli@latest init MyApp --template react-native-template-storybook
```

Then, for iOS, install the pods:

```sh
cd MyApp/ios
bundle install
bundle exec pod install
cd ..
```

## Scripts

| Script                       | Description                                                       |
| ---------------------------- | ----------------------------------------------------------------- |
| `npm run storybook`          | Start Metro with Storybook enabled (`STORYBOOK_ENABLED=true`)     |
| `npm run storybook:ios`      | Build and run the iOS app with Storybook enabled                  |
| `npm run storybook:android`  | Build and run the Android app with Storybook enabled              |
| `npm run storybook:web`      | Start the web Storybook on http://localhost:6006                  |
| `npm run build-storybook`    | Build the web Storybook into `storybook-static/`                  |
| `npm run storybook-generate` | Regenerate `.rnstorybook/storybook.requires.ts`                   |
| `npm start`                  | Start Metro without Storybook (Storybook is removed from the app) |

When `STORYBOOK_ENABLED` is not `true`, `App.tsx` renders your app and `withStorybook` in `metro.config.js` strips Storybook from the bundle.

Stories live next to your components (`components/**/*.stories.tsx`). On-device configuration is in `.rnstorybook/` and web configuration is in `.storybook/`.

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
