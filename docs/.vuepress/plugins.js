let plugins = [
    require("cssnano")
];


if (process.env.NODE_ENV === "production") {
// only add purgecss if production
plugins.push(
    require("@fullhuman/postcss-purgecss")({
    content: [
        "docs/.vuepress/**/*.vue",
        "docs/.vuepress/**/*.md",
        "docs/.vuepress/**/*.js",
    ],

    whitelistPatterns: [
        /^(h\d|p$|ul|li$|div|ol|table|td$|th$|thead|tbody|main|input|button|form|md-|hljs|animated|fadeIn|fa-user|fa-at)/
    ]
    })
);
}
  
// always add autoprefixer at the end
plugins.push(require("autoprefixer"));

module.exports = plugins;
