const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/telas/lista_cliente.html')
})

app.listen(3012, () => {
    console.log("Server is listening on port 3012")
})