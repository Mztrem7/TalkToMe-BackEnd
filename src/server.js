const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./database/index')


app.use(cors())
app.use(express.json())

app.get('/allPosts', async(req, res) => {
    const allPosts = await knex.select().table('posts')
    res.send(allPosts)
})

app.post('/post', async(req, res) => {
    console.log(req.body)
    knex.insert({
        nome: req.body.user,
        conteudo: req.body.message
    }).table('posts').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
    console.log('API ACESSADA');
    return res.send("API ACESSADA")
})


app.listen(process.env.PORT ?? 3343, () => console.log('Service ON in PORT | 3344'))