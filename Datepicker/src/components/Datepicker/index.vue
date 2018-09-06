<template>
  <el-form style="display:flex">
    <el-form-item>
      <el-select v-model="year" placeholder="年">
        <el-option v-for="(item,index) in yearList" :key="index" :value="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item ref="month" class="month input-item">
      <el-select v-model="month" placeholder="月">
        <el-option v-for="(item,index) in monthList" :key="index" :value="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item ref="day">
      <el-select v-model="day" class="day input-item" placeholder="日">
        <el-option v-for="(item,index) in dayList" :key="index" :value="item"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
//import { Form, Select, Option, OptionGroup } from 'element-ui'
export default {
  data() {
    let getYearList = () => {
      const legalYear = new Date().getFullYear() - 18
      console.log(legalYear)
      let yearList = []
      for (let i = 0; i < 80; i++) {
        yearList.push(legalYear - i)
      }
      console.log(yearList)
      return yearList
    }
    let getMonthList = () => {
      let monthList = []
      for (let i = 0; i < 12; i++) {
        monthList.push(i + 1)
      }
      console.log(monthList)
      return monthList
    }
    let getDayList = (year, month) => {
      let dayList = []
      if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30
      }
      if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          return d = 29
        } else {
          return d = 28
        }
      }
      return d=31
      for (let i = 0; i < d; i++) {
        dayList.push(i + 1)
      }
      console.log(dayList)

      return dayList
    }
    /*  var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      }; */

    return {
      day: '',
      month: '',
      year: '',
      yearList: getYearList(),
      monthList: getMonthList(),
      dayList: getDayList()
    }
  },
  mounted() {},
  computed: {},
  method: {
    getDayCountOfMonth(year, month) {}
  }
}
</script>

<style>
</style>
