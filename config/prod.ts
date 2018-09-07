import CKeys from '../classes/Ckeys';

export default new CKeys(process.env.mongoURI || '');