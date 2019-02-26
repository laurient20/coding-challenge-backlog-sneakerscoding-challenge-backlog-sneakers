import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'
import { SneakerService } from './services/sneaker.service';
import { ConvertToSpacePipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductCartViewComponent } from './products/product-cart-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailComponent,
    ProductCartViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
      canActivate: [ProductDetailGuard],
      component: ProductDetailComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full'},
      { path: '**', redirectTo: 'products', pathMatch: 'full'}
    ]),
  ],
  providers: [SneakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
