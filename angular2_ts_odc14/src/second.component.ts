import {Component} from '@angular/core';
import {QuoteService} from './quote.service';
import { Quote } from './quote.model';

@Component({
  selector: 'second',
  template: '<p><em>{{quote.line}}</em>{{quote.author}}</p>'
})
export class SecondComponent {

  quote: Quote;

  constructor( quoteService: QuoteService) {
    quoteService.generateRandomQuotes(2000, quote => this.quote = quote);
  }

}
