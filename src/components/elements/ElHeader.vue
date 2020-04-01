<template>
<div
  class="el-header"
  :class="marginClassName"
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
import margin from '@/util/mixins/margin'
import warningIcon from '@/assets/icons/warning.js'
import dangerIcon from '@/assets/icons/danger.js'
import successIcon from '@/assets/icons/success.js'

export default {
  name: 'ElHeader',
  mixins: [margin],
  props: {
    warning: Boolean,
    danger: Boolean,
    success: Boolean,
    tight: Boolean
  },
  computed: {
    clickable () {
      return this.$listeners && this.$listeners.click
    },
    icon () {
      if (this.danger) {
        return dangerIcon
      } else if (this.warning) {
        return warningIcon
      } else if (this.success) {
        return successIcon
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
    color: @color-font-dark;

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
