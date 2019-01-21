<template>
<div class='infoContainer'
  v-bind:class="{
    elInfoHighlight: highlight === true,
    animation: highlight === true,
    pointer
  }"
  @click="$emit('click')"
  @mouseover="$emit('mouseover')"
  @mouseleave="$emit('mouseleave')"
  >

  <div v-if="html !== ''"
    v-html="html"
    />

  <div>
    <slot></slot>
  </div>
</div>
</template>

<script>

export default {
  name: 'ElInfo',
  props: {
    highlight: {
      type: Boolean,
      default: false
    },
    html: {
      type: String,
      default: ''
    },
    pointer: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .infoContainer {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 30px;
    font-size: 12px;
    line-height: 30px;
    text-align: left;
    margin-top: @top-margin-element;
    color: @color-grey-super-dark;
    background-color: @color-grey-super-light;
    padding-left: 10px;

    border: 1px solid @color-grey-light;
    border-radius: @radius-small;
    outline: none;
    box-sizing: border-box;
  }

  .elInfoHighlight {
    border: @highlight-border;
    cursor: pointer;

    &:hover {
      box-shadow: @shadow;
    }
  }

  .pointer {
    cursor: pointer;
  }
</style>
