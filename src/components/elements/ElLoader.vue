<template>
<div
  ref="lineLoader"
  class="el-loader"
  :class="{
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  >
  <svg
    class="el-loader__loader"
    v-if="paused === false"
    width="100%"
    :height="`${height}px`"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    >
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <rect
        class="el-loader--color"
        :x="x"
        :y="y"
        :width="width"
        :height="height"
        rx="2"
        />
    </g>
  </svg>
</div>
</template>
<script>
export default {
  props: {
    paused: Boolean,
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  },
  data () {
    return {
      x: 0,
      y: 0,
      height: 5,
      width: 200,
      totalWidth: 1000,
      smoothDelay: 10,
      roughDelay: 40,
      isRunning: false,
      forwardDirection: true
    }
  },
  mounted () {
    let container = this.$refs.lineLoader
    this.totalWidth = container.getBoundingClientRect().width

    this.animateStep()
  },
  methods: {
    animateStep () {
      if (this.isRunning) return

      this.isRunning = true

      let percentage = this.x / this.totalWidth
      let stepSize = 10 + 10 * percentage * percentage

      this.x = this.forwardDirection === true
        ? this.x + stepSize
        : this.x - stepSize

      if (this.x > this.totalWidth) {
        this.forwardDirection = false
      } else if (this.x < -this.width) {
        this.forwardDirection = true
      }

      if (this.paused === false) {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(() => {
            setTimeout(() => {
              this.isRunning = false
              this.animateStep()
            }, this.smoothDelay)
          })
        } else {
          setTimeout(() => {
            this.isRunning = false
            this.animateStep()
          }, this.roughDelay)
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables';

  .el-loader {
    position: relative;
    top: 0px;
    left: 0px;
    height: 5px;
    width: 100%;
    margin: auto;

    &__loader {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }

    &--color {
      fill: @color-brand;
    }
  }
</style>
