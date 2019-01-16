<template>
<div class='textContainer'>
  {{text}}
  <slot></slot>
</div>
</template>

<script>

export default {
  name: 'ElText',
  props: ['text']
}

</script>

<style scoped lang="less">
  @import '../style/variables';

  .textContainer {
    position: relative;
    width: 100%;
    height: auto;
    font-size: 12px;
    text-align: left;
    margin-top: @top-margin-element;
    color: @grey-darker;
  }
</style>
