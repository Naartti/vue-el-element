<template>
<div class="wrapper"
  :class="{
    marginRight,
    marginTop
  }"
  >
    <div
      class="marker animation"
      :class="{
        markerRight : !value
      }"
      />

    <div
      class="toggleLabel animation"
      :class="{
        labelSelected : value
      }"
      @click="toggle(true)"
      >
      {{left}}
    </div>
    <div
      class="toggleLabel"
      :class="{
        labelSelected : !value
      }"
      @click="toggle(false)"
      >
      {{right}}
    </div>
  </div>
</template>
<script>

// v-model = isLeft

export default {
  props: {
    value: {
      type: Boolean,
      default: true
    },
    left: {
      default: 'LEFT',
      type: String
    },
    right: {
      default: 'RIGHT',
      type: String
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
  methods: {
    toggle (isLeft) {
      this.$emit('input', isLeft)
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~style/variables.less';

  .wrapper {
    display: flex;
    border-radius: @button-radius;
    background-color: #ffffff;
    box-shadow: inset @shadow;
    box-sizing: border-box;
    position: relative;
    width: 240px;
    height: @button-height;
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
    width: 120px;
    height: 100%;
    text-align: center;
    color: @color-disable-dark;
    z-index: 2;
    cursor: pointer;
    font-size: @button-font-size;
  }

  .labelSelected {
    color: #ffffff;
  }

</style>
