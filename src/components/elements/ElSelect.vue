<template>
<div
  class="el-select"
  :class="{
    'el-select--open': matchedItems.length > 0,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  >
  <div
    class="el-select__input"
    @click="focus()"
    >

    <div class="el-select__input__filters">
      <div
        v-for="item in selection"
        :key="item.value"
        class="el-select__input__filters__filter"
        @click="remove(item.value)"
        >
        {{item.label}}
      </div>

      <input
        class="el-select__input__filters__input"
        ref="inputField"
        v-model="model"
        @keydown="addInvoker"
        :placeholder="placeholderLabel"
        />
    </div>

    <div
      v-if="selection.length > 0"
      class="el-select__input__clear-icon"
      @click="clear()"
      >
      <svg width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="icon-close" transform="translate(-1.000000, -1.000000)" fill="#cacaca" fill-rule="nonzero">
                  <path d="M9.78,8.36 C10.1721222,8.75212217 10.1721222,9.38787783 9.78,9.78 C9.38787783,10.1721222 8.75212217,10.1721222 8.36,9.78 L5.54,6.95 L2.71,9.78 C2.45634143,10.0336586 2.08662601,10.1327235 1.74012196,10.039878 C1.39361791,9.94703256 1.12296744,9.67638209 1.03012196,9.32987804 C0.937276483,8.98337399 1.03634143,8.61365857 1.29,8.36 L4.12,5.54 L1.3,2.7 C0.907877838,2.30787783 0.907877842,1.67212218 1.30000001,1.28000001 C1.69212218,0.887877842 2.32787783,0.887877838 2.72,1.28 L5.55,4.11 L8.37,1.28 C8.62365857,1.02634143 8.99337399,0.927276483 9.33987804,1.02012196 C9.68638209,1.11296744 9.95703256,1.38361791 10.049878,1.73012196 C10.1427235,2.07662601 10.0436586,2.44634143 9.79,2.7 L6.96,5.53 L9.79,8.35 L9.78,8.36 Z" id="Path"></path>
              </g>
          </g>
      </svg>
    </div>
  </div>

  <div
    v-if="matchedItems.length > 0"
    class="el-select__matches"
    >

    <div
      v-for="(tag, index) in matchedItems"
      :key="tag.value"
      class="el-select__matches__tag"
      :class="{
        'el-select__matches__tag--active': navigationIndex === index
      }"
      @mouseover="navigationIndex = -1"
      @click="add(tag)"
      >
      {{tag.label}}
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'SearchBar',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    tags: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    resultLimit: {
      type: Number,
      default: Infinity
    },
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
  },
  data () {
    return {
      model: '',
      navigationIndex: -1
    }
  },
  watch: {
    model () {
      this.navigationIndex = -1
    }
  },
  computed: {
    selection: {
      get () {
        const optionsMap = {}

        this.options.forEach(({ value, label }) => {
          optionsMap[value] = label
        })

        return this.value.map(value => ({
          value: value,
          label: optionsMap[value]
        }))
      },
      set (value) {
        this.$emit('input', value.map(item => item.value))
      }
    },
    matchedItems () {
      const match = this.model
      const selection = this.selection.map(sel => sel.value)
      let tagIndex = 0

      if (!match || match.length === 0) {
        return []
      }

      const matchedItems = this.options
        .filter(({ value, label }) => {
          if (selection.indexOf(value) !== -1) {
            return
          }

          let isMatch = label
            .toLowerCase()
            .indexOf(match.toLowerCase()) !== -1

          if (!isMatch) {
            return false
          }

          tagIndex++
          return tagIndex <= this.resultLimit
        })

      return matchedItems
    },
    activeTag () {
      let index = this.navigationIndex === -1 ? 0 : this.navigationIndex
      return this.matchedItems[index] || {
        value: null,
        label: ''
      }
    },
    placeholderLabel () {
      return this.selection.length === 0 ? this.placeholder : ''
    }
  },
  methods: {
    focus () {
      this.$refs.inputField.focus()
    },
    addInvoker (ev) {
      // Navigate with arrow keys
      if (ev.keyCode === 38) {
        // Move up
        this.navigationIndex = this.navigationIndex === 0 ? 0 : this.navigationIndex - 1
        ev.preventDefault()
        return false
      } else if (ev.keyCode === 40) {
        // Move down
        this.navigationIndex = this.navigationIndex + 1

        if (this.navigationIndex >= this.matchedItems.length) {
          this.navigationIndex = this.matchedItems.length - 1
        }

        ev.preventDefault()
        return false
      }

      // Remove tag via backspace
      if (ev.keyCode === 8 && this.model === '' && this.selection.length > 0) {
        this.selection = this.selection.slice(0, this.selection.length - 1)
        ev.preventDefault()
        return false
      }

      // Submit on enter
      if (ev.keyCode === 13 && this.matchedItems[0]) {
        this.add(this.activeTag)
      }
    },
    add (tag) {
      this.selection = [...this.selection, tag]
      this.model = ''
    },
    clear () {
      this.selection = []
    },
    remove (removeValue) {
      this.selection = this.selection.filter(({ value }) => value !== removeValue)
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables.less';

  .el-select {
    position: relative;
    box-sizing: border-box;
    height: auto;
    min-height: @input-height;
    width: 100%;
    background-color: @input-background;
    border-radius: @input-radius;
    border: @input-border;
    overflow: hidden;

    &--open {
      border: 1px solid #757575;
    }

    &__input {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: flex-start;
      background-color: @input-background;
      height: auto;
      min-height: 30px;
      width: 100%;

      &__filters {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-grow: 1;
        width: 100%;
        box-sizing: border-box;

        &__filter {
          display: flex;
          margin: 2px 2px;
          border: 1px solid @color-info-medium;
          background-color: @color-info-light;
          color: @color-info-dark;
          cursor: pointer;
          align-items: center;
          padding: 1px 10px;
          border-radius: @radius-small;
          font-size: @font-size-small;
          box-sizing: border-box;

          &:hover {
            color: @color-danger-dark;
            border-color: @color-danger-dark;
            background-color: @color-danger-light;
            text-decoration: line-through;
          }
        }

        &__input {
          border: none;
          outline: none;
          flex-grow: 1;
          border-radius: @radius-large;
          padding: 2px @input-padding;
          height: @input-height;
          box-sizing: border-box;
          background-color: @input-background;
          color: @color-font-dark;
          caret-color: @color-font-dark;
        }
      }

      &__clear-icon {
        display: flex;
        position: relative;
        width: 30px;
        min-width: 30px;
        height: @input-height;
        cursor: pointer;
        justify-content: center;
        align-content: center;
        align-items: center;
        border-radius: @radius-large;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    &__matches {
      box-sizing: border-box;
      padding: 5px 0px;
      border-radius: 0px 0px @radius-small @radius-small;

      &__tag {
        cursor: pointer;
        font-size: 12px;
        padding: 2px 10px;

        &:hover {
          background-color: @color-grey-light;
        }

        &--active {
          background-color: @color-grey-light;
        }
      }
    }
  }
</style>
