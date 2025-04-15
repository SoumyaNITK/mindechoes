module.exports = function(eleventyConfig) {
  // Date filter
  const { DateTime } = require("luxon");
  eleventyConfig.addFilter("date", (value, format = "yyyy-MM-dd") => {
    return DateTime.fromJSDate(value).toFormat(format);
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
    pathPrefix: "/mindechoes/", // VERY IMPORTANT for GitHub Pages
    // Add this to avoid folder-style URLs:
    passthroughFileCopy: true,
    format: "html"
  };
};
