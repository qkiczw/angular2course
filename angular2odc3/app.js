(function(){
    var AppComponent = ng.core.Component({
        selector: 'my-app',
        template: '<h1>Angular 2.0 - Hello World!!!</h1>'
    })
    .Class({
        constructor: function(){}
    });

    var AppModule = ng.core.NgModule({
        imports: [ng.platformBrowser.BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: function(){}
    })
    ng.platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(AppModule);
})();