const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.render("ajuda", {layout: false})
})

module.exports = router