const express = require('express')
const app = express()
const history = require('connect-history-api-fallback')

let path = require('path')

app.use(express.static('public'))
const staticFileMiddleware = express.static(path.join(__dirname))
app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.get('/a', (req, res) => {
    res.status(200).json({'a':'a'})
})

app.listen(5000, () => console.log('Example app listening on port 5000!'))