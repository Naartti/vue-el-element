<template>
<input
  :value="value"
  @change="contentChanged"
  @keyup="duringChange"
  @input="$emit('input', $event.target.value)"
  class='inputContainer animation'
  :class="{
    warningStyle : warning,
    successStyle : success
  }"
  :type='type'
  :placeholder="placeholder"
  ref="inputField"
  >
</template>

<script>

export default {
  name: 'ElInput',
  props: ['placeholder', 'value', 'type', 'warning', 'success'],
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
  @import '~style/variables';

  .inputContainer {
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
    margin-right: 10px;
    box-sizing: border-box;

    &:focus {
      border: @input-border-focus;
    }
  }

  .warningStyle {
    color: @warning-dark;
    border-color: @warning-dark;
    background-color: @warning-light;
  }

  .successStyle {
    color: @success-dark;
    border-color: @success-dark;
    background-color: @success-light;
  }

  .disabledStyle {
    background-color: @disable-dark !important;
    color: @grey-darker !important;
  }
</style>
