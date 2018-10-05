import {CKeys} from './keys';

    const dbPort = (process.env.dbPort) ? process.env.dbPort : '5432';
export default  new CKeys(
    process.env.dbName,
    process.env.dbUser,
    process.env.dbPass,
    parseInt(dbPort)

);