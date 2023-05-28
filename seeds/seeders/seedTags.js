const { Tag } = require("../../models");

const seedTags = async () => {
  try {
    // An array of tag names is created
    const tags = [New, Sale, Trending, Popular, Seasonal, Limited];
    // The tags array is mapped through
    // For each tag in the array, the tag_name column is set to the tag name
    // The result is an array of objects which is passed to the bulkCreate method to create data in the Tag Model
    const tagData = await Tag.bulkCreate(
      tags.map((tag) => ({ tag_name: tag }))
    );
    return tagData;
  } catch (err) {
    console.log({ err });
  }
};

module.exports = seedTags;
