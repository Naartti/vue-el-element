<template>
<div class='main animation'
  v-bind:class="{
    warning,
    isClickable
  }"
  @click="clickInvoker"
  >
  <span v-if="warning"
    class="icon"
    v-html="icon.warning"
    />
  <slot />
</div>
</template>

<script>

import svgIcons from '../script/svg'

export default {
  name: 'ElMessage',
  props: {
    warning: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      icon: {
        warning: svgIcons.warning
      },
      isClickable: false
    }
  },
  mounted () {
    if (this.$listeners && this.$listeners.click) {
      this.isClickable = true
    }
  },
  methods: {
    clickInvoker () {
      if (this.$listeners && this.$listeners.click) {
        this.$emit('click')
      }
    }
  }
}

</script>

<style scoped lang="less">
  @import '~style/variables';

  .main {
    position: relative;
    width: auto;
    min-width: 200px;
    height: auto;
    margin-top: 10px;
    background-color: #ffffff;
    padding: 10px 15px;
    font-size: 12px;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .warning {
    background-color: @color-warning-light;
    border-left: 10px solid @color-warning-medium;
    color: @color-warning-dark;
  }

  .icon {
    margin-right: 10px;
  }

  .isClickable {
    cursor: pointer;

    &:hover {
      box-shadow: @shadow;
    }

    &:active {
      transform: scale(1.01);
    }
  }
</style>
