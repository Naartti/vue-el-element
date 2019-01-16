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
<div class="selectContainer"
  v-bind:class="{
    marginRight,
    marginTop
  }"
  >
  <select @change="onChange"
    class="selectContainer-field"
    :value="value"
    >

    <option v-for="item in options"
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
      default: true
    }
  },
  methods: {
    onChange (ev) {
      this.$emit('input', ev.target.value)
    }
  }
}

</script>

<style scoped lang="less">
  @import '~style/variables';

  .selectContainer {
    position: relative;
    width: 100%;
    max-width: 200px;
    height: @dropdown-height;
    text-align: left;
    border-radius: @radius-small;
    box-sizing: border-box;
  }

  .selectContainer-field {
    height: @dropdown-height;
    width: 100%;
    background-color: @grey-super-light;
    border-radius: @radius-small;
    border: 1px solid @grey-middle;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    padding-left: 10px;
  }

  .selectContainer-field:focus {
    border: 1px solid @grey-dark;
  }

  .marginRight {
    margin-right: @side-margin;
  }

  .marginTop {
    margin-top: @top-margin-element;
  }
</style>
