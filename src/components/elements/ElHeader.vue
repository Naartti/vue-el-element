<template>
<div class='main'
  @click="$listeners.click ? $emit('click') : null"
  >
  <div v-if="hasNotification"
    v-html="icon"
    class="icon animation"
    v-bind:class="{ pointer : clickableIcon}"
    @click="$emit('click')"
    />
  {{title}}
  <slot></slot>
</div>
</template>

<script>

import svgIcons from '@/components/script/svg'

export default {
  name: 'ElHeader',
  props: ['title', 'warning', 'danger', 'success'],
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
  @import '../style/variables';

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
</style>
