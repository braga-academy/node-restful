
const db = require('../services/mysql')

const routes = (server) => {
  server.get('category', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })
  server.post('category', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })
  // server.put('category', (req, res, next) => {
  //   res.send()
  //   next()
  // })
  // server.delete('category', (req, res, next) => {
  //   res.send()
  //   next()
  // })

  // Main Route
  server.get('/', (req, res, next) => {
    res.send('Enjoy the Silence!!')
    next()
  })
}

module.exports = routes
