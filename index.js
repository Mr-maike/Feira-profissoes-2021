const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'public/views'))
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars') // => Diz ao node que utliza-se os modelos Pug
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (require, response) => {
  response.render('index', {layout: false})
})

const server = app.listen(1601, () => {
  console.log(`[⚡] O servidor está rodando na porta ${server.address().port}`)
})


