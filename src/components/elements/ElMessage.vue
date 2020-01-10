<template>
<div
  class='el-message el-animation'
  :class="{
    'el-message--warning': warning,
    'el-message--success': success,
    'el-message--info': info,
    'el-message--danger': danger,
    'el-message--clickable': isClickable,
    'el-message--icon': hasIcon,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  @click="$emit('click')"
  @mouseover="$emit('mouseover')"
  @mouseleave="$emit('mouseleave')"
  >
  <span
    v-if="warning && icon"
    class="el-message__icon"
    v-html="iconImage.warning"
    />
  <span
    v-else-if="danger && icon"
    class="el-message__icon"
    v-html="iconImage.danger"
    />
  <slot />
</div>
</template>

<script>

import warningIcon from '@/assets/icons/warning.js'
import dangerWarningIcon from '@/assets/icons/dangerWarning.js'

export default {
  name: 'ElMessage',
  props: {
    warning: Boolean,
    success: Boolean,
    info: Boolean,
    danger: Boolean,
    icon: { type: Boolean, default: true },
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  },
  data () {
    return {
      iconImage: {
        warning: warningIcon,
        danger: dangerWarningIcon
      },
      isClickable: false
    }
  },
  computed: {
    hasIcon () {
      if (!this.icon) {
        return false
      }

      return this.danger || this.warning
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
    background-color: @color-grey-1;
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
      background-color: @color-warning-1;
      border-left: 10px solid @color-warning-4;
      color: @color-warning-7;
    }

    &--success {
      background-color: @color-success-1;
      border-left: 10px solid @color-success-4;
      color: @color-success-7;
    }

    &--info {
      background-color: @color-info-1;
      border-left: 10px solid @color-info-4;
      color: @color-info-7;
    }

    &--danger {
      background-color: @color-danger-1;
      border-left: 10px solid @color-danger-4;
      color: @color-danger-7;
    }

    &--icon {
      padding-left: 30px;
    }

    &__icon {
      position: absolute;
      height: 100%;
      top: 0px;
      left: 7px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
