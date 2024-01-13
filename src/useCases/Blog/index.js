const knex = require('../../db/knex')

function validateBlogProperties (body) {
  const requiredProperties = ['title', 'author', 'publicationDate', 'content']
  const missingProperties = requiredProperties.filter(prop => !(prop in body))

  if (missingProperties.length > 0) {
    throw new Error(`Faltan propiedades requeridas: ${missingProperties.join(', ')}`)
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
        .from('Blog')
        .where('activo', 1)
        .andWhere('idBlog', id)
      if (!response) {
        throw new Error(`No se encontró ningún blog con el ID ${id}`)
      }
      return response
    } catch (error) {
      throw new Error(error.message || 'Error al obtener el blog por ID')
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
      throw new Error(`Error al crear el blog: ${error.message}`)
    }
  }
}
