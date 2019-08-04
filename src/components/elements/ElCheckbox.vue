<!--

// HTML
<el-checkbox
  v-model="checkboxModel"
  :options="checkboxOptions">
</el-checkbox>

// JS
checkboxModel: ['firstName', 'lastName'],
checkboxOptions: [{
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
  <label v-for="(item, index) in options"
    class="el-checkbox-item"
    :class="{
      'el-margin-right': marginRight,
      'el-margin--top': marginTop,
      'el-margin--left': marginLeft,
      'el-margin--bottom': marginBottom,
      'el-checkbox-item-checkmark': checkmark
    }"
    :key="index"
    :value="value"
    >

    {{item.label}}

    <input
      type="checkbox"

      :id="index"
      :value="item.value"
      v-model="checked"

      @click="onChange()"
      >

    <span
      class="el-checkbox-checkmark"
      :value="value"
      />
  </label>
</div>
</template>

<script>

export default {
  name: 'ElCheckbox',
  data () {
    return {
      checked: []
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean,
    checkmark: Boolean
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
    onChange () {
      // If timeout is not used, the latest value will not be included
      setTimeout(() => {
        this.$emit('input', this.checked)
      }, 0)
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  /* The container */
  .el-checkbox-item {
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
  .el-checkbox-item input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .el-checkbox-checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid @color-grey-5;
    border-radius: 2px;
  }

  /* On mouse-over, add a grey background color */
  .el-checkbox-item:hover input ~ .el-checkbox-checkmark {
    border: 1px solid @color-button-primary;
  }

  /* When the radio button is checked, add a blue background */
  .el-checkbox-item input:checked ~ .el-checkbox-checkmark {
    background-color: @color-select;
    border: 1px solid @color-select;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .el-checkbox-checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .el-checkbox-item-checkmark input:checked ~ .el-checkbox-checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .el-checkbox-item-checkmark .el-checkbox-checkmark:after {
    left: 7px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid @color-background;
    border-width: 0 3px 3px 0;
    border-radius: 1px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
