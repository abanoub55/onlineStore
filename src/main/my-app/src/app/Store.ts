
export class Store {
    storeID: number;
    name: string;
    location: string;
    type: string;
    numOfVisits: number;
    productsSold: number;
    numOfBuyers: number;
    approved:boolean;
    constructor()
    {
        this.storeID=0;
        this.name='';
        this.location='';
        this.type='';
        this.numOfBuyers=0;
        this.numOfVisits=0;
        this.productsSold=0;
        this.approved=false;
    }
};