import { Component } from '@angular/core';
import {ExchangeService} from './exchangeService';

@Component({
  selector: 'converter',
  providers: [ExchangeService],
  template: `<input type="number" [(ngModel)]="baseAmount" [ngClass]="{error:isValid(baseAmount), warning:baseAmount < 0}"> {{baseCurrency}}
            = <strong>{{targetAmount}}</strong> {{targetCurrency}}
            `,
  styles: [`input[type=number] {
              width: 10ex; text-align: right;
            }
            .error{
              background-color: #ff5555;
            }
            .warning{
              background-color: green;
            }
            `

  ]
})
export class AppComponent {

  baseCurrency = 'USD';
  targetCurrency = 'GBP';
  baseAmount = 1;

  constructor(private exchangeService: ExchangeService){}
  
  get targetAmount(){
    const exchangeRate = this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);
    return this.baseAmount * exchangeRate;
  };

  isValid(value){
    return !Number.isFinite(this.baseAmount)
  }
}
