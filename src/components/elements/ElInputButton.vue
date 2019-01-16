<template>
<div class='mainContainer'>
  <el-input
    v-model="inputValue"
    @keyup="duringChange"
    @enter="enterPressed"
    :type='type'
    :warning="warning"
    :success="success"
    :disabled="disabled"
    :placeholder="placeholder"
    style="display: inline-block;"
    ref="inputField"
    />

  <el-button
    :disabled="disabled"
    :type="buttonType"
    @click="contentChanged"
    style="display: inline-block; margin: 0px;">
    <slot></slot>
  </el-button>
</div>
</template>

<script>

export default {
  name: 'ElInputButton',
  props: ['placeholder', 'value', 'type', 'warning', 'success', 'disabled', 'buttonType'],
  data () {
    return {
      inputValue: ''
    }
  },
  mounted () {
    if (this.value != null && typeof this.value === 'string') {
      this.inputValue = this.value
    }
  },
  watch: {
    value () {
      if (this.value != null && typeof this.value === 'string') {
        this.inputValue = this.value
      }
    }
  },
  methods: {
    contentChanged (ev) {
      this.$emit('input', this.inputValue)
      this.$emit('click', this.inputValue)
    },
    duringChange (ev) {
      this.$emit('keyup', this.inputValue)
      this.$emit('input', this.inputValue)
    },
    enterPressed () {
      this.$emit('input', this.inputValue)
      this.$emit('enter', this.inputValue)
    }
  }
}

</script>

<style scoped lang="less">
  @import '~style/variables';

  .mainContainer {
    display: inline-flex;
    height: @input-height;
    margin-top: @top-margin-element;
    width: 100%;
  }
</style>
