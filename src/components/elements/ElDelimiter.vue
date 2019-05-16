<template>
<div
  class='el-delimiter'
  :class="{
    'el-delimiter-short' : short === true
  }"
  >
  <div
    class='el-delimiter-line'
    :class="{
      'el-delimiter-line-short' : short === true,
      'el-delimiter-line-dark' : dark === true
    }"
    />
</div>
</template>
<script>
export default {
  name: 'ElDelimiter',
  props: {
    short: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables';

  .el-delimiter {
    position: relative;
    width: 100%;
    height: 70px;
  }

  .el-delimiter-short {
    height: 30px;
  }

  .el-delimiter-line {
    position: absolute;
    width: 100%;
    height: 1px;
    top: 35px;
    background-color: @color-grey-light;
  }

  .el-delimiter-line-short {
    top: 10px;
  }

  .el-delimiter-line-dark {
    background-color: @color-grey-dark;
  }
</style>
