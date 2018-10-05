import Sequelize from 'sequelize';

import keys from '../config/keys';
import TradingcardFactory from './factories/TradingcardFactory';

const {dbName,dbPassword,dbPort,dbUser} = keys;

const sequelize = new Sequelize(
    (dbName)?dbName:'',
    (dbUser)?dbUser:'',
    (dbPassword)?dbPassword:'',
    {
    dialect: 'postgres',
    port:dbPort,
    
});

const db = {
    sequelize,
    Sequelize,
    Tradingcard:TradingcardFactory(sequelize)
};

export default db;