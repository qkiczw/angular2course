import { Component } from '@angular/core';
import {ExchangeService} from './exchangeService';

@Component({
  selector: 'converter',
  providers: [ExchangeService],
  template: `<input type="number" [(ngModel)]="baseAmount" [ngClass]="{error:isValid(baseAmount), warning:baseAmount < 0}">
            <currency-select [(selected)]='baseCurrency'></currency-select>
            = <strong>{{targetAmount}}</strong>
            <currency-select [(selected)]='targetCurrency'></currency-select>
            <template [ngIf]="isValid(baseAmount)">
              <p>Proszę podać wartość do przeliczenia</p>
            </template>
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
