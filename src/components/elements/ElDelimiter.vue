<template>
<div
  class='el-delimiter'
  :class="{
    'el-delimiter--short' : short === true,
    [marginClassName]: true,
  }"
  >
  <div
    class='el-delimiter__line'
    :class="{
      'el-delimiter__line--short' : short === true,
      'el-delimiter__line--dark' : dark === true
    }"
    />
</div>
</template>
<script>
import margin from '@/util/mixins/margin'

export default {
  name: 'ElDelimiter',
  mixins: [margin],
  props: {
    short: Boolean,
    dark: Boolean
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables';

  .el-delimiter {
    position: relative;
    width: 100%;
    height: 70px;

    &--short {
      height: 30px;
    }

    &__line {
      position: absolute;
      width: 100%;
      height: 1px;
      top: 35px;
      background-color: @color-grey-2;

      &--short {
        top: 10px;
      }

      &--dark {
        background-color: @color-grey-5;
      }
    }
  }
</style>
