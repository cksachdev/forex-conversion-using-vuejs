/* eslint-disable vue/no-unused-components */
<template>
  <div id="app">
    <DefaultCurrency />
    <ConversionList></ConversionList>
    <CurrencySelect></CurrencySelect>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import DefaultCurrency from './components/DefaultCurrency.vue'
import CurrencySelect from './components/CurrencySelect'
import ConversionList from './components/ConversionList'
Vue.use(Element)
export default {
  name: 'app',
  components: {
    DefaultCurrency,
    CurrencySelect,
    ConversionList,
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
  max-width: 600px;
  border: 1px solid black;
}
</style>
