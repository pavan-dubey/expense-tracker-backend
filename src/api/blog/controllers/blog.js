'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:1337';

const formatBlog = (blog) => ({
  id: blog.id,
  documentId: blog.documentId,
  category: blog.category,
  title: blog.title,
  date: blog.date,
  author: blog.author,
  authorInitial: blog.authorInitial,
  image: blog.image ? `${SERVER_URL}${blog.image.url}` : null,
  imgAlt: blog.imgAlt,
  slug: blog.slug,
});

module.exports = createCoreController('api::blog.blog', () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: { image: true },
    };
    const { data, meta } = await super.find(ctx);
    return {
      data: data.map((item) => formatBlog(item)),
      meta,
    };
  },

  async findOne(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: { image: true },
    };
    const { data } = await super.findOne(ctx);
    return {
      data: formatBlog(data),
    };
  },
}));
