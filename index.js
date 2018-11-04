const express = require("express");
const bodyParser = require("body-parser");
const indexRoutes = require("./modules/router/index");
const apiRoutes = require("./modules/router/api");
const connect = require("./modules/db/db.module").connect;
const MONGODB_URI = require("./config").MONGODB_URI;

const app = express();
const PORT = process.env.PORT || 3100;

connect(MONGODB_URI);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoutes(__dirname));
app.use('/api/v1', apiRoutes(__dirname));

app.listen(PORT, () => console.log(`Server is running in port ${PORT}!`));