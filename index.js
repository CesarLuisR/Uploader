const express = require('express');
const path = require('path');
const multerConf = require("./lib/multerConf");
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client')));

app.use(multerConf);

app.use("/", routes);

app.listen(port, () => {
    console.log('listening on port ' + port);
});