/* NiB was here */
const exp = require('constants');
const express = require ('express');
const app = express();
const path = require('path');

const router = require('./app/router')

const champions = require('./data/champions')
const maps = require('./data/maps')

app.locals.champions = champions
app.locals.maps = maps


app.use(express.static(path.join(__dirname, './public')));


const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(router);


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})

