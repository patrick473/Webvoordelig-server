const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./models/Tradingcard');
mongoose.connect(keys.mongoURI)

app.use(bodyParser.json());
require('./routes/cardRoutes')(app);

const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log('app listening on port ', PORT));