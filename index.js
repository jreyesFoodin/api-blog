require('dotenv').config()

const server = require('./src/server')
const port = process.env.PORT || 4088
server.listen(port, function () {
  console.log(`Server run: http://localhost:${port}`)
})
