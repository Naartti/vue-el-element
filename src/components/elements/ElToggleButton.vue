<template>
<div
  class="toggleButton"
  @click="toggle"
  >

  <div
    class="toggleButton-background animation"
    ref="background"
    :class="{
      backgroundActivated: checked
    }">

    <div
      class="dot animation"
      ref="dot"
      :class="{
        dotActivated: checked
      }"
      />
  </div>
</div>
</template>
<script>

export default {
  name: 'ElToggleButton',
  methods: {
    toggle () {
      if (this.manual === true) {
        this.$emit('input', this.checked)
      } else {
        this.$emit('input', !this.checked)
      }

      this.$emit('click')
    }
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    manual: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'checked',
    event: 'input'
  }
}

</script>
<style scoped lang="less">
  @import '~style/variables';

  .toggleButton {
    position: relative;
    display: block;
    top: 0px;
    left: 0px;
    width: 60px;
    height: auto;
    min-height: 30px;
    min-width: 60px;
    margin-top: 15px;
    padding: none;
  }

  .toggleButton-background {
    position: relative;
    width: 60px;
    height: 30px;
    top: 0px;
    left: 0px;
    margin: none;
    margin-left: 0px;
    background-color: @color-disable-light;
    border-radius: 15px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .backgroundActivated {
    background-color: @color-select;
  }

  .dot {
    position: absolute;
    top: 3px;
    left: 3px;
    height: 24px;
    width: 24px;
    background-color: #ffffff;
    border-radius: 50%;
    box-sizing: border-box;
    cursor: pointer;
  }

  .dotActivated {
    left: 33px;
  }
</style>
