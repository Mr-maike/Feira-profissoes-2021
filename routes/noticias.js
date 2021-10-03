const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.render('noticias', {layout: false})
})

module.exports = router