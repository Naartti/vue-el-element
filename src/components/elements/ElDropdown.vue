<!--

// HTML
<el-dropdown
  v-model="dropdownModel"
  :options="dropdownOptions">
</el-dropdown>

// JS
dropdownModel: 'firstName',
dropdownOptions: [{
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
<div
  class="el-dropdown"
  :class="{
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-dropdown-wide': wide
  }"
  >
  <select
    @change="onChange"
    class="el-dropdown-field"
    :value="value"
    >

    <option
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :disabled="item.value === null"
      >
      {{item.label}}
    </option>
  </select>
</div>
</template>

<script>

export default {
  name: 'ElDropdown',
  props: {
    value: {
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    marginRight: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: Boolean,
      default: false
    },
    wide: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange (ev) {
      const value = ev.target.value

      this.$emit('input', value)

      if (this.$listeners && this.$listeners.change) {
        this.$emit('change', value)
      }

      ev.target.blur()
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .el-dropdown {
    position: relative;
    width: 100%;
    max-width: @element-min-width;
    height: @dropdown-height;
    text-align: left;
    border-radius: @radius-small;
    box-sizing: border-box;
  }

  .el-dropdown-field {
    height: @dropdown-height;
    width: 100%;
    background-color: @color-grey-super-light;
    border-radius: @radius-small;
    border: 1px solid @color-grey-medium;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    padding-left: 10px;
  }

  .el-dropdown-field:focus {
    border: 1px solid @color-grey-dark;
  }

  .el-dropdown-wide {
    max-width: @element-min-width-wide;
    width: @element-min-width-wide;
  }
</style>
