


export class CKeys  {
  public dbName:string |undefined;
  public dbUser:string |undefined;
  public dbPassword:string |undefined;
  public dbPort:number |undefined;


  constructor(dbName:string | undefined,dbUser:string |undefined,dbPassword:string |undefined,dbPort:number | undefined){
      this.dbName = dbName;
      this.dbUser = dbUser;
      this.dbPassword = dbPassword;
      this.dbPort = dbPort;
  }
}
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