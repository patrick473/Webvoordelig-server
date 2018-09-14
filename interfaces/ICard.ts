import IProductbase from './IProductbase';

export default interface ICard extends IProductbase{
    cardSet:string;
    quality:string;
    rarity:string;
    holo:string;
    collectorNumber:string;
    exttra:string;
}