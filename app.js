const express = require('express');
const app = express();

app.listen(3003, () => {
    console.log('Servidor funcionando')
})

app.use(express.static("public"));

const mainRouter = require('./routes/main');
app.use('/', mainRouter);