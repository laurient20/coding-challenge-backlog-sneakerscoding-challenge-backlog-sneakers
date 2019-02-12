import { Component, OnInit } from '@angular/core';
import { SneakerService } from '../../services/sneaker.service';

@Component({
  selector: 'pm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private sneakers;

  constructor(private sneakerService : SneakerService) { }

  ngOnInit() {
    this.getSneakers();
  }

  getSneakers(){
    this.sneakerService.getSneakers().subscribe(
      data => { this.sneakers = data},
      err => console.error(err),
      () => console.log('sneakers loaded')
    );
  }

}
