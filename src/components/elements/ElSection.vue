<template>
<div class="sectionBlock animation"
  v-bind:class="{
    highlight : highlight === true,
    transparentStyle : transparent === true
  }">
  <div v-if="hasTitle" class="titleContainer">
    {{title}}
  </div>

  <div class="sectionBlock-body">
    <slot></slot>
  </div>
</div>
</template>

<script>

export default {
  name: 'ElSection',
  computed: {
    hasTitle () {
      if (typeof this.title !== 'string') {
        return false
      }

      return this.title !== ''
    }
  },
  props: ['title', 'highlight', 'transparent']
}

</script>

<style scoped lang="less">
  @import '../style/variables';

  .sectionBlock {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    max-height: 25000px;
    min-height: 20px;
    min-width: 40px;
    background-color: #ffffff;
    box-shadow: @shadow;
    padding: 10px 40px;
    margin-bottom: @bottom-margin-section;
    margin-top: @top-margin-section;
    border-radius: @radius-large;
  }

  .titleContainer {
    position: relative;
    top: 0px;
    left: 0px;
    height: 60px;
    width: 100%;
    background-color: #1D2C51;
    color: #ffffff;
    font-size: 30px;
    line-height: 60px;
    text-align: center;
    font-weight: 300;
  }

  .sectionBlock-body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: @section-content-max-width;
    height: auto;
    padding-top: 10px;
    padding-bottom: 30px;
    text-align: left;

    p {
      font-size: 12px;
      text-align: left;
      margin-top: 10px;
    }

    div {
      width: 100%;
    }
  }

  .highlight {
    border-radius: @radius-large;
    box-sizing: border-box;
    background-color: @highlight-background-color;
    border: @highlight-border;
    box-shadow: @highlight-shadow;
    max-height: 20000px;
  }

  .transparentStyle {
    border-radius: @radius-large;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    box-shadow: none;
    max-height: 20000px;
  }
</style>
