const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//Iniciando a App
const app = express()
app.use(express.json()) //permitir o envio de informações(as requisições) no formato json
app.use(cors())// permitindo acesso acesso externo 

//Iniciando a DB
mongoose.connect('mongodb://localhost:27017/backend', {
    useUnifiedTopology: true, 
    useNewUrlParser: true
})
requireDir('./src/models')

//recebendo toda requisição pelas rotas
app.use("/api", require('./src/routes'))

app.listen(3001)