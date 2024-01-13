const BlogUseCases = require('../../useCases/Blog')

const { errorResponse } = require('../../helpers/formats')

module.exports = (router) => {
  router.get('/Blog/list', async (ctx, next) => {
    try {
      let payload = await BlogUseCases.listBlog()
      ctx.body = {
        success: true,
        payload
      }
      return next()
    } catch (error) {
      return errorResponse(ctx, error, next)
    }
  })
  router.get('/Blog/listBlogById', async (ctx, next) => {
    try {
      const { id } = ctx.request.header
      let payload = await BlogUseCases.listBlogById(id)
      ctx.body = {
        success: true,
        payload
      }
      return next()
    } catch (error) {
      return errorResponse(ctx, error, next)
    }
  })
  router.post('/Blog/createdBlog', async (ctx, next) => {
    try {
      const { body } = ctx.request
      let payload = await BlogUseCases.createdBlog(body)
      ctx.body = {
        success: true,
        ...payload
      }
    } catch (error) {
      return errorResponse(ctx, error, next)
    }
  })
}
