let plugins = [
    require("cssnano")
];

// always add autoprefixer at the end
plugins.push(require("autoprefixer"));

module.exports = plugins;
