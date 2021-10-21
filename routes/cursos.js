const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.render('cursos', {layout: false})
})

module.exports = router