<template>
<div
  class="el-slider"
  :class="{
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
>

  <div
    class="el-slider__remaining"
    >

    <div
      class="el-slider__selected"
      :style="`width: ${percentage}%`"
      >

      <div class="el-slider__selected__dot" />
    </div>
  </div>

  <div
    class="el-slider__event"
    ref="eventContainer"
    @mousedown="startDrag"
    @mousemove="drag"
    @mouseup="endDrag"
    @mouseout="endDrag"
    />
</div>
</template>
<script>
export default {
  name: 'ElSlider',
  created () {
    this.update()
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    decimals: {
      type: Number,
      default: 2
    },
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  },
  watch: {
    value: 'update',
    min: 'update',
    max: 'update'
  },
  data () {
    return {
      isDraging: false,
      width: 0,
      percentage: 0,
      percentageDragged: 0
    }
  },
  methods: {
    update () {
      if (this.isDraging) {
        return
      }

      const value = this.value || 0
      const percentageDragged = (value - this.min) / (this.max - this.min)
      if (this.percentageDragged === percentageDragged) {
        return
      }

      this.percentageDragged = percentageDragged

      this.checkPercentageDraggedRange()
      this.redraw()
    },
    checkPercentageDraggedRange () {
      if (this.percentageDragged > 1) {
        this.percentageDragged = 1
      } else if (this.percentageDragged < 0) {
        this.percentageDragged = 0
      }
    },
    startDrag (ev) {
      this.isDraging = true

      const slider = this.$refs.eventContainer
      const width = slider.offsetWidth

      if (width) {
        this.width = width
      }

      ev.preventDefault()
      return false
    },
    drag (ev) {
      if (!this.isDraging || this.width === 0) {
        return
      }

      const x = ev.offsetX
      this.percentageDragged = x / this.width

      this.checkPercentageDraggedRange()
      this.redraw()
      this.emitValue()

      ev.preventDefault()
      return false
    },
    endDrag (ev) {
      this.drag(ev)
      this.isDraging = false

      this.emitValue()
      ev.preventDefault()
      return false
    },
    emitValue () {
      let newValue = this.percentageDragged * (this.max - this.min) + this.min
      const multiplier = Math.pow(10, this.decimals)
      newValue = Math.round(newValue * multiplier) / multiplier

      this.$emit('input', newValue)
      this.$emit('change', newValue)
    },
    redraw () {
      this.percentage = Math.round(this.percentageDragged * 100)
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables';

  .el-slider {
    position: relative;
    display: block;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 10px;
    background-color: transparent;
    overflow: visible;
    z-index: 1;
    box-sizing: border-box;

    &__event {
      position: absolute;
      top: 50%;
      left: 0px;
      height: 100%;
      min-height: 30px;
      width: 100%;
      background-color: transparent;
      opacity: 0;
      z-index: 3;
      cursor: move;
      transform: translateY(-50%);

      &:active {
        height: 100px;
        z-index: 5;
      }
    }

    &__selected {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      border-radius: 5px;
      width: 0%;
      background-color: @color-button-primary;
      overflow: visible;

      &__dot {
        position: absolute;
        top: 0px;
        right: 0px;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: @color-button-primary;
        z-index: 2;
        transform: translateY(-25%) translateX(50%);
      }
    }

    &__remaining {
      position: relative;
      top: 0px;
      left: 0px;
      right: 0px;
      height: 100%;
      width: 100%;
      border-radius: 5px;
      background-color: #ffffff;
      overflow: visible;
      box-shadow: inset @shadow;
    }
  }
</style>
