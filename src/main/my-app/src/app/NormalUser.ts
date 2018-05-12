
export class NormalUser{
    name:string;
    email:string;
    userID:number;
    password:string;
    firstPurchase:boolean;
    constructor()
    {
        this.name='';
        this.email='';
        this.userID=0;
        this.password='';
        this.firstPurchase=false;
    }
};