<template>
  <div id="app">
    <Datepicker/>
    <router-view></router-view>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
import Datepicker from './components/Datepicker/index.vue';
//import Common from './common/Common.vue'

export default {
  name: 'App',
  components:{
    Datepicker,
  // Common
  }
}
</script>

<style>
</style>
