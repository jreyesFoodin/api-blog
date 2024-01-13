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
  router.get('/Blog/list/:id', async (ctx, next) => {
    try {
      let payload = await BlogUseCases.listBlogById()
      ctx.body = {
        success: true,
        payload
      }
      return next()
    } catch (error) {
      return errorResponse(ctx, error, next)
    }
  })
}
