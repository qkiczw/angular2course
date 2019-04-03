(function(app){
  var Component = ng.core.Component;

  @Component({
    selector: 'my-app',
    template: `<h1>Angular 2.0. Hello World!!!</h1>
              <second></second>`
})

  class AppComponent {

  }

app.AppComponent = AppComponent

})(window.app || (window.app = {}));