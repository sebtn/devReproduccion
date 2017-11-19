const express      = require('express')
const bodyParser   = require('body-parser')
const cookieParser = require('cookie-parser')
const path         = require('path')
// const routes       = require('./routes')

const app = express()

const PORT = process.env.PORT || 3000
app.set('port', PORT)

app.use(express.static(path.resolve(__dirname, 'public')) )
  .use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // .use('/', routes)

app.listen(app.get('port'), () => {  
 console.log( 'Express is now running your port: ' + PORT ) 
})
