<template>
<div
  class="el-tooltip"
  v-show="isHighlighted && isStillHighlighted"
  >

  <span
    v-if="content !== ''"
    v-html="content"
    />

  <slot />
</div>
</template>
<script>

export default {
  name: 'ElTooltip',
  props: {
    content: {
      type: String,
      default: ''
    },
    delay: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isHighlighted: false,
      isStillHighlighted: false,
      delayDuration: 400
    }
  },
  mounted () {
    const parent = this.$el.parentNode

    if (!parent) return

    parent.addEventListener('mouseover', this.show)
    parent.addEventListener('mouseleave', this.hide)
  },
  destroyed () {
    const parent = this.$el.parentNode

    if (!parent) return

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
      this.$el.style.transform = 'none'
    },
    checkPosition () {
      if (!this.isHighlighted) {
        return
      }

      const windowWidth = window.innerWidth
      const rect = this.$el.getBoundingClientRect()
      let x = 0
      let y = 0

      if (rect.top <= 0) {
        y = -rect.top
      }

      if (windowWidth < rect.left + rect.width) {
        x = -((rect.left - windowWidth) + rect.width)
      }

      this.$el.style.transform = `translateY(${y}px) translateX(${x}px)`
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables';

  .el-tooltip {
    display: flex;
    position: absolute;
    bottom: ~"Calc(100% + 5px)";
    left: auto;
    height: auto;
    width: auto;
    background-color: @color-grey-super-dark;
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

    &::after {
      content: " ";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -10px;
      border-width: 10px;
      border-style: solid;
      border-color: @color-grey-super-dark transparent transparent transparent;
    }
  }
</style>
