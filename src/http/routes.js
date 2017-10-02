const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Enjoy the Silence!!')
    next()
  })
}

module.exports = routes
