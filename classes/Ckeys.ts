import IKeys from '../interfaces/IKeys';
class CKeys implements IKeys {
    public mongoURI:string;

    constructor(mongoURI:string){
        this.mongoURI = mongoURI;
    }
}

export default CKeys;