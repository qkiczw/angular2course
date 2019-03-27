(function(){
    
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();
    var Class = ng.core.Class;

    var QuoteService = Class({
        constructor: function(){
            this.quotes = quotes;
        },
        getRandomQuote: function(){
            var randomIndex = Math.floor(Math.random() * quotes.length);
            return this.quotes[randomIndex];
        }
    })

    var SecondComponent = Component({
        selector: 'second',
        template: '<p><em>{{quote.cytat}}</em></p><small>{{quote.autor}}</small>'
    })
    .Class({
        constructor: function(){
            var quoteService = new QuoteService();
            this.quote = quoteService.getRandomQuote();
        },
        
    })

    var AppComponent = Component({
        selector: 'my-app',
        template: `<h1>Angular 2.0 - Hello World!!!</h1> <second></second>`
    })
    .Class({
        constructor: function(){}
    });

    var AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, SecondComponent],
        providers: [QuoteService],
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