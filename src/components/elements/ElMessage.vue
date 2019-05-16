<template>
<div
  class='el-message el-animation'
  :class="{
    'el-message--warning': warning,
    'el-message--success': success,
    'el-message--info': info,
    'el-message--danger': danger,
    'el-message--clickable': isClickable,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop
  }"
  @click="clickInvoker"
  >
  <span
    v-if="warning"
    class="el-message__icon"
    v-html="icon.warning"
    />
  <span
    v-else-if="danger"
    class="el-message__icon"
    v-html="icon.danger"
    />
  <slot />
</div>
</template>

<script>

import svgIcons from 'script/svg'

export default {
  name: 'ElMessage',
  props: {
    warning: Boolean,
    success: Boolean,
    info: Boolean,
    danger: Boolean,
    marginRight: Boolean,
    marginTop: Boolean
  },
  data () {
    return {
      icon: {
        warning: svgIcons.warning,
        danger: svgIcons.dangerWarning
      },
      isClickable: false
    }
  },
  mounted () {
    if (this.$listeners && this.$listeners.click) {
      this.isClickable = true
    }
  },
  methods: {
    clickInvoker () {
      if (this.$listeners && this.$listeners.click) {
        this.$emit('click')
      }
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .el-message {
    position: relative;
    width: 100%;
    min-width: @element-min-width;
    height: auto;
    margin-top: @top-margin-element;
    background-color: @color-grey-super-light;
    padding: 10px 15px;
    font-size: @font-size-small;
    border-radius: @radius-small;
    box-sizing: border-box;

    &--clickable {
      cursor: pointer;

      &:hover {
        box-shadow: @shadow;
      }

      &:active {
        transform: scale(1.01);
      }
    }

    &--warning {
      background-color: @color-warning-light;
      border-left: 10px solid @color-warning-medium;
      color: @color-warning-dark;
    }

    &--success {
      background-color: @color-success-light;
      border-left: 10px solid @color-success-medium;
      color: @color-success-dark;
    }

    &--info {
      background-color: @color-info-light;
      border-left: 10px solid @color-info-medium;
      color: @color-info-dark;
    }

    &--danger {
      background-color: @color-danger-light;
      border-left: 10px solid @color-danger-medium;
      color: @color-danger-dark;
    }

    &__icon {
      margin-right: 10px;
      height: 100%;
      position: relative;
      top: 2px;
    }
  }
</style>
