const withTM = require('next-transpile-modules')([
  'crew-important-feature-0',
  'crew-important-feature-1',
  'crew-important-feature-10',
  'crew-important-feature-11',
  'crew-important-feature-12',
  'crew-important-feature-13',
  'crew-important-feature-14',
  'crew-important-feature-15',
  'crew-important-feature-16',
  'crew-important-feature-17',
  'crew-important-feature-18',
  'crew-important-feature-19',
  'crew-important-feature-2',
  'crew-important-feature-3',
  'crew-important-feature-4',
  'crew-important-feature-5',
  'crew-important-feature-6',
  'crew-important-feature-7',
  'crew-important-feature-8',
  'crew-important-feature-9',
]);

module.exports = withTM({
  reactStrictMode: true,
});
