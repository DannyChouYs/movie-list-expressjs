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

// 主頁
app.get('/', (req, res) => {
  // create a variable to store movies

  res.render('index', { movies: movieList.results })
})

// 電影資訊個別頁面
app.get('/movie/:movie_id', (req, res) => {
  // filter 回傳陣列
  // const movie = movieList.results.filter( movie => {
  //   return movie.id.toString() === req.params.movie_id 
  // })
  // res.render('show', { movie: movie[0] })

  // find 回傳元素
  const movie = movieList.results.find( movie => {
    return movie.id.toString() === req.params.movie_id 
  })
  res.render('show', { movie: movie })
})

app.listen(port, () =>{
  console.log(`server is running on http://localhost:${port}`)
})