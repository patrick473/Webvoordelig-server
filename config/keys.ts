import CKeys from '../classes/Ckeys';
import devKeys from './dev';
import prodKeys from './prod';

console.log(devKeys);
let keys:CKeys
if (process.env.NODE_ENV === 'production')
 {
   keys = prodKeys;
 }
 else{
     
   keys = devKeys
  
 }

export default keys;