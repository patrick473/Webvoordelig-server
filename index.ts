import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import cors from 'cors';
import keys from './config/keys';
import _ from 'lodash';
import './models/Product';
import {ProductController} from './controllers/productRoutes';

const app:express.Application = express();

app.use(cors());

mongoose.connect(keys.mongoURI);


app.use(bodyParser.json());

app.use('/',ProductController);
const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log('app listening on port ', PORT));