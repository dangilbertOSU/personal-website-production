"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /*
   * fivefeatured gets the latest 5 featured articles from each category
   */

  fivefeatured: async (ctx) => {
    const motivationArticles = await strapi.services.article.find({
      _sort: "date:desc",
      category: "motivation",
      featured: true,
      _limit: 5,
    });

    const technologyArticles = await strapi.services.article.find({
      _sort: "date:desc",
      category: "technology",
      featured: true,
      _limit: 5,
    });

    const businessArticles = await strapi.services.article.find({
      _sort: "date:desc",
      category: "business",
      featured: true,
      _limit: 5,
    });

    const articles = [
      ...motivationArticles,
      ...businessArticles,
      ...technologyArticles,
    ];

    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    return articles;
  },
};
