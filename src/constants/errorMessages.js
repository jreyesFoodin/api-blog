module.exports = {
  missingProperties: (missingProperties) => `Faltan propiedades requeridas: ${missingProperties.join(', ')}`,
  listBlogError: (error) => `Error al listar blogs: ${error.message}`,
  noBlogFoundById: (id) => `No se encontró ningún blog con el ID ${id}`,
  createBlogError: (error) => `Error al crear el blog: ${error.message}`,
  updateBlogError: (error) => `Error al actualizar el blog: ${error.message}`,
  noBlogFoundToUpdate: (id) => `No se encontró ningún blog con el ID ${id} para actualizar`,
  getBlogByIdError: 'Error al obtener el blog por ID',
  missingBlogProperties: (missingProperties) => `Faltan propiedades requeridas: ${missingProperties.join(', ')}`
}
