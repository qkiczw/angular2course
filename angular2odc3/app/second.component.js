(function(app){
    
    var Component = ng.core.Component;
    var QuoteService = app.QuoteService;

    app.SecondComponent = Component({
        selector: 'second',
        providers: [
            {provide: QuoteService, useClass: QuoteService}
        ],
        template: '<p><em>{{quote.cytat}}</em></p><small>{{quote.autor}}</small>'
    })
    .Class({
        constructor: [QuoteService, function SecondComponent(quoteService){
            var self = this;
            quoteService.generateRandomQuotes(2000, function(quote){
                self.quote = quote;
            });
        }],
        
    })

})(window.app || (window.app = {}));