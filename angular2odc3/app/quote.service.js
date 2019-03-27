(function(app){
    
    var Class = ng.core.Class;

    app.QuoteService = Class({
        constructor: function QuoteService(){
            this.quotes = quotes;
        },
        getRandomQuote: function(){
            var randomIndex = Math.floor(Math.random() * quotes.length);
            return this.quotes[randomIndex];
        },
        generateRandomQuotes: function(delay,callback){
            var self = this;
            callback(this.getRandomQuote());
            setInterval(function(){
                callback(self.getRandomQuote());
            },delay);
        }
    });

    var quotes = [
        {cytat: 'To, że milczę, nie znaczy, że nie mam nic do powiedzenia.', autor: 'Johnatan Caroll'},
        {cytat: 'Lepiej zaliczać się do niektórych, niż do wszystkich.', autor: 'Andrzej Sapkowski'},
        {cytat: 'Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła.', autor: 'Wisława Szymborska'},
    ]
})(window.app || (window.app = {}));