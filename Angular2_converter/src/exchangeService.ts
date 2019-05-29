export class ExchangeService{

    supportedCurrencies = ['EUR', 'USD', 'GBP'];

    private exchangeRates = {
        'USD/GBP': 0.70,
        'USD/EUR': 1.30,
        'EUR/USD': 1.10,
        'GBP/EUR': 1.24,
        'GBP/USD': 1.42
    }

    getExchangeRate(baseCurrency: string, targetCurrency: string){

        if(baseCurrency === targetCurrency){
            return 1;
        }
        else{
            return this.exchangeRates[baseCurrency + `/` + targetCurrency];
        }
    }
}