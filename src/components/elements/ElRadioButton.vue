<!--

// HTML
<el-radio-button
  v-model="radioModel"
  :options="radioOptions">
</el-radio-button>

// JS
radioModel: 'firstName',
radioOptions: [{
  value: 'firstName',
  label: 'Förnamn'
}, {
  value: 'lastName',
  label: 'Efternamn'
}, {
  value: 'emial',
  label: 'Epost'
}, {
  value: 'class',
  label: 'Klass'
}, {
  value: 'teacher',
  label: 'Undervisande lärare'
}]

-->

<template>
<div>
  <label
    v-for="(item, index) in options"
    class="el-radio-button-item"
    :class="marginClassName"
    :key="index"
    :value="value"
    >

    {{item.label}}

    <input
      type="radio"

      :id="index"
      :value="item.value"
      v-model="checked"

      @click="onChange(item.value)"
      >

    <span
      class="el-radio-button-checkmark"
      :value="value"
      />
  </label>
</div>
</template>
<script>
import margin from '@/util/mixins/margin'

export default {
  name: 'ElRadioButton',
  mixins: [margin],
  data () {
    return {
      checked: null
    }
  },
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this.checked = this.value
  },
  watch: {
    value () {
      this.checked = this.value
    }
  },
  methods: {
    onChange (value) {
      this.$emit('input', value)
      this.$emit('click', value)
    }
  }
}
</script>

<style scoped lang="less">
  @import '~el-style/variables';

  /* The container */
  .el-radio-button-item {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 12px;
    line-height: 20px;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  .el-radio-button-item input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .el-radio-button-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid @color-grey-5;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .el-radio-button-item:hover input ~ .el-radio-button-checkmark {
    border: 1px solid @color-button-primary;
  }

  /* When the radio button is checked, add a blue background */
  .el-radio-button-item input:checked ~ .el-radio-button-checkmark {
    background-color: @color-select;
    border: 1px solid @color-select;
  }
</style>
