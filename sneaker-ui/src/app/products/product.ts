export interface IProduct{
  id : number;
  code : string;
  brandName : string;
  model: string;
	snkSize: number;
  picture: string;
  price: number;
  releaseDate: number;
  description: string;
  starRating: number;
  imageUrl : string;

  //calculateDiscount(percent: number) :number;
}
/*
export class Product implements IProduct{
  constructor(  public productId: number,
                public productName: number,
                public productCode: string,
                public releaseDate: string,
                public price: number,
                public description: string,
                public starRating: number,
                public imageUrl: string){

  }

  calculateDiscount(percent: number) : number{
    return this.price - (this.price * percent / 100);
  }


}
*/
