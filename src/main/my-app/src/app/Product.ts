export class Product{

     productID:number;
	 name:string;
	 price:number;
	 category:string;
	 brandName:string;
	 numOfVisits:number;
	 productsSold:number;
	 numOfBuyers:number;
	 owningStore:number;
	 amount:number;
	 shippingAddress:string;
	 constructor()
	 {
		 this.productID=0;
		 this.name='';
		 this.price=0;
		 this.category='';
		 this.brandName='';
		 this.numOfBuyers=0;
		 this.numOfVisits=0;
		 this.productsSold=0;
		 this.amount=0;
		 this.owningStore=0;
		 this.shippingAddress='';
		 
	 }
};