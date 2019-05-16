<template>
<div
  class="el-multi-switch"
  :class="{
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-multi-switch--stretch': stretch
  }"
  >
    <div
      ref="marker"
      class="el-multi-switch__marker el-animation"
      :style="`left: ${markerPosition}%;`"
      />

    <div
      v-for="(option, index) in options"
      :key="index"
      class="el-multi-switch__label el-animation"
      :class="{
        'el-multi-switch__label--active' : option.value === value
      }"
      @click="toggle(option.value, index)"
      >
      {{option.label}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: 0
    },
    options: {
      type: Array,
      default: () => []
    },
    marginRight: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selectedIndex: 0
    }
  },
  watch: {
    value () {
      this.options.forEach((item, index) => {
        if (item.value === this.value) {
          this.selectedIndex = index
        }
      })
    }
  },
  mounted () {
    if (this.options.length > 0) {
      this.$refs.marker.style.width = `${100 / this.options.length}%`
    }

    this.options.forEach((item, index) => {
      if (item.value === this.value) {
        this.selectedIndex = index
      }
    })
  },
  computed: {
    markerPosition () {
      return this.options.length === 0
        ? 0
        : 100 * this.selectedIndex / this.options.length
    }
  },
  methods: {
    toggle (value, index) {
      this.selectedIndex = index
      this.$emit('input', value)

      this.change(value)
    },
    change (value) {
      if (this.$listeners && this.$listeners.change) {
        this.$emit('change', value)
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables.less';

  .el-multi-switch {
    display: flex;
    border-radius: @button-radius;
    background-color: #ffffff;
    box-shadow: inset @shadow;
    box-sizing: border-box;
    position: relative;
    width: auto;
    height: @button-height;
    min-height: @button-height;
    left: 0px;
    align-content: space-between;

    &--stretch {
      flex-grow: 1;
    }

    &__marker {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 50%;
      height: 100%;
      background-color: @color-button-primary;
      box-shadow: @shadow;
      box-sizing: border-box;
      border-radius: @button-radius;
    }

    &__label {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1 1 0;
      width: 100%;
      height: 100%;
      text-align: center;
      color: @color-disable-dark;
      cursor: pointer;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: @button-font-size;
      box-sizing: border-box;

      &--active {
        color: #ffffff;
      }
    }
  }
</style>
