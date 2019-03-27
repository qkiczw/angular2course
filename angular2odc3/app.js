(function(){
    
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();
    var Class = ng.core.Class;

    var QuoteService = Class({
        constructor: function QuoteService(){
            this.quotes = quotes;
        },
        getRandomQuote: function(){
            var randomIndex = Math.floor(Math.random() * quotes.length);
            return this.quotes[randomIndex];
        }
    });

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
            {provide: QuoteService, useClass: TestService}
        ],
        template: '<p><em>{{quote.cytat}}</em></p><small>{{quote.autor}}</small>'
    })
    .Class({
        constructor: [QuoteService, function SecondComponent(quoteService){
            this.quote = quoteService.getRandomQuote();
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

    var quotes = [
        {cytat: 'To, że milczę, nie znaczy, że nie mam nic do powiedzenia.', autor: 'Johnatan Caroll'},
        {cytat: 'Lepiej zaliczać się do niektórych, niż do wszystkich.', autor: 'Andrzej Sapkowski'},
        {cytat: 'Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła.', autor: 'Wisława Szymborska'},
    ]
})();