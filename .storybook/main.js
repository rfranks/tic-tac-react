module.exports = {
  addons: [
    '@storybook/addon-knobs/register',
    'storybook-addon-preview/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
  ],
  stories: ['../src/**/stories.[tj]s'],
};
