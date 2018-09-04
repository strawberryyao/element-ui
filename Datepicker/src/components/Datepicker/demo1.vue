<template>
  <div>
    <div>
      <input type="text" :value="formatDate">
    </div>
    <div>
      <select name="years" id="years" v-model="value1">
        <option v-for="item in years" :key="item" :value="item">{{item}}</option>
      </select>
      <select name="months" id="months" v-model="value2">
        <option v-for="item in months" :key="item" :value="item">{{item}}</option>
      </select>
      <select name="days" id="days" v-model="value3">
        <option v-for="item in days" :key="item" :value="item">{{item}}</option>
      </select>
    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        years: [2018, 2017, 2016],
        value1: '',
        months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        value2: '',
        days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        value3: ''
      }
    },
    computed: {
      formatDate() {
        return this.value1 + '/' + this.value2 + '/' + this.value3
      }
    },
    methods:{
      handleYear(){
        const years = new Date.now()
      }
    }
  }
</script>

<style>

</style>
