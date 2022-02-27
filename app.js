const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')



app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () =>{
  console.log(`server is running on http://localhost:${port}`)
})