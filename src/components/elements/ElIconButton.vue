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

export default {
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
  @import '../style/variables';

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
    width: 30px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: @button-radius;
    height: @button-height;
    padding: none;

    &:active {
      transform: translateY(-1px);
      box-shadow: @shadow;
    }
  }

  .centerButton {
    display: flex;
    justify-content: center;
  }

  .disabledStyle {
    background-color: @disable-dark !important;
  }

  .secondaryStyle {
    border: 1px solid @button-color;
    color: @button-color;
    background-color: transparent;

    &:hover {
      border: 1px solid @button-color-highlight;
      color: @button-color-highlight;
    }
  }

  .secondaryFillStyle {
    border: 1px solid #fff;
    color: #fff;
    background-color: @blue-grey;

    &:hover {
      background-color: @green;
    }
  }

  .primaryStyle {
    background-color: @button-color;
    color: #ffffff;
    border: 1px solid #ffffff;

    &:hover {
      background-color: @button-color-highlight
    }
  }

  .blue {
    background-color: @blue-main;
    color: #ffffff;
    border: 1px solid #ffffff;

    &:hover {
      background-color: @blue-main-dark;
    }
  }

  .danger {
    background-color: @warning-dark;
    color: #ffffff;
  }

  .dangerSecondary {
    border: 1px solid @warning-dark;
    color: @warning-dark;
    background-color: transparent;
  }

  .rightButton {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 0px !important;
  }
</style>
