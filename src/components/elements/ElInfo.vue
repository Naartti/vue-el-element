<template>
<div
  class='el-info'
  :class="{
    'el-info--highlight': highlight === true,
    'el-animation': highlight === true,
    'el-info--clickable': clickable,
    [marginClassName]: true,
  }"
  @click="$emit('click')"
  @mouseover="$emit('mouseover')"
  @mouseleave="$emit('mouseleave')"
  >

  <slot />
</div>
</template>
<script>
import margin from '@/util/mixins/margin'

export default {
  name: 'ElInfo',
  mixins: [margin],
  props: {
    highlight: Boolean
  },
  computed: {
    clickable () {
      return this.$listeners && this.$listeners.click
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables.less';

  .el-info {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 30px;
    font-size: 12px;
    text-align: left;
    margin-top: @top-margin-element;
    color: @color-grey-7;
    background-color: @color-grey-1;
    padding: 6px 10px;

    border: 1px solid @color-grey-2;
    border-radius: @radius-small;
    outline: none;
    box-sizing: border-box;

    &--clickable {
      cursor: pointer;
    }

    &--highlight {
      border: @highlight-border;
      cursor: pointer;

      &:hover {
        box-shadow: @shadow;
      }
    }
  }
</style>
