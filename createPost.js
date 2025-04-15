const fs = require("fs");
const path = require("path");
const { DateTime } = require("luxon");

const title = process.argv[2];

if (!title) {
  console.error("❌ Please provide a title: npm run new \"My Thought\"");
  process.exit(1);
}

const date = DateTime.now().toISODate();
const slug = title.toLowerCase().replace(/[^\w]+/g, "-").replace(/(^-|-$)/g, "");
const filename = `${slug}.md`;
const filepath = path.join("posts", filename);

const content = `---
title: "${title}"
date: ${date}
layout: post.njk
---


`;

fs.writeFileSync(filepath, content);
console.log(`✅ Created post: posts/${filename}`);
