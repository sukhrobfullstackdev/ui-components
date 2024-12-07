module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['arch', 'component', 'misc', 'ui', 'utils', 'wip']],
  },
};
