import { Product } from "./Product";
import { Store } from "./Store";

export class Command{
	
	id:number;
    productID:number;
	name:string;
	price:number;
	operationName:string;
	operationID:number;
    category:string;
	brandName:string;
	numOfVisits:number;
	productsSold:number;
	numOfBuyers:number;
	owningStore:number;
    amount:number;
	shippingAddress:string;
	constructor(operationName:string)
	{
		this.operationName=operationName;
	}
};
