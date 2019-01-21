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
    class="radioContainer"
    :class="{ marginTop, marginRight }"
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

    <span class="checkmark" :value="value"></span>
  </label>
</div>
</template>

<script>

export default {
  name: 'ElRadioButton',
  data () {
    return {
      checked: null
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    marginTop: {
      type: Boolean,
      default: false
    },
    marginRight: {
      type: Boolean,
      default: false
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
  .radioContainer {
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
  .radioContainer input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid @color-grey-medium;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .radioContainer:hover input ~ .checkmark {
    border: 1px solid @color-button-primary;
  }

  /* When the radio button is checked, add a blue background */
  .radioContainer input:checked ~ .checkmark {
    background-color: @color-select;
    border: 1px solid @color-select;
  }
</style>
