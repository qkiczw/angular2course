(function(app){
  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;

app.SecondComponent = Component({
    selector:'second',
    template:'<p><em>{{quote.line}}</em>{{quote.author}}</p>'
})
.Class({
    constructor: [QuoteService, function SecondComponent (quoteService){
       quoteService.generateRandomQuotes(2000, quote => this.quote = quote );
    }]
});

})(window.app || (window.app = {}));