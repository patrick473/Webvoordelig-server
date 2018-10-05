export default interface IUser {
    id: number,
    category:string,
    name:string,
    cardset:string,
    quality:string,
    rarity:string,
    holo:string,
    price:string,
    collectornumber:string,
    extra?: string,
    picture:string,
    amount:number
}