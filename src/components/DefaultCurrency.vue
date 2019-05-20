/* eslint-disable no-console */
/* eslint-disable no-console */
<template>
  <el-container>
    <el-main>
      <el-header>USD - United States Dollars</el-header>

      <el-row :gutter="0">
        <el-col :span="16">
          <div class="grid-content">
            USD - United States Dollar
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <el-input-number
              v-model="num"
              :precision="4"
              :step="1"
              :min="1"
              @change="handleChange"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>

</template>

<script>
export default {
  name: 'DefaultCurrency',
  data: function () {
    return {
      num: this.$store.state.conversionValue
    }
  },
  props: {
  },
  created () {
    this.$store.dispatch('fetchCurrencyRates');
  },
  methods: {
    handleChange (newValue) {
      // this.$store.commit('updateConversionValue');
      console.log("default value change!!");
      this.$store.commit('updateConversionValue', newValue);
      //.conversionValue = newValue;
      // this.$store.dispatch('fetchCurrencyRates', newValue);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #ffff;
  color: #333;
  line-height: 60px;
  font-weight: bold;
  font-style: italic;
}
.el-main {
  background-color: #fff;
  color: #333;
  line-height: 60px;
  font-weight: bold;
  padding: 0;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 20px;
  padding: 0 0 0 20px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
