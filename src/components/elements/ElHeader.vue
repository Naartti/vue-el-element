<template>
<div
  class="el-header"
  :class="{
    'el-margin--top': marginTop
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

  <h3 class="el-header__header">
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
    marginTop: Boolean
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
    margin-top: @top-margin-header;
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
    }
  }
</style>
