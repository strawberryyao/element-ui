<template>
  <div>
    <div style="margin: 20px;">
      <h1>{{$t("message.title")}}</h1>
      <input style="width: 300px;" class="form-control" :placeholder="$t('placeholder.enter')">
      <ul>
        <li v-for="(brand,index) in brands" :key="index">{{brand}}</li>
      </ul>
    </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      brands: [this.$t('brands.nike'), this.$t('brands.adi'), this.$t('brands.nb'), this.$t('brands.ln')]
    }
 },
}
</script>

<style>

</style>
