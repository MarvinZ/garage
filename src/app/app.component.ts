
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'garage';
  // currentCustomer = 'marvin';
  garage1 = true;
  garage2 = true;

  notProgrammed () {
    alert('This button is not programmed yet');
  }

  OpenClose (door: number) {
    if (door===1){
      this.garage1 = !this.garage1;
    }
    if (door===2){
      this.garage2 = !this.garage2;
    }
  }
}
