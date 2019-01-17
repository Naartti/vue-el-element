<template>
<div
  class='main'
  :class="{ marginTop }"
  @click="$listeners.click ? $emit('click') : null"
  >

  <!-- Icon -->
  <div v-if="hasNotification"
    v-html="icon"
    class="icon animation"
    :class="{ pointer : clickableIcon }"
    @click="$emit('click')"
    />

  <!-- Header -->
  <span v-if="title !== ''">{{title}}</span>
  <slot></slot>
</div>
</template>

<script>

import svgIcons from '../script/svg'

export default {
  name: 'ElHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    warning: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      clickableIcon: false
    }
  },
  mounted () {
    if (this.$listeners && this.$listeners.click) {
      this.clickableIcon = true
    }
  },
  computed: {
    icon () {
      if (window.k$.hideWarnings === true) return ''

      if (this.danger === true) {
        return svgIcons.danger
      } else if (this.warning === true) {
        return svgIcons.warning
      } else if (this.success === true) {
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
  @import '~style/variables';

  .main {
    font-family: @font-family;
    position: relative;
    width: 100%;
    height: auto;
    font-size: @font-size-header;
    text-align: left;
    margin-top: @top-margin-header;
    color: @grey-darker;
  }

  .icon {
    position: absolute;
    left: -25px;
  }

  .pointer {
    cursor: pointer;

    &:hover {
      transform: scale(1.1)
    }
  }

  .marginTop {
    margin-top: @top-margin-header-large;
  }
</style>
