import { Component } from '@angular/core';

@Component({
  selector: 'converter',
  template: `<input type="number" [(ngModel)]="baseAmount" [class.error]="isValid(baseAmount)"> USD
            = <strong>{{targetAmount}}</strong> GBP 
            `,
  styles: [`input[type=number] {
              width: 10ex; text-align: right;
            }
            .error{
              background-color: #ff5555;
            }
            `

  ]
})
export class AppComponent {

  exchangeRate = 0.70;
  baseAmount = 1;
  
  get targetAmount(){
    console.info(Number.isFinite(this.baseAmount))
    return this.baseAmount * this.exchangeRate;
  };

  isValid(value){
    return !Number.isFinite(this.baseAmount)
  }
}
