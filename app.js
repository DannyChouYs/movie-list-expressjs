const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))


app.get('/', (req, res) => {
  // create a variable to store movieOne
  const movieOne = {
    id: 1,
    title: 'Jurassic World: Fallen Kingdom 2',
    image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg'
  }
  res.render('index', { movie: movieOne })
})

app.listen(port, () =>{
  console.log(`server is running on http://localhost:${port}`)
})