import { Component, OnInit } from '@angular/core';


//importing service
import{DataService} from '../data.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  headers: Observable<any>;
  
  //injecting 
  constructor(private dataService:DataService) {
    this.headers = this.dataService.getService();
  }
  // postData() {
  //   this.dataService.postService(id).subscribe(
  //     (data) => {
  //       alert("Data Stored Success");
  //     },
  //     (err) => {
  //       alert("Data Error");
  //     },
  //     () => {
  //       alert("Complete");
  //     }
  //   );
  // }

  deleteProduct(id) {
    this.dataService.delProduct(id).subscribe(
      () => {
        alert("Product Deleted. Please reload to see the results");
      },
      (err) => {},
      () => {}
    );
  }

}
