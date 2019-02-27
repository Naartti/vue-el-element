<template>
<div class="el-multi-switch"
  :class="{
    marginRight,
    marginTop
  }"
  >
    <div
      ref="marker"
      class="marker animation"
      :style="`left: ${markerPosition}%;`"
      />

    <div
      v-for="(option, index) in options"
      :key="index"
      class="toggleLabel animation"
      :class="{ labelSelected : option.value === value}"
      @click="toggle(option.value, index)"
      >
      {{option.label}}
    </div>
  </div>
</template>
<script>

// v-model = isLeft

export default {
  props: {
    value: {
      type: String && Number,
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
  }

  .marker {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 50%;
    height: 100%;
    background-color: @color-button-primary;
    box-shadow: @shadow;
    z-index: 1;
    box-sizing: border-box;
    border-radius: @button-radius;
  }

  .markerRight {
    left: 50%;
  }

  .toggleLabel {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1 1 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: @color-disable-dark;
    z-index: 2;
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: @button-font-size;
    box-sizing: border-box;
  }

  .labelSelected {
    color: #ffffff;
  }

</style>
