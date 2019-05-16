<template>
<div>
  <h3>Font family</h3>
  <p ref="fontFinder">@font-family: {{fontFamily}}</p>
  <el-delimiter />

  <h1>Main header [h1]</h1>
  <p>@font-size-xx-large</p>
  <el-delimiter />

  <h2>Secondary header [h2]</h2>
  <p>@font-size-x-large</p>
  <el-delimiter />

  <h3>Sub sub header [h3]</h3>
  <p>@font-size-large</p>
  <el-delimiter />

  <h4>Sub sub sub header [h4]</h4>
  <p>@font-size-medium</p>

  <el-delimiter />
  <p>Regular text</p>
  <p>@font-size-small</p>
</div>
</template>
<script>
export default {
  data () {
    return {
      fontFamily: ''
    }
  },
  mounted () {
    this.fontFamily = window.getComputedStyle(this.$refs.fontFinder, null).getPropertyValue('font-family')
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables.less';
</style>
