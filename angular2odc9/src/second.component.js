(function(app){
  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;
  var Inject = ng.core.Inject;

  @Component({
    selector:'second',
    template:'<p><em>{{quote.line}}</em>{{quote.author}}</p>'
  })
  class SecondComponent{
    constructor(@Inject(QuoteService)quoteService){
      quoteService.generateRandomQuotes(2000, quote => this.quote = quote );
   }

  }
app.SecondComponent = SecondComponent;

})(window.app || (window.app = {}));