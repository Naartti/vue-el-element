<template>
<div
  v-show="isVisible"
  class="el-tooltip"
  :class="{
    'el-tooltip--bottom': isBottom,
    'el-tooltip--top': isTop,
    'el-tooltip--left': isLeft,
    'el-tooltip--right': isRight
  }"
  >
  <slot />
</div>
</template>
<script>

export default {
  name: 'ElTooltip',
  props: {
    visible: Boolean,
    bottom: Boolean,
    top: Boolean,
    left: Boolean,
    right: Boolean,
    delay: Boolean,
    delayDuration: {
      type: Number,
      default: 400
    }
  },
  data () {
    return {
      isAboveWindow: false,
      isRightOfWindow: false,
      isLeftOfWindow: false,
      isHighlighted: false,
      isStillHighlighted: false
    }
  },
  computed: {
    isRight () {
      if (this.isRightOfWindow) {
        return false
      }

      if (this.isLeftOfWindow) {
        return true
      }

      return this.right
    },
    isLeft () {
      if (this.isRightOfWindow) {
        return true
      }

      if (this.isLeftOfWindow) {
        return false
      }

      return this.left
    },
    isBottom () {
      if (this.isLeft || this.isRight) {
        return false
      }

      if (this.isAboveWindow) {
        return true
      }

      return this.bottom || this.isAboveWindow
    },
    isTop () {
      if (this.isLeft || this.isRight) {
        return false
      }

      if (this.isAboveWindow) {
        return false
      }

      return this.top || (!this.bottom && !this.isAboveWindow)
    },
    isVisible () {
      return this.visible || (this.isHighlighted && this.isStillHighlighted)
    }
  },
  mounted () {
    const parent = this.$el.parentNode

    if (!parent) {
      return
    }

    parent.addEventListener('mouseover', this.show)
    parent.addEventListener('mouseleave', this.hide)

    if (this.visible) {
      this.show()
    }
  },
  destroyed () {
    const parent = this.$el.parentNode

    if (!parent) {
      return
    }

    parent.removeEventListener('mouseover', this.show)
    parent.removeEventListener('mouseleave', this.hide)
  },
  methods: {
    show () {
      if (this.isStillHighlighted) {
        return
      }

      this.isHighlighted = true

      if (!this.delay) {
        this.isStillHighlighted = true

        this.$nextTick(this.checkPosition)
      } else {
        setTimeout(() => {
          if (this.isHighlighted) {
            this.isStillHighlighted = true
            this.$nextTick(this.checkPosition)
          }
        }, this.delayDuration)
      }
    },
    hide () {
      this.isHighlighted = false
      this.isStillHighlighted = false
      this.isRightOfWindow = false
      this.isLeftOfWindow = false
      this.isAboveWindow = false
    },
    checkPosition () {
      if (!this.isHighlighted) {
        return
      }

      const windowWidth = window.innerWidth
      const rect = this.$el.getBoundingClientRect()

      this.isAboveWindow = rect.top <= 0
      this.isRightOfWindow = windowWidth < rect.left + rect.width
      this.isLeftOfWindow = rect.left <= 0
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables';

  @tooltip-offset: ~"Calc(100% + 5px)";
  @tooltip-offset-negative: ~"Calc(-100% - 5px)";

  .el-tooltip {
    display: flex;
    position: absolute;
    top: auto;
    bottom: @tooltip-offset;
    left: 50%;
    right: auto;
    height: auto;
    width: auto;
    background-color: @color-grey-7;
    box-shadow: @shadow;
    color: @color-font-light;
    z-index: 3;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 3px;
    box-sizing: border-box;
    white-space: nowrap;
    text-align: center;
    align-self: center;
    transform: translateX(-50%);

    &--top {
      // Downwards arrow
      &::after {
        content: " ";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: @color-grey-7 transparent transparent transparent;
      }
    }

    &--bottom {
      bottom: auto;
      top: @tooltip-offset;

      // Downwards arrow
      &::after {
        content: " ";
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent @color-grey-7 transparent;
      }
    }

    &--left {
      bottom: auto;
      top: 50%;
      left: 0px;
      right: auto;
      transform: translateX(@tooltip-offset-negative) translateY(-50%);

      // Downwards arrow
      &::after {
        content: " ";
        position: absolute;
        bottom: auto;
        top: 50%;
        left: 100%;
        margin-left: -1px;
        margin-bottom: auto;
        margin-top: auto;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent transparent @color-grey-7;
        transform: translateY(-50%);
      }
    }

    &--right {
      bottom: auto;
      top: 50%;
      left: @tooltip-offset;
      right: auto;
      transform: translateY(-50%);

      // Downwards arrow
      &::after {
        content: " ";
        position: absolute;
        bottom: auto;
        top: 50%;
        left: 0px;
        margin-left: 1px;
        margin-bottom: auto;
        margin-top: auto;
        border-width: 10px;
        border-style: solid;
        border-color: transparent @color-grey-7 transparent transparent;
        transform: translateY(-50%) translateX(-100%);
      }
    }
  }
</style>
