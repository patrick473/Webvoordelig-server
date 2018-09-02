const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');

require('./models/Product');

app.use(cors());
mongoose.connect(keys.mongoURI)

app.use(bodyParser.json());
require('./routes/productRoutes')(app);

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log('app listening on port ', PORT));