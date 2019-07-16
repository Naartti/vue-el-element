<template>
<input
  :value="value"
  @change="contentChanged"
  @keyup="duringChange"
  @input="$emit('input', $event.target.value)"
  class='el-input el-animation'
  :class="{
    'el-input--warning' : warning,
    'el-input--success' : success,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  :type='type'
  :placeholder="placeholder"
  ref="inputField"
  >
</template>

<script>

export default {
  name: 'ElInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    warning: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  },
  methods: {
    contentChanged (ev) {
      this.$emit('change', this.value)
    },
    duringChange (ev) {
      if (ev.keyCode === 13) {
        this.$refs.inputField.blur()

        this.$emit('enter', this.value)

        ev.preventDefault()
        return false
      }

      this.$emit('keyup', this.value)
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .el-input {
    position: relative;
    flex-grow: 1;
    width: 100%;
    height: @input-height;
    min-height: @input-height;
    text-align: left;
    background-color: @input-background;
    padding-left: @input-padding;

    border-radius: @input-radius;
    border: @input-border;
    outline: none;
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
