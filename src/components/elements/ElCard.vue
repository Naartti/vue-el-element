<template>
  <div class='cardContainer'
    :class="{ highlight }"
    >
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'ElCard',
  props: {
    highlight: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .cardContainer {
    position: relative;
    width: auto;
    min-width: @element-min-width;
    height: auto;
    min-height: 30px;
    margin-top: 10px;
    background-color: #ffffff;
    padding: 15px 10px;
    box-shadow: @shadow;
  }

  .highlight {
    border-radius: @radius-small;
    box-sizing: border-box;
    background-color: @highlight-background-color;
    border: @highlight-border;
    box-shadow: @highlight-shadow;
  }
</style>
