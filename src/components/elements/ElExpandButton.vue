<template>
<div
  class="el-animation el-expand-button"
  :class="{
    'el-expand-button--rounded': rounded,
    'el-expand-button--color': color,
    'el-expand-button--shadow': shadow,
    'el-expand-button--secondary': secondary,
    [marginClassName]: true,
  }"
  @click="$emit('input', !value)"
  >

  <slot />

  <div
    class="el-expand-button__icon"
    :class="{
      'el-expand-button__icon--horizontal': horizontal
    }"
    >
    <div
      class="el-animation el-expand-button__icon__line el-expand-button__icon__line-1"
      :class="{
        'el-expand-button__icon__line-1--open' : value,
        'el-expand-button__icon__line--color': color,
        'el-expand-button__icon__line--secondary': secondary
      }"
      />

    <div
      class="el-animation el-expand-button__icon__line el-expand-button__icon__line-2"
      :class="{
        'el-expand-button__icon__line-2--open' : value,
        'el-expand-button__icon__line--color': color,
        'el-expand-button__icon__line--secondary': secondary
      }"
      />
  </div>
</div>
</template>
<script>
import margin from '@/util/mixins/margin'

export default {
  name: 'ElExpandButton',
  mixins: [margin],
  props: {
    value: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
    color: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    horizontal: { type: Boolean, default: false }
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables.less';

  .el-expand-button {
    position: relative;
    height: @button-height;
    width: @button-height;
    cursor: pointer;
    color: @color-font-dark;
    box-sizing: border-box;
    background-color: transparent;
    border-radius: @radius-small;

    &--rounded {
      border-radius: 50%;
    }

    &--shadow {
      &:hover {
        box-shadow: @shadow;
      }
    }

    &--color {
      background-color: @color-button-primary;
    }

    &--secondary {
      border: 1px solid @color-button-primary;
    }

    &__icon {
      position: absolute;
      width: 16px;
      height: 10px;
      margin: auto;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      transform: rotate(90deg);

      &--horizontal {
        transform: none;
      }

      &__line {
        background-color: @color-grey-7;
        height: 2px;
        width: 13px;
        border-radius: 1px;
        position: absolute;
        left: 0px;

        &--color {
          background-color: @color-font-light;
        }

        &--secondary {
          background-color: @color-button-primary;
        }
      }

      &__line-1 {
        top: 0px;
        transform: translateX(2px) rotate(40deg);

        &--open {
          transform: translateX(1.5px) rotate(140deg);
        }
      }

      &__line-2 {
        bottom: 0px;
        transform: translateX(2px) rotate(-40deg);

        &--open {
          transform: translateX(1.5px) rotate(-140deg);
        }
      }
    }
  }
</style>
