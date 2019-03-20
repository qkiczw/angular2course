(function(){
    
    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic();

    var AppComponent = Component({
        selector: 'my-app',
        template: '<h1>Angular 2.0 - Hello World!!!</h1>'
    })
    .Class({
        constructor: function(){}
    });

    var AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: function(){}
    })
    platformBrowserDynamic.bootstrapModule(AppModule);
})();