<template>
<div
  class="el-toggle-button"
  :class="{
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  @click="toggle"
  >

  <div
    class="el-toggle-button__background el-animation"
    ref="background"
    :class="{
      'el-toggle-button__background--active': checked
    }"
    >

    <div
      class="el-toggle-button__dot el-animation"
      ref="dot"
      :class="{
        'el-toggle-button__dot--active': checked
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
    checked: Boolean,
    manual: Boolean,
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  },
  model: {
    prop: 'checked',
    event: 'input'
  }
}

</script>
<style scoped lang="less">
  @import '~el-style/variables';

  .el-toggle-button {
    position: relative;
    display: block;
    top: 0px;
    left: 0px;
    width: 60px;
    height: auto;
    min-height: 30px;
    min-width: 60px;
    padding: none;

    &__background {
      position: relative;
      width: 60px;
      height: 30px;
      top: 0px;
      left: 0px;
      margin: none;
      margin-left: 0px;
      background-color: @color-grey-2;
      border-radius: 15px;
      box-sizing: border-box;
      cursor: pointer;
      box-shadow: inset @shadow;

      &--active {
        background-color: @color-primary-4;
        box-shadow: none;
      }
    }

    &__dot {
      position: absolute;
      top: 3px;
      left: 3px;
      height: 24px;
      width: 24px;
      background-color: @color-grey-0;
      border-radius: 50%;
      box-sizing: border-box;
      cursor: pointer;
      box-shadow: @shadow;

      &--active {
        left: 33px;
        background-color: @color-grey-0;
        box-shadow: none;
      }
    }
  }
</style>
