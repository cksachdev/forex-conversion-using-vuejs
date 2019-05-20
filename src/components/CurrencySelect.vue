<template>
  <el-select
    v-model="value"
    filterable
    placeholder="(+) Add more currencies"
    @change="handleCurrencySelect"
  >
    <el-option
      v-for="item in this.$store.state.currencyList"
      :key="item.key"
      :label="item.text"
      :value="item.value"
      no-match-text="No match"
      no-data-text="No match"
    >
      <span style="float: left">{{ item.text }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
</template>

<script>
export default {
  data () {
    return {
      currencyList: this.$store.state.currencyList,
      value: ''
    }
  },
  methods: {
    handleCurrencySelect (value) {
      console.log(value);
      this.$store.state.currency.push(value);
      this.$store.dispatch('fetchCurrencyRates');
    }
  }
}
</script>

<style scoped>
.el-select {
  width: 100%;
}
</style>