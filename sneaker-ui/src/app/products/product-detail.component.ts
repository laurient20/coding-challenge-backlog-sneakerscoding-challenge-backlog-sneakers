import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import{ProductService} from '../services/product.service';


@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Sneaker Detail";
  errorMessage = '';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getProduct(id);
    /*
    this.pageTitle += `: ${id}`;
    this.product = {
      "id" : id,
      "brandName" : "Tennis shoe monocolor",
      'model' : "",
      "code" : "CDN-0023",
      "releaseDate" : 0, //"March 18, 2018"
      "price" : 32.98,
      "starRating": 4.2,
      "snkSize" : 7,
      "picture": "https://openclipart.org/image/800px/svg_to_png/262588/Tennis-Shoe-monocolor.png",
      "description" : "White and yellow sneaker with pale blue laces.",
      "imageUrl" : "https://openclipart.org/image/800px/svg_to_png/262588/Tennis-Shoe-monocolor.png"
    }
    */


  }

  getProduct(id: number) {
   this.productService.getProduct(id).subscribe(
     product => this.product = product
     //error => this.errorMessage = <any>error
    );
   }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
