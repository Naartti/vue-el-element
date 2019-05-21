<template>
<textarea
  :value="value"
  class="el-textarea"
  :class="{
    'el-textarea--warning' : warning,
    'el-textarea--success' : success,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  @input="$emit('input', $event.target.value)"
  :placeholder="placeholder"
  />
</template>
<script>
export default {
  name: 'ElTextarea',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    warning: Boolean,
    success: Boolean,
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  }
}
</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .el-textarea {
    position: relative;
    flex-grow: 1;
    width: 100%;
    height: auto;
    min-height: 100px;
    text-align: left;
    background-color: @input-background;
    padding: @input-padding;
    resize: vertical;

    border-radius: @input-radius;
    border: @input-border;
    outline: none;
    margin-right: 10px;
    box-sizing: border-box;

    &:focus {
      border: @input-border-focus;
    }

    &--warning {
      color: @color-danger-dark;
      border-color: @color-danger-dark;
      background-color: @color-danger-light;
    }

    &--success {
      color: @color-success-dark;
      border-color: @color-success-dark;
      background-color: @color-success-light;
    }
  }
</style>
