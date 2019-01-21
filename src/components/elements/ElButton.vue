<template>
<button type="button"
  @click="next"
  class="buttonStyle animation"
  v-bind:class="{
    disabled: disabled && !secondary,
    disabledSecondary: disabled && secondary,
    danger: danger && !secondary && !disabled,
    secondary: secondary && !danger && !disabled,
    dangerSecondary: danger && secondary && !disabled,
    right,
    marginRight,
    marginTop,
    primary: !disabled && !secondary && !danger
  }"
  >
  <el-tooltip
    v-if="tooltip !== ''"
    :content="tooltip"
    :delay="true"
    />
  <slot/>
</button>
</template>
<script>

import ElTooltip from './ElTooltip.vue'

export default {
  components: { ElTooltip },
  name: 'ElButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    marginRight: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: Boolean,
      default: false
    },
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

  .buttonStyle {
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
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  .primary {
    background-color: @color-button-primary;
    border: 1px solid @color-button-primary;
    color: #ffffff;

    &:hover {
      background-color: @color-button-primary-hover;
      border: 1px solid @color-button-primary-hover;
    }
  }

  .disabled {
    background-color: @color-disable-dark !important;
    border: 1px solid @color-disable-dark !important;
    color: #ffffff !important;
  }

  .disabledSecondary {
    border: 1px solid @color-disable-dark !important;
    color: @color-disable-dark !important;
  }

  .secondary {
    color: @color-button-secondary;
      border: 1px solid @color-button-secondary;
    background-color: transparent;

    &:hover {
      color: @color-button-secondary-hover;
      border: 1px solid @color-button-secondary-hover;
    }
  }

  .dangerSecondary {
    color: @color-button-danger;
    border: 1px solid @color-button-danger;

    &:hover {
      color: @color-button-danger-hover;
      border: 1px solid @color-button-danger-hover;
    }
  }

  .danger {
    background-color: @color-button-danger;
    border: 1px solid @color-button-danger;
    color: #ffffff;

    &:hover {
      background-color: @color-button-danger-hover;
      border: 1px solid @color-button-danger-hover;
    }
  }

  .right {
    align-self: flex-end;
  }
</style>
