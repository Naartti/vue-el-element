<template>
<button type="button"
  @click="next"
  class="buttonStyle animation"
  v-bind:class="{
    disabled,
    disabledSecondary: disabled && secondary,
    danger,
    secondary,
    dangerSecondary: danger && secondary && !disabled,
    right,
    marginRight,
    marginTop
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

export default {
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
  @import '../style/variables';

  .buttonStyle {
    padding: 5px @button-padding;
    text-decoration: bold;
    text-transform: none;
    cursor: pointer;
    font-size: @button-font-size;
    border-radius: @button-radius;
    height: @button-height;
    min-height: @button-height;
    white-space: nowrap;
    background-color: @blue-main;
    border: 1px solid @blue-main;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }

  .disabled {
    background-color: @disable-dark !important;
    border: 1px solid @disable-dark !important;
  }

  .disabledSecondary {
    color: @disable-dark !important;
  }

  .secondary {
    color: @blue-main;
    background-color: transparent !important;
  }

  .dangerSecondary {
    color: @red !important;
  }

  .danger {
    background-color: @red;
    border: 1px solid @red;
    color: #ffffff;
  }

  .right {
    align-self: flex-end;
  }

  .marginRight {
    margin-right: @side-margin;
  }

  .marginTop {
    margin-top: @top-margin-element;
  }
</style>
