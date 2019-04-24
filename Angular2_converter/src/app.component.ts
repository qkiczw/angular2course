import { Component } from '@angular/core';

@Component({
  selector: 'converter',
  template: `Przelicz: <input id="baseAmountText" type="number" [(ngModel)]="baseAmount"> USD
            <p>
              <strong>{{baseAmount}}</strong> USD = 
              <strong>{{targetAmount}}</strong> GBP 
            </p>
            `,
  styles: [`input[type=number] {
              width: 10ex; text-align: right;
            }`

  ]
})
export class AppComponent {

  exchangeRate = 0.70;
  baseAmount = 1;
  
  get targetAmount(){
    return this.baseAmount * this.exchangeRate;
  };
}
