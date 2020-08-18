const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000
const path = require('path')
const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname + '/public')))

io.on('connection', socket => {
    //console.log('Some client connected')

    socket.on('chat', message => {
        //console.log('From client: ', message)
        io.emit('chat', message)
    })
})

server.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})