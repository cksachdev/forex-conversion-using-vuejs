<template>
  <el-row>
    <el-row
      :span="8"
      v-for="(o, index) in this.$store.state.rates"
      :key="index"
    >
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 14px;">
          <div>
            <span style="float:left">{{o.key}}</span>
            <span style="float:right">{{o.rate}}</span>
          </div>

          <div class="bottom clearfix">
            <p>{{o.key}} - {{o.label}}</p>
            <span class="description">1 USD = {{ o.rateOfOne }}</span>
            <el-button
              type="danger"
              class="button"
              @click="handleRemove(index, o.key)"
            >(-)</el-button>
          </div>
        </div>
      </el-card>
    </el-row>
  </el-row>
</template>

<script>
export default {

  components: {
  },
  computed: {
  },
  methods: {
    handleRemove (index, key) {
      // Remove one item at index
      this.$store.state.rates.splice(index, 1);
      // Remove currency from currency array
      for (var i = 0; i < this.$store.state.currency.length; i++) {
        console.log(this.$store.state.currency[i]);
        if (this.$store.state.currency[i] === key) {
          this.$store.state.currency.splice(i, 1);
        }
      }
    }
  }
}
</script>

<style scoped>
.description {
  font-size: 13px;
  color: #999;
}
p {
  font-size: 13px;
  font-style: italic;
  font-weight: bold;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 6px;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>