// postcss.config.cjs
const purgecss = require('postcss-plugin-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.astro', './src/**/*.html', './src/**/*.js'], // Configure this to match your file structure
      // Add any other PurgeCSS options here
    }),
  ],
};
