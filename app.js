const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')
const movieList = require('./movies.json')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))


app.get('/', (req, res) => {
  // create a variable to store movies

  res.render('index', { movies: movieList.results })
})

app.listen(port, () =>{
  console.log(`server is running on http://localhost:${port}`)
})