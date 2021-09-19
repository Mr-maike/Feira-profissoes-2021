const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.send("Página principal de notícias")
})

module.exports = router