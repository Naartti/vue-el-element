<template>
<div class='delimiter'
  v-bind:class="{
    delimiterShort : short===true
  }">
  <div class='line'
    v-bind:class="{
      lineShort : short===true,
      darkLine : dark===true
    }">
  </div>
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

  .delimiter {
    position: relative;
    width: 100%;
    height: 70px;
  }

  .delimiterShort {
    height: 30px;
  }

  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    top: 35px;
    background-color: @color-grey-light;
  }

  .lineShort {
    top: 10px;
  }

  .darkLine {
    background-color: @color-grey-dark;
  }
</style>
