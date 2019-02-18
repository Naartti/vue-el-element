<template>
<div class="el-tooltip animation"
  v-show="isHighlighted && isStillHighlighted"
  >
  <span v-if="content !== ''" v-html="content" />
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
      this.isHighlighted = true

      if (!this.delay) {
        this.isStillHighlighted = true
      } else {
        setTimeout(() => {
          if (this.isHighlighted) {
            this.isStillHighlighted = true
            this.checkPosition()
          }
        }, this.delayDuration)
      }
    },
    hide () {
      this.isHighlighted = false
      this.isStillHighlighted = false
    },
    checkPosition () {
      const rect = this.$el.getBoundingClientRect()

      if (rect.y <= 0) {
        this.$el.style.transform = `translateY(${-rect.y}px)`
      }
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
    background-color: #222222;
    box-shadow: @shadow;
    color: #ffffff;
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
      border-color: #222222 transparent transparent transparent;
    }
  }
</style>
