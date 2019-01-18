<template>
<div class="main animation"
  v-bind:class="{
    mainOpen : isOpen
  }">

  <!-- Selection -->
  <div class="top">
    <div class="searchFocus"
      @click="searchFocus"/>

    <div v-for="item in selected"
      v-bind:key="item.value"
      class="selected noselect croptext"
      @click="removeItem(item)"
      >
      {{item.label}}
    </div>

    <!-- Search -->
    <input
      v-model="search"
      @keyup="updateSearch"
      @focus="open"
      @blur="close"
      ref="search"
      class="search"
      :placeholder="searchPlaceholder"
      >
  </div>

  <!-- Not selected/dropdown -->
  <div v-if="isOpen"
    class="dropdown">

    <div v-for="(item, index) in results"
      class="row noselect"
      v-bind:class="{
        highlightRow : index === highlightIndex
      }"
      v-bind:key="item.value"
      @mousedown="addItem(item)"
      @mouseover="highlightIndex = index"
      >
      {{item.label}}
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'ElSelect',
  props: ['value', 'options', 'placeholder', 'multiselect'],
  data () {
    return {
      isOpen: false,
      highlightIndex: 0,
      search: '',
      searchPlaceholder: 'Sök...',
      selected: [],
      selectedValues: {},
      results: [],
      multipleSelects: true
    }
  },
  mounted () {
    if (this.value && this.value.length > 0) {
      this.value.forEach(item => {
        this.selected.push(item)
        this.selectedValues[item.value] = true
      })
    }

    if (this.placeholder) {
      this.searchPlaceholder = this.placeholder
    }

    if (this.multiselect === false) this.multipleSelects = false

    this.updateResults()
  },
  watch: {
    value () {
      this.selected = []
      this.selectedValues = {}

      if (this.value && this.value.length > 0) {
        this.value.forEach(item => {
          this.selected.push(item)
          this.selectedValues[item.value] = true
        })
      }
    }
  },
  methods: {
    sync () {
      this.$emit('input', this.selected)
    },
    addItem (item) {
      if (this.multipleSelects) {
        this.selected.push(item)
        this.selectedValues[item.value] = true
      } else {
        this.selected = [item]
        this.selectedValues = {
          [item.value]: true
        }
      }

      this.sync()
      this.updateResults()
    },
    removeItem (item) {
      this.selected = this.selected.filter(selectedItem =>
        selectedItem.value !== item.value)
      this.selectedValues[item.value] = false

      this.sync()
      this.updateResults()
    },
    updateResults () {
      let results = this.options.filter(item => {
        let include = this.selectedValues[item.value] !== true

        if (this.search !== '' &&
          item.label.toLowerCase()
            .indexOf(this.search.toLowerCase()) === -1) {
          include = false
        }

        return include
      })

      this.results = results
    },
    updateSearch (ev) {
      const keyCodeMap = {
        13: 'enter',
        38: 'up',
        40: 'down',
        8: 'back',
        27: 'esc'
      }[ev.keyCode]

      switch (keyCodeMap) {
        case 'enter':
          this.addHighlightItem()
          ev.preventDefault()
          return
        case 'up':
          this.goUp()
          break
        case 'down':
          this.goDown()
          break
        case 'esc':
          this.$refs.search.blur()
          break
        default:
          this.highlightIndex = 0
          this.updateResults()
      }
    },
    searchFocus () {
      this.$refs.search.focus()
    },
    goUp () {
      this.highlightIndex--

      if (this.highlightIndex < 0) this.highlightIndex = this.results.length - 1
    },
    goDown () {
      this.highlightIndex++

      if (this.highlightIndex > this.results.length - 1) this.highlightIndex = 0
    },
    addHighlightItem () {
      const item = this.results[this.highlightIndex]
      if (!item) {
        console.log('ERROR! No item from results with that index')
        return
      }

      this.addItem(item)
    },
    open () {
      this.isOpen = true
      this.highlightIndex = 0
      this.updateResults()
    },
    close (ev) {
      this.isOpen = false
      this.search = ''
    }
  }
}

</script>

<style scoped lang="less">
  @import '~style/variables';

  .main {
    position: relative;
    width: 100%;
    max-width: 500px;
    height: auto;
    min-height: 20px;
    border: 1px solid @color-grey-medium;
    box-sizing: border-box;
    border-radius: @radius-small;
    margin-top: @top-margin-element;

    .top {
      position: relative;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;

      div, input {
        z-index: 2;
        cursor: pointer;
        margin: 3px;
        padding: 2px 10px;
        line-height: 20px;
        width: auto;
        height: 20px;
        position: relative;
        width: auto;
        min-width: 50px;
      }

      .searchFocus {
        position: absolute;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        cursor: pointer;
        z-index: 1;
      }

      .search {
        outline: none;
        border: none;
      }

      .selected {
        background-color: @color-button-primary;
        color: #fff;
        border-radius: @radius-small;

        &:hover {
          text-decoration: line-through;
          background-color: @color-danger-dark;
        }
      }
    }

    .dropdown {
      border-top: 1px solid @color-grey-medium;

      .row {
        cursor: pointer;
        padding: 5px 10px;
        font-size: 12px;
      }
    }
  }

  .highlightRow {
    background-color: @color-button-primary;
    color: #fff;
  }

  .mainOpen {
    box-shadow: @shadow;
  }
</style>
