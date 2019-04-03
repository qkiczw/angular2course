(function(app){
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var QuoteService = app.QuoteService;
  var SecondComponent = app.SecondComponent;
  var AppComponent = app.AppComponent;

  @NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, SecondComponent], 
    providers:[
        {provide: QuoteService, useClass: QuoteService}
        ],  
    bootstrap: [AppComponent]
})
  class AppModule{

  }
  
app.AppModule = AppModule;

})(window.app || (window.app = {}));