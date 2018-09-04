<template>
  <el-form style="display:flex">
     <el-form-item  >
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
        monthList.push(i+1)
      }
      console.log(monthList)
      return monthList
    }
    let getDayList = () => {
      let dayList = []
      for (let i = 0; i < 31; i++) {
        dayList.push(i+1)
      }
      console.log(dayList)
      return dayList
    }

    return {
      day: '',
      month: '',
      year:'',
      yearList: getYearList(),
      monthList: getMonthList(),
      dayList: getDayList()
    }
  },
  mounted(){
    // this.getDayCountOfMonth()
  },
  computed:{

  },
  method:{

     getDayCountOfMonth(year,month){

     }
  }
}
</script>

<style>
</style>
