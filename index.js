const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

//Manipulação das rotas
const news = require('./routes/noticias')
const help = require('./routes/ajuda')
const contact = require('./routes/contato')
const gallery = require('./routes/galeria')
const courses = require('./routes/cursos')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars') // => Diz ao node que utliza-se os modelos handlebars
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))

app.get('/', (require, response) => {
  response.render('index', {layout: false})
})

//Rotas
app.use('/noticias', news)
app.use('/ajuda', help)
app.use('/galeria', gallery)
app.use('/contato', contact)
app.use('/cursos', courses)

//Tratamento de erros
app.use(function(require, response, next) {
  response.status(404).render('404', {layout: false})
})

const server = app.listen(1601, () => {
  console.log(`[⚡] O servidor está rodando na porta ${server.address().port}`)
})


