#!/usr/bin/env node

const fs = require("fs");

fs.rename("_rnstorybook", ".rnstorybook", function (err) {
  if (err) {
    throw err;
  } else {
    console.log("\nSuccessfully configured the rnstorybook folder!");
  }
});

fs.rename("_storybook", ".storybook", function (err) {
  if (err) {
    throw err;
  } else {
    console.log("Successfully configured the storybook folder!");
  }
});
