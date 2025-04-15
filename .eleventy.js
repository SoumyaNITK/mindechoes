module.exports = function(eleventyConfig) {
  const { DateTime } = require("luxon");

  // Add a date filter
  eleventyConfig.addFilter("date", (value, format = "yyyy-MM-dd") => {
    return DateTime.fromJSDate(value).toFormat(format);
  });

  // Add collection for posts
  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/**/*.md"); // Path where your posts are located
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
    pathPrefix: "/mindechoes/", // IMPORTANT for GitHub Pages
    passthroughFileCopy: true,
    format: "html"
  };
};
