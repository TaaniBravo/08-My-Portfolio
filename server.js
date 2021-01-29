const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./routes/htmlRoutes')(app)

app.listen(PORT, err => {
    if (err) console.error(err);
    console.log(`App listening on PORT http://localhost:${PORT}`)
})