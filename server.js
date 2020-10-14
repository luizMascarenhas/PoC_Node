const express = require('express')
const bodyParser = require('body-parser')
const app = express ()

const MongoClient = require('mongodb').MongoClient

//Linha para realizar a integração com o banco de dados. 
const uri = "mongodb+srv://mask4685:1234@lmfm.dqadj.mongodb.net/LMFM?retryWrites=true&w=majority"

MongoClient.connect(uri, {useUnifiedTopology: true}, (err, client) => {
    if (err) return console.log(err)
    db = client.db('LMFM') //coloque o nome do banco criado.  
    
    app.listen(3000, function() {
        console.log ('server running on port 3000')
    })
})

app.use(bodyParser.urlencoded({ extended: true}))

app.set('viem engine', 'ejs')

app.get('/', (req, res) => {
    res.send('teste.ejs')
})

// app.get('/show', (req,res) => {
//     var cursos = db.collection('Cadastro').find()
// })

// Classe para pes
app.get('/show', (req, res) => {
    db.collection('Cadastro').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('show.ejs', { cadastro: results })
    })
})

// Classe para realizar a inserção de dados no DB. 
app.post('/show', (req, res) => {
    db.collection('Cadastro').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('salvo no banco de dados')
        res.redirect('/')    
        db.collection('Cadastro').find().toArray((err, result) => {
            console.log(result)
        })
    })
})

// mongodb+srv://mask4685:<luiz4685>@lmfm.dqadj.mongodb.net/<LMFM>?retryWrites=true&w=majority
// mongodb+srv://mask4685:123456789@lmfm.dqadj.mongodb.net/LMFM?retryWrites=true&w=majority