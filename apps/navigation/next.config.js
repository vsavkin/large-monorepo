const withTM = require('next-transpile-modules')([
  'navigation-important-feature-0',
  'navigation-important-feature-1',
  'navigation-important-feature-10',
  'navigation-important-feature-11',
  'navigation-important-feature-12',
  'navigation-important-feature-13',
  'navigation-important-feature-14',
  'navigation-important-feature-15',
  'navigation-important-feature-16',
  'navigation-important-feature-17',
  'navigation-important-feature-18',
  'navigation-important-feature-19',
  'navigation-important-feature-2',
  'navigation-important-feature-3',
  'navigation-important-feature-4',
  'navigation-important-feature-5',
  'navigation-important-feature-6',
  'navigation-important-feature-7',
  'navigation-important-feature-8',
  'navigation-important-feature-9',
]);

module.exports = withTM({
  reactStrictMode: true,
});
