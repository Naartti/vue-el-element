<template>
<div class='inlineContainer'
  v-bind:class="{
    center,
    nowrap: wrap === false,
    marginTop,
    stretch
  }"
  @click="$emit('click')"
  >
  <slot></slot>
</div>
</template>

<script>

export default {
  name: 'ElInline',
  props: {
    center: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: true
    },
    marginTop: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style scoped lang="less">
  @import '~style/variables';

  .inlineContainer {
    position: relative;
    width: auto;
    min-width: 200px;
    height: auto;
    min-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .center {
    justify-content: center;
  }

  .nowrap {
    flex-wrap: nowrap !important;
  }

  .marginTop {
    margin-top: @top-margin-element !important;
  }

  .stretch {
    width: 100%;
  }
</style>
