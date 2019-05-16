<template>
<div
  class='el-caption'
  @click="click"
  :class="{
    'el-caption--light' : light === true,
    'el-caption--danger' : danger === true,
    'el-caption--clickable': clickable,
    'el-margin--top': marginTop
  }"
  >

  <slot />
</div>
</template>

<script>

export default {
  name: 'ElCaption',
  props: {
    light: Boolean,
    danger: Boolean,
    marginTop: Boolean
  },
  computed: {
    clickable () {
      return this.$listeners && this.$listeners.click
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
  @import '~el-style/variables';

  .el-caption {
    position: relative;
    width: 100%;
    height: auto;
    font-size: @font-size-small;
    text-align: left;
    margin-top: @top-margin-element;
    color: @color-font-dark;
    font-style: italic;

    &--light {
      color: #ffffff;
    }

    &--danger {
      color: @color-danger-dark;
    }

    &--clickable {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
