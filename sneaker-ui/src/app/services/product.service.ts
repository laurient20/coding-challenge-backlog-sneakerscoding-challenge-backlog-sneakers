import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduct } from '../products/product';

const httOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private productUrl: string = 'http://localhost:4200/server/api/v1/sneakers';

  constructor(private http: HttpClient){}

  getProducts() : Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  
  getProduct(id: number): Observable<IProduct | undefined> {
   return this.getProducts().pipe(
     map((products: IProduct[]) => products.find(p => p.id === id))
   );
 }



  private handleError(err: HttpErrorResponse){
    //in a real world app, we may send the server to some remote logging infrastrucre
    //instead of kust loggig it to the console
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      //A client-side or network error occured. Handle it accordingly
      errorMessage = `An error occured: ${err.error.message}`;
    }else{
      //The backend returned an unsuccessful response Code
      //The response body may contain clues as to what went wrong
      errorMessage = `Server returned Code : ${err.status}, error message is : ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  //getProducts() : IPoduct[]{
  //  return  this.http.get('/server/api/v1/sneakers');
//  }

  /*
  getProducts() : IProduct[]{
    return[
      {
        "productId" : 1,
        "productName" : "Tennis shoe monocolor",
        "productCode" : "CDN-0023",
        "releaseDate" : "March 18, 2018",
        "price" : 32.98,
        "starRating": 4.2,
        "description" : "White and yellow sneaker with pale blue laces.",
        "imageUrl" : "https://openclipart.org/image/800px/svg_to_png/262588/Tennis-Shoe-monocolor.png"
      },
      {
        "productId" : 3,
        "productName" : "Sideview ",
        "productCode" : "CDN-0023",
        "releaseDate" : "March 18, 2018",
        "price" : 32.98,
        "starRating": 4.2,
        "description" : "White and yellow sneaker with pale blue laces.",
        "imageUrl" : "https://openclipart.org/image/800px/svg_to_png/28152/gingercoons-Sideview-Sneaker.png"
      },
      {
        "productId" : 4,
        "productName" : "sneaker",
        "productCode" : "CDN-0023",
        "releaseDate" : "March 18, 2018",
        "price" : 32.98,
        "starRating": 4.2,
        "description" : "White and yellow sneaker with pale blue laces.",
        "imageUrl" : "https://openclipart.org/image/800px/svg_to_png/46099/sneaker1.png"
      },
      {
        "productId" : 5,
        "productName" : "slip",
        "productCode" : "CDN-0023",
        "releaseDate" : "March 18, 2018",
        "price" : 32.98,
        "starRating": 4.2,
        "description" : "White and yellow sneaker with pale blue laces.",
        "imageUrl" : "https://openclipart.org/image/800px/svg_to_png/297694/slip-ons.png"
      },
      {
        "productId" : 6,
        "productName" : "Garden Cart",
        "productCode" : "CDN-0023",
        "releaseDate" : "March 18, 2018",
        "price" : 32.98,
        "starRating": 4.2,
        "description" : "White and yellow sneaker with pale blue laces.",
        "imageUrl" : "https://openclipart.org/image/800px/svg_to_png/306747/1537122564.png"
      },
      {
        "productId" : 7,
        "productName" : "Garden Cart",
        "productCode" : "CDN-0023",
        "releaseDate" : "March 18, 2018",
        "price" : 32.98,
        "starRating": 4.2,
        "description" : "White and yellow sneaker with pale blue laces.",
        "imageUrl" : "https://openclipart.org/image/800px/svg_to_png/308649/1540183692.png"
      },
      {
        "productId" : 8,
        "productName" : "Garden Cart",
        "productCode" : "CDN-0023",
        "releaseDate" : "March 18, 2018",
        "price" : 32.98,
        "starRating": 4.2,
        "description" : "White and yellow sneaker with pale blue laces.",
        "imageUrl" : "https://openclipart.org/image/800px/svg_to_png/313162/1546722586.png"
      },
      {
        "productId" : 9,
        "productName" : "Garden Cart",
        "productCode" : "CDN-0023",
        "releaseDate" : "March 18, 2018",
        "price" : 32.98,
        "starRating": 4.2,
        "description" : "White and yellow sneaker with pale blue laces.",
        "imageUrl" : "https://openclipart.org/image/800px/svg_to_png/308649/1540183692.png"
      }
    ];
  }
  */
}
