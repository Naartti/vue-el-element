<template>
<textarea
  :value="value"
  class="el-textarea"
  :class="{
    'el-textarea--warning' : warning,
    'el-textarea--success' : success,
    [marginClassName]: true,
  }"
  @input="$emit('input', $event.target.value)"
  @change="$emit('change', $event.target.value)"
  :placeholder="placeholder"
  />
</template>
<script>
import margin from '@/util/mixins/margin'

export default {
  name: 'ElTextarea',
  mixins: [margin],
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
    success: Boolean
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
      color: @color-danger-7;
      border-color: @color-danger-7;
      background-color: @color-danger-1;
    }

    &--success {
      color: @color-success-7;
      border-color: @color-success-7;
      background-color: @color-success-1;
    }
  }
</style>
