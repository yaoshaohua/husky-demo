// lint-staged.config.js
module.exports = {
  'src/**/*.{js,vue}': ['eslint --fix', 'git add'],
  'src/**/*.{vue,html,css,less,sass}': ['stylelint --fix', 'git add'],
  'src/**/*.{js,vue,html,css,less,sass}': ['prettier-eslint --write', 'git add']
}
