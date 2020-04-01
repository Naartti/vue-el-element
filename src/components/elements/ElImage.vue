<template>
<div
  class="el-image"
  :style="`max-height: ${maxHeight};`"
  :class="{
    'el-image--stretch': stretch,
    [marginClassName]: true,
  }"
  >
  <img
    class="el-image__img"
    :style="`max-height: ${styleMaxHeight};`"
    :class="{
      'el-image__img--stretch': stretch,
      'el-image__img--circle': circle,
      'el-image__img--inset-shadow': insetShadow,
      'el-image__img--shadow': blur
    }"
    :src="src"
    :alt="alt"
    />

  <!-- Background blurred image -->
  <img
    v-if="blur"
    class="el-image__img__background"
    :src="src"
    />

  <!-- Caption -->
  <div
    v-if="caption !== ''"
    class="el-image__caption"
    >
    {{caption}}
  </div>
</div>
</template>
<script>
import margin from '@/util/mixins/margin'

export default {
  name: 'ElImage',
  mixins: [margin],
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },

    circle: { type: Boolean, default: false },
    insetShadow: { type: Boolean, default: false },
    stretch: { type: Boolean, default: false },
    blur: { type: Boolean, default: false },

    maxHeight: {
      type: [String, Number],
      default: 'auto'
    }
  },
  computed: {
    styleMaxHeight () {
      return !isNaN(this.maxHeight) ? `${this.maxHeight}px` : this.maxHeight
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables';

  .el-image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: auto;
    height: auto;
    overflow: hidden;

    &--stretch {
      width: 100%;
    }

    &__img {
      position: relative;
      margin: auto auto;
      height: auto;
      width: auto;
      max-width: 100%;
      z-index: 2;

      &--shadow {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
      }

      &--stretch {
        width: 100%;
      }

      &--circle {
        border-radius: 50%;
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

    &__caption {
      width: 100%;
      font-style: italic;
      display: block;
    }
  }
</style>
