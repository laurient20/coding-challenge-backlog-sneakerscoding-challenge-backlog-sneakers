import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector : 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent{
  @Input() rating: number = 4;
  starWidth: number;

  //@Output() notify: EventEmitter<string> = new EventEmitter<String>();
  ngOnChanges(): void{
    this.starWidth = this.rating * 75 /5;
  }
}
