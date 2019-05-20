import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        currencyList: [
            { key: 'USD', value: 'USD', text: 'United States Dollar' },
            { key: 'CAD', value: 'CAD', text: 'Canadian Dollar' },
            { key: 'IDR', value: 'IDR', text: 'Indonesian Dollar' },
            { key: 'GBP', value: 'GBP', text: 'British Poundsterling' },
            { key: 'CHF', value: 'CHF', text: 'Swiss Franc' },
            { key: 'SGD', value: 'SGD', text: 'Singapore Dollar' },
            { key: 'INR', value: 'INR', text: 'Indian Rupee' },
            { key: 'MYR', value: 'MYR', text: 'Malaysian Ringgit' },
            { key: 'JPY', value: 'JPY', text: 'Japanese Yen' },
            { key: 'KRW', value: 'KRW', text: 'South Korean Won' },
            { key: 'EUR', value: 'EUR', text: 'Euro' }
        ],
        exchangeRatesApi: 'https://api.exchangeratesapi.io/latest?base=USD&symbols=',
        rates: [],
        currency: ["IDR", "EUR", "GBP", "SGD"],
        conversionValue: 1,
        addNewCurrency: '',
    },
    getters: {},
    mutations: {
        updateConversionValue: (state, payload) => {
            console.log("called!!");
            for (var i = 0; i < state.rates.length; i++) {
                state.rates[i].rate = (parseFloat(state.rates[i].rateOfOne) * payload).toFixed(4);
            }
            // var updatedRates = state.rates;
            // commit('setRates', updatedRates);
            state.conversionValue = payload;
            // update rates with value conversion required by user
        },
        setRates(state, payload) {
            state.rates = payload;
        }
    },
    actions: {
        async fetchCurrencyRates({
            state,
            commit
        }, payload) {
            try {
                await axios.get(`${state.exchangeRatesApi}${state.currency.join(',')}`).then(response => {
                    var rates = response.data.rates;
                    var updatedRates = []; //state.currencyList.slice(0);
                    for (var key in rates) {
                        var obj = {};
                        obj.key = key;
                        // These values are for 1 USD. Multiply for the desired payload
                        // if (payload > 0)
                        //     obj.rate = (rates[key] * payload).toFixed(4);
                        // else // use existing value for the first time
                        obj.rate = (rates[key] * state.conversionValue).toFixed(4);
                        obj.rateOfOne = (rates[key] * state.conversionValue).toFixed(4);
                        obj.label = state.currencyList.find(currency => currency.value === key).text;
                        console.log(obj);
                        updatedRates.push(obj);
                    }
                    commit('setRates', updatedRates);
                    // commit('updateConversionValue', payload);
                }).catch(error => {
                    console.log("Error!" + error);
                });
            } catch (error) {
                console.log("Error!" + error);
            }
        }
    }
});