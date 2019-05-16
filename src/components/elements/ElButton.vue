<template>
<button
  type="button"
  @click="next"
  class="el-button el-animation"
  :class="{
    'el-button--icon': icon === true,
    'el-button--primary': !disabled && !secondary && !danger,
    'el-button--disabled': disabled && !secondary,
    'el-button--secondary--disabled': disabled && secondary,
    'el-button--danger': danger && !secondary && !disabled,
    'el-button--secondary': secondary && !danger && !disabled,
    'el-button--secondary--danger': danger && secondary && !disabled,
    'el-button--link': link,
    'el-align--right': right,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop
  }"
  >
  <el-tooltip
    v-if="tooltip !== ''"
    :delay="true"
    >
    {{tooltip}}
  </el-tooltip>
  <slot />
</button>
</template>
<script>

import ElTooltip from './ElTooltip.vue'

export default {
  components: { ElTooltip },
  name: 'ElButton',
  props: {
    disabled: Boolean,
    danger: Boolean,
    secondary: Boolean,
    link: Boolean,
    right: Boolean,
    icon: Boolean,
    marginRight: Boolean,
    marginTop: Boolean,
    tooltip: {
      type: String,
      default: ''
    }
  },
  methods: {
    next () {
      if (this.disabled === true) return

      this.$emit('click')

      setTimeout(() => {
        if (this.$el && this.$el.blur) {
          this.$el.blur()
        }
      }, 400)
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables';

  .el-button {
    padding: @button-padding;
    text-decoration: bold;
    text-transform: none;
    cursor: pointer;
    font-size: @button-font-size;
    border-radius: @button-radius;
    height: @button-height;
    min-height: @button-height;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    &--primary {
      background-color: @color-button-primary;
      border: 1px solid @color-button-primary;
      color: #ffffff;

      &:hover {
        background-color: @color-button-primary-hover;
        border: 1px solid @color-button-primary-hover;
      }
    }

    &--secondary {
      color: @color-button-secondary;
      border: 1px solid @color-button-secondary;
      background-color: transparent;

      &:hover {
        color: @color-button-secondary-hover;
        border: 1px solid @color-button-secondary-hover;
      }

      &--disabled {
        background-color: transparent;
        border: 1px solid @color-disable-dark;
        color: @color-disable-dark;
      }

      &--danger {
        background-color: transparent;
        color: @color-button-danger;
        border: 1px solid @color-button-danger;

        &:hover {
          color: @color-button-danger-hover;
          border: 1px solid @color-button-danger-hover;
        }
      }
    }

    &--disabled {
      background-color: @color-disable-dark;
      border: 1px solid @color-disable-dark;
      color: #ffffff;
    }

    &--danger {
      background-color: @color-button-danger;
      border: 1px solid @color-button-danger;
      color: #ffffff;

      &:hover {
        background-color: @color-button-danger-hover;
        border: 1px solid @color-button-danger-hover;
      }
    }

    &--icon {
      width: @button-height;
      min-width: @button-height;
      padding: 0px;
    }

    &--link {
      background-color: transparent;
      border: none;
      color: @color-button-primary;

      &:hover {
        background-color: transparent;
        border: none;
        color: @color-button-link;
        text-decoration: underline;
      }
    }
  }
</style>
