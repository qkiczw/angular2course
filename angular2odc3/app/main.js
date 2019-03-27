(function(app){
    
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();
    var Class = ng.core.Class;
    var QuoteService = app.QuoteService;


    var TestService = Class({
        constructor: function() {},
        getRandomQuote: function(){
            return {
                cytat: 'Cytat testowy',
                autor: 'Autor Testowy'
            }
        }
    });

    var SecondComponent = Component({
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

    var AppComponent = Component({
        selector: 'my-app',
        template: `<h1>Angular 2.0 - Hello World!!!</h1> 
                  <second></second>
                  <second></second>`
    })
    .Class({
        constructor: function AppComponent(){}
    });

    var AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, SecondComponent],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: function(){}
    })
    platformBrowserDynamic.bootstrapModule(AppModule);

})(window.app || (window.app = {}));