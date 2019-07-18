<template>
<div
  class="el-header"
  :class="{
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  @click="$listeners.click ? $emit('click') : null"
  >

  <!-- Icon -->
  <div
    v-if="hasNotification"
    v-html="icon"
    class="el-header__icon el-animation"
    :class="{
      'el-header__icon--clickable' : clickable
    }"
    @click="$emit('click')"
    />

  <h3
    class="el-header__header"
    :class="{
      'el-header__header--tight': tight
    }"
    >
    <slot />
  </h3>
</div>
</template>
<script>

import svgIcons from 'script/svg'

export default {
  name: 'ElHeader',
  props: {
    warning: Boolean,
    danger: Boolean,
    success: Boolean,
    tight: Boolean,
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  },
  computed: {
    clickable () {
      return this.$listeners && this.$listeners.click
    },
    icon () {
      if (this.danger) {
        return svgIcons.danger
      } else if (this.warning) {
        return svgIcons.warning
      } else if (this.success) {
        return svgIcons.success
      }

      return ''
    },
    hasNotification () {
      return this.danger || this.warning || this.success
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .el-header {
    font-family: @font-family;
    position: relative;
    width: 100%;
    height: auto;
    font-size: @font-size-medium;
    text-align: left;
    color: @color-grey-super-dark;

    &__icon {
      display: inline-block;
      position: relative;
      margin-right: @side-margin;

      &--clickable {
        cursor: pointer;

        &:hover {
          transform: scale(1.1)
        }
      }
    }

    &__header {
      display: inline-block;

      &--tight {
        margin: 0px;
      }
    }
  }
</style>
