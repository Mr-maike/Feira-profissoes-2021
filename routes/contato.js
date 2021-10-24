const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.render("contato", {layout: false})
})

module.exports = router