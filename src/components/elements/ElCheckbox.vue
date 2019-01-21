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
<div class="mainContainer">
  <label v-for="(item, index) in options"
    class="checkboxContainer"
    :class="{ marginTop, marginRight }"
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

    <span class="checkmark" :value="value" />
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

  .mainContainer {}

  /* The container */
  .checkboxContainer {
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
  .checkboxContainer input {
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
    border-radius: 2px;
  }

  /* On mouse-over, add a grey background color */
  .checkboxContainer:hover input ~ .checkmark {
    border: 1px solid @color-button-primary;
  }

  /* When the radio button is checked, add a blue background */
  .checkboxContainer input:checked ~ .checkmark {
    background-color: @color-select;
    border: 1px solid @color-select;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 7px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    border-radius: 1px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
