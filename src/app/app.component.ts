
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
}
