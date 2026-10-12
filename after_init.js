#!/usr/bin/env node

const fs = require('fs');

// The React Native CLI only renames a fixed list of underscored dotfiles,
// so the Storybook folders and the prettier ignore file are renamed here.
const renames = [
  ['_rnstorybook', '.rnstorybook'],
  ['_storybook', '.storybook'],
  ['_prettierignore', '.prettierignore'],
];

for (const [from, to] of renames) {
  if (fs.existsSync(from)) {
    fs.renameSync(from, to);
    console.log(`Renamed ${from} to ${to}`);
  }
}

console.log('\nStorybook is configured! Run `npm run storybook` to get started.');
