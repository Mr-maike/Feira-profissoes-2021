const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.render("galeria", {layout: false})
})

module.exports = router