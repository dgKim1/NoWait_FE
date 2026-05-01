export default {
  "apps/nowait-admin/src/**/*.{ts,tsx,js,jsx}": (files) => [
    `yarn workspace nowait-admin run eslint --fix ${files.join(" ")}`,
    `prettier --write ${files.join(" ")}`,
  ],
  "apps/nowait-user/src/**/*.{ts,tsx,js,jsx}": (files) => [
    `yarn workspace nowait-user run eslint --fix ${files.join(" ")}`,
    `prettier --write ${files.join(" ")}`,
  ],
  "**/*.{css,json,md,yaml,yml,html}": "prettier --write",
};
