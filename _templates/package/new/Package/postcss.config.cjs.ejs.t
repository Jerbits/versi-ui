---
to: packages/<%= h.capitalize(name) %>/postcss.config.cjs
---
module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };