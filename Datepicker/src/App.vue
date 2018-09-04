<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
import Datepicker from './components/Datepicker';

export default {
  name: 'App',
  components:{
    Datepicker
  }
}
</script>

<style>
</style>
