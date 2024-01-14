const knex = require('../../db/knex')
const errorMessages = require('../../constants/errorMessages')

function validateBlogProperties (body) {
  const requiredProperties = ['title', 'author', 'publicationDate', 'content']
  const missingProperties = requiredProperties.filter(prop => !(prop in body))

  if (missingProperties.length > 0) {
    throw new Error(errorMessages.missingBlogProperties(missingProperties))
  }
}

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
        .from('Blog')
        .where('activo', 1)
      return response
    } catch (error) {
      throw new Error(errorMessages.listBlogError(error))
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
        .from('Blog')
        .where('activo', 1)
        .andWhere('idBlog', id)
      if (!response) {
        throw new Error(errorMessages.noBlogFoundById(id))
      }
      return response
    } catch (error) {
      throw new Error(error.message || errorMessages.getBlogByIdError)
    }
  },
  async createdBlog (body) {
    validateBlogProperties(body)
    try {
      const [idBlog] = await knex('Blog')
        .returning('idBlog')
        .insert(body)
      return {
        idBlog,
        message: 'Blog creado exitosamente'
      }
    } catch (error) {
      throw new Error(errorMessages.createBlogError(error))
    }
  },
  async updateBlog (id, body) {
    validateBlogProperties(body)
    try {
      const updatedRows = await knex('Blog')
        .where('idBlog', id)
        .update(body)

      if (updatedRows === 0) {
        throw new Error(errorMessages.noBlogFoundById(id))
      }

      return {
        message: 'Blog actualizado exitosamente'
      }
    } catch (error) {
      throw new Error(errorMessages.updateBlogError(error))
    }
  },
  async removerBlog (id) {
    try {
      const removeRows = await knex('Blog')
        .where('idBlog', id)
        .update({ activo: 0 })

      if (removeRows === 0) {
        throw new Error(errorMessages.noBlogFoundById(id))
      }

      return {
        message: 'Blog removido exitosamente'
      }
    } catch (error) {
      throw new Error(errorMessages.removeBlogError(error))
    }
  }
}
