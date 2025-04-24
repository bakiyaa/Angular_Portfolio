// tailwind.config.js
module.exports = {
  content: [
    './index.html',       // Include your main HTML file
    './**/*.html',         // Include all HTML files in the project
    './**/*.js',           // Include JS files if you're using Tailwind with JS-based frameworks (e.g., React, Vue)
    './**/*.jsx',          // If using JSX (e.g., React)
    './**/*.tsx',          // If using TypeScript (e.g., React with TypeScript)
    './**/*.css',          // Include all CSS files if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
