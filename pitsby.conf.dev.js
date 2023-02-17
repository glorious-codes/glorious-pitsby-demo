module.exports = {
  styles: [
    './dist/vanillaComponents.css'
  ],
  scripts: [
    './dist/angularComponents.js',
    './dist/reactComponents.js',
    './dist/vanillaComponents.js',
    './dist/vueComponents.js'
  ],
  metrics: {
    plausibleId: 'dev.pitsby.com',
    plausibleOptions: { trackLocalhost: false }
  }
};
