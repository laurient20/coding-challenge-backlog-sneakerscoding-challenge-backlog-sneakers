import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import{ProductService} from '../services/product.service';

@Component({
  //selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
   pageTitle : string = 'Sneakers List';
   imageWidth : number = 50;
   imageMargin : number = 2;
   showImage : boolean = false;
   //listFilter: string = 'sneaker';

   _listFilter: string;

   get listFilter(): string{
     return this._listFilter;
   }

   set listFilter(value: string){
     this._listFilter= value;
     this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
   }

   filteredProducts: IProduct[];

   products :IProduct[] = [];

   constructor(private productService: ProductService){
   }

   performFilter(filterBy: string) : IProduct[]{
     filterBy = filterBy.toLocaleLowerCase();
     return this.products.filter((product: IProduct) =>
        product.brandName.toLocaleLowerCase().indexOf(filterBy) !== -1);
   }
   ngOnInit(): void{
     console.log('In OnInit');

     this.productService.getProducts().subscribe(
       products => {
         this.products = products;
         this.filteredProducts = this.products;
       }
       //,
       //error => this.errorMessage = <any>error
     );

   }

   toggleImage() : void{
     this.showImage = !this.showImage;
   }
}