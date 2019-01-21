<template>
<div class="mainButton"
  v-bind:class="{
    centerButton : center,
    rightButton : align === 'right',
    noMargin : margin === false
  }">

  <button type="button"
    @click="next"
    class="buttonStyle animation"
    v-bind:class="{
      primaryStyle : type === 'primary' || !type,
      blue : type === 'blue',
      secondaryStyle : type === 'secondary',
      secondaryFillStyle : type === 'secondaryFill',
      danger : type === 'danger',
      dangerSecondary : type === 'dangerSecondary',
      disabledStyle : disabled
    }"
    >
    <el-tooltip
      v-if="tooltip && tooltip !== ''"
      :content="tooltip"
      :delay="true"
      />

    <div v-html="icon"/>
  </button>
</div>
</template>
<script>

import ElTooltip from './ElTooltip.vue'

export default {
  components: { ElTooltip },
  name: 'ElIconButton',
  props: ['type', 'icon', 'disabled', 'center', 'align', 'margin', 'tooltip'],
  mounted () {},
  methods: {
    next () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .mainButton {
    margin-top: @top-margin-element;
    margin-right: 10px;
  }

  .noMargin {
    margin-right: 0px !important;
    margin-top: 0px !important;
  }

  .buttonStyle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: @button-height;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: @button-radius;
    height: @button-height;
    padding: none;
  }

  .centerButton {
    display: flex;
    justify-content: center;
  }

  .disabledStyle {
    background-color: @color-disable-dark !important;
  }

  .secondaryStyle {
    border: 1px solid @color-button-secondary;
    color: @color-button-primary;
    background-color: transparent;
  }

  .secondaryFillStyle {
    border: 1px solid #fff;
    color: #fff;
    background-color: @color-button-secondary;
  }

  .primaryStyle {
    background-color: @color-button-primary;
    color: #ffffff;
    border: 1px solid #ffffff;
  }

  .blue {
    background-color: @color-button-primary;
    color: #ffffff;
    border: 1px solid #ffffff;
  }

  .danger {
    background-color: @color-button-danger;
    color: #ffffff;
  }

  .dangerSecondary {
    border: 1px solid @color-button-danger;
    color: @color-button-danger;
    background-color: transparent;
  }

  .rightButton {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 0px !important;
  }
</style>
