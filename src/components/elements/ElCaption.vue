<template>
<div class='caption'
  @click="click"
  v-bind:class="{
    light : light === true,
    danger : danger === true
  }"
  >

  <span v-if="text !== ''">{{text}}</span>

  <slot></slot>
</div>
</template>

<script>

export default {
  name: 'ElCaption',
  props: {
    text: {
      type: String,
      default: ''
    },
    light: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    }
  },
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
    color: @color-font-dark;
    font-style: italic;
  }

  .light {
    color: #ffffff;
  }

  .danger {
    color: @color-danger-dark;
  }
</style>
