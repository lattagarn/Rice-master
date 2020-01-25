import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.page.html',
  styleUrls: ['./p1.page.scss'],
})
export class P1Page implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }
  callNow(number) {
     this.callNumber.callNumber(number, true)
       .then(res => console.log('Launched dialer!', res))
       .catch(err => console.log('Error launching dialer', err));
   }
}
