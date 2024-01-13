module.exports = {
  // Formato de respuesta
  errorResponse (ctx, error, next, status = 404) {
    // Update status
    ctx.status = status
    // Build body
    ctx.body = {
      success: false,
      error: error.message
    }
    // Execute next step
    return next()
  }
}
