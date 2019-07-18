<template>
<div
  class="el-image"
  :class="{
    'el-image--stretch': stretch,
    'el-image--small': small,
    'el-image--large': large,

    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  >
  <img
    class="el-image__img"
    :class="{
      'el-image__img--stretch': stretch,
      'el-image__img--circle': circle,
      'el-image__img--inset-shadow': insetShadow,
      'el-image__img--shadow': blur
    }"
    :src="src"
    />

  <img
    v-if="blur"
    class="el-image__img__background"
    :src="src"
    />
</div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },

    circle: Boolean,
    insetShadow: Boolean,
    stretch: Boolean,
    blur: Boolean,
    small: Boolean,
    large: Boolean,

    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables';
  @height-large: 800px;
  @height-medium: 400px;
  @height-small: 100px;

  .el-image {
    display: flex;
    justify-content: center;
    position: relative;
    width: auto;
    max-height: @height-medium;
    overflow: hidden;

    &--stretch {
      width: 100%;
    }

    &--small {
      max-height: @height-small;

      .el-image__img--circle {
        width: @height-small;
      }

      .el-image__img {
        max-height: @height-small;
      }
    }

    &--large {
      max-height: @height-large;

      .el-image__img--circle {
        width: @height-large;
      }

      .el-image__img {
        max-height: @height-large;
      }
    }

    &__img {
      position: relative;
      margin: auto;
      max-width: 100%;
      max-height: @height-medium;
      z-index: 2;

      &--shadow {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
      }

      &--stretch {
        width: 100%;
      }

      &--circle {
        border-radius: 50%;
        width: @height-medium;
        height: inherit;
      }

      &--inset-shadow {
        box-shadow: inset @shadow;
      }

      &__background {
        z-index: 1;
        position: absolute;
        left: -15px;
        right: -15px;
        width: ~"Calc(100% + 30px)";
        max-height: inherit;
        filter: blur(10px);
        opacity: 0.8;
      }
    }
  }
</style>
