import Vue from 'vue'

export default {
    loadData({ commit }) {
        Vue.prototype.$http.get('data.json').then(resp => {
            let data = resp.data
            if (data) {
                commit('setStocks', data.stocks)
                commit('setPortfolio', {
                    funds: data.funds,
                    stockPortfolio: data.stockPortfolio
                })
            }
        })
    }
}