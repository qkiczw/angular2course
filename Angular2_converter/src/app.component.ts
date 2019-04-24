import { Component } from '@angular/core';

@Component({
  selector: 'converter',
  template: `<input id="baseAmountText" type="number" [value]="baseAmount"> USD =
              <strong id="targetAmountText">{{targetAmount}}</strong> GBP 
              <button on-click="update()">Update</button>
              `,
  styles: [`input[type=number] {
              width: 10ex; text-align: right;
            }`

  ]
})
export class AppComponent {

  baseAmount = 1;
  targetAmount = 0.70;

  update(){
    console.info('I`m working !!!!')
  }
}
