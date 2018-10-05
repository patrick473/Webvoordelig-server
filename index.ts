import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import _ from 'lodash';
import './models/Product';
import {ProductController} from './controllers/productRoutes';

const app:express.Application = express();

app.use(cors());




app.use(bodyParser.json());

app.use('/',ProductController);
const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log('app listening on port ', PORT));