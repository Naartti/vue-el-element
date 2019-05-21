<template>
<div
  class="el-inline"
  :class="{
    'el-inline--center': center,
    'el-inline--nowrap': !wrap,
    'el-inline--stretch': stretch,
    'el-inline--space-between': spaceBetween,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  @click="click"
  >
  <slot />
</div>
</template>
<script>
export default {
  name: 'ElInline',
  props: {
    center: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: true
    },
    stretch: {
      type: Boolean,
      default: false
    },
    spaceBetween: {
      type: Boolean,
      default: false
    },
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  },
  methods: {
    click () {
      if (this.$listeners && this.$listeners.click) {
        this.$emit('click')
      }
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables';

  .el-inline {
    position: relative;
    width: auto;
    min-width: @element-min-width;
    height: auto;
    min-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    &--center {
      justify-content: center;
    }

    &--nowrap {
      flex-wrap: nowrap !important;
    }

    &--stretch {
      width: 100%;
    }

    &--space-between {
      justify-content: space-between;
    }
  }
</style>
