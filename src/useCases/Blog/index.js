const knex = require('../../db/knex')

module.exports = {
  async listBlog () {
    try {
      const response = await knex.select([
        'idBlog',
        'title',
        'author',
        'publicationDate',
        'content',
        'activo'
      ])
        .from('blog')
        .where('activo', 1)
      return response
    } catch (error) {
      throw new Error(error)
    }
  },
  async listBlogById (id) {
    try {
      const response = await knex.first([
        'idBlog',
        'title',
        'author',
        'publicationDate',
        'content',
        'activo'
      ])
        .from('blog')
        .where('activo', 1)
        .andWhere('idBlog', id)
      return response
    } catch (error) {
      throw new Error(error)
    }
  }
}
