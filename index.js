const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const news = require('./routes/news')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars') // => Diz ao node que utliza-se os modelos Pug
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))

app.get('/', (require, response) => {
  response.render('index', {layout: false})
})

//Rotas
app.use('/news', news)

const server = app.listen(1601, () => {
  console.log(`[⚡] O servidor está rodando na porta ${server.address().port}`)
})


