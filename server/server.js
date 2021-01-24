const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const watsonRoutes = require("./routes/api/watson");

app.use("/api/watson", watsonRoutes);

const port = process.env.PORT || 5000;
var server = app.listen(port, () => {
    console.log("Server listening on port ", port);
    return true;
});


module.exports = server