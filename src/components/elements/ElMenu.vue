<!-- Usage

<el-section>

    <el-menu>
        <el-menu-item title=" TITLE 1 ">
            CONTENT 1
        </el-menu-item>

        <el-menu-item title=" TITLE 2 ">
            CONTENT 2
        </el-menu-item>

        ...
    </el-menu>

</el-section>

-->

<template>
<div class="el-menu">
  <!-- Menu -->
  <div
    class="el-menu__context-panel el-animation"
    :class="{
      'el-menu__context-panel--closed': !menuIsOpen
    }"
    >
    <div v-for="(item, index) in items"
      class="el-menu__context-panel__item el-animation"
      :key="index"
      :class="{
        'el-menu__context-panel__item__section': item.type === 'section',
        'el-menu__context-panel__item--active': displayedIndex === index,
        'el-menu__context-panel__item--no-click': item.type === 'section' && !item.clickable,
        'el-text-align--left': align === 'left',
        'el-text-align--center': align === 'center',
        'el-text-align--right': align === 'right'
      }"
      @click="openTab(index)"
      >

      {{item.title}}
    </div>
  </div>

  <!-- Narrow menu -->
  <div
    class="el-menu__backdrop"
    v-if="menuIsOpen"
    @click="menuIsOpen = false"
    />

  <div
    class="el-menu__button el-animation"
    @click="menuIsOpen = true"
    >
    <div class="el-menu__button__background" />
    <span>
      <svg width="15px" height="14px" viewBox="0 0 15 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-19.000000, -25.000000)" fill="#222222"><path d="M20,25 L33,25 C33.5522847,25 34,25.4477153 34,26 C34,26.5522847 33.5522847,27 33,27 L20,27 C19.4477153,27 19,26.5522847 19,26 C19,25.4477153 19.4477153,25 20,25 Z M20,37 L33,37 C33.5522847,37 34,37.4477153 34,38 C34,38.5522847 33.5522847,39 33,39 L20,39 C19.4477153,39 19,38.5522847 19,38 C19,37.4477153 19.4477153,37 20,37 Z M20,31 L33,31 C33.5522847,31 34,31.4477153 34,32 C34,32.5522847 33.5522847,33 33,33 L20,33 C19.4477153,33 19,32.5522847 19,32 C19,31.4477153 19.4477153,31 20,31 Z"></path></g></g></svg>
    </span>
  </div>

  <!-- Content -->
  <div class="el-menu__content">
    <slot />
  </div>
</div>
</template>

<script>

export default {
  name: 'ElMenu',
  props: {
    value: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  data () {
    return {
      menuIsOpen: false,
      displayedIndex: 0,
      indexCounter: 0,
      items: []
    }
  },
  watch: {
    value () {
      this.displayedIndex = this.value
    }
  },
  mounted () {
    this.displayedIndex = this.value
  },
  methods: {
    addItem (title) {
      this.items.push(title)
    },
    getIndex () {
      return this.indexCounter++
    },
    openTab (index) {
      if (this.items[index].type === 'section' && !this.items[index].clickable) {
        return
      }

      this.displayedIndex = index
      this.menuIsOpen = false

      this.$emit('input', index)
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables';

  @narrow-width: 700px;

  .el-menu {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;

    &__backdrop {
      display: none;
      position: fixed;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background-color: @color-backdrop;
      opacity: 0.9;
      cursor: pointer;
      z-index: 2;

      @media (max-width: @narrow-width) {
        display: block;
      }
    }

    &__context-panel {
      position: relative;
      flex: 0 0 170px;
      margin-right: 50px;
      margin-left: 10px;
      padding-top: 65px;
      z-index: 4;

      @media (max-width: @narrow-width) {
        position: fixed;
        background-color: #ffffff;
        box-shadow: @shadow;
        box-sizing: border-box;
        margin-left: 0px;
        margin-top: 0px;
        margin-right: 0px;
        padding-left: 10px;
        padding-top: 10px;
        padding-right: 30px;
        height: 100%;
        max-width: 300px;
        top: 0px;
        left: 0px;
        z-index: 6;
      }

      &--closed {
        @media (max-width: @narrow-width) {
          display: block;
          margin-left: -300px;
          opacity: 0;
        }
      }

      &__item {
        cursor: pointer;
        margin-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 14px;
        white-space: wrap;

        @media (max-width: @narrow-width) {
          text-align: left;
        }

        &:hover {
          padding-left: 5px;
          padding-right: 15px;
        }

        &:active {
          padding-left: 0px;
          padding-right: 20px;
        }

        &--active {
          font-weight: bold;
        }

        &--no-click {
          cursor: default;

          &:hover {
            padding: 0px 10px;
          }

          &:active {
            padding: 0px 10px;
          }
        }

        &__section {
          border-bottom: 1px solid @color-grey-light;
          margin-top: @top-margin-header;
          font-size: @font-size-medium;
        }
      }
    }

    &__button {
      display: none;
      z-index: 3;
      position: fixed;
      top: 15px;
      left: 10px;
      padding: 5px;
      cursor: pointer;
      box-sizing: border-box;
      height: 25px;
      width: 25px;

      @media (max-width: @narrow-width) {
        display: block;
      }

      span {
        position: absolute;
        top: 4px;
        left: 5px;
      }

      &__background {
        position: absolute;
        background-color: #ffffff;
        opacity: 0.9;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        z-index: -1;
        border-radius: 3px;
        cursor: pointer;
      }
    }

    &__content {
      display: flex;
      flex-grow: 1;
      max-width: 700px;
      z-index: 5;
      box-sizing: border-box;
      padding-bottom: @bottom-margin-section;
      padding-right: 10px;

      @media (max-width: @narrow-width) {
        padding: 10px 10px;
        z-index: 1;
      }
    }
  }
</style>
