<template>
<div class='textContainer'>
  <span v-if="text !== ''">{{text}}</span>
  <slot></slot>
</div>
</template>

<script>

export default {
  name: 'ElText',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}

</script>

<style scoped lang="less">
  @import '~style/variables';

  .textContainer {
    position: relative;
    width: 100%;
    height: auto;
    font-size: 12px;
    text-align: left;
    margin-top: @top-margin-element;
    color: @color-grey-super-dark;

    p {
      font-size: @font-size;
    }
  }
</style>
