<template>
<div
  class="el-column"
  :class="{
    'el-column--wrap': wrap,
    [marginClassName]: true,
  }"
  >
  <slot />
</div>
</template>
<script>
import margin from '@/util/mixins/margin'

export default {
  mixins: [margin],
  props: {
    wrap: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~el-style/variables.less';

  .el-column {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: stretch;

    div:first-child {
      margin-left: 0px;
    }
  }

  .el-column--wrap {
   flex-direction: column;

    div.el-column-item {
      margin-left: 0px;
      width: 100%;
      margin-bottom: @bottom-margin-section;
    }
  }
</style>
