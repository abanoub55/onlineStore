
export class StoreOwner {
        storeID:number;
        name:string;
    email:string;
    userID:number;
    password:string;
    firstPurchase:boolean;
    constructor()
    {
        this.storeID=0;
        this.name='';
        this.email='';
        this.userID=0;
        this.password='';
        this.firstPurchase=false;
    }
};