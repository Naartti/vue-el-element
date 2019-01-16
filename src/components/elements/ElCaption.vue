<template>
<div class='caption'
  @click="click"
  v-bind:class="{
    light : light === true,
    danger : danger === true
  }"
  >

  {{text}}

  <slot></slot>
</div>
</template>

<script>

export default {
  name: 'ElCaption',
  props: ['text', 'light', 'danger'],
  methods: {
    click () {
      this.$emit('click')
    }
  }
}

</script>

<style scoped lang="less">
  @import '~style/variables';

  .caption {
    position: relative;
    width: 100%;
    height: auto;
    font-size: @font-size;
    text-align: left;
    margin-top: @top-margin-element;
    color: @font-color;
    font-style: italic;
  }

  .light {
    color: #ffffff;
  }

  .danger {
    color: @red;
  }
</style>
