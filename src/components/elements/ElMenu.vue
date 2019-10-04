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
<div
  class="el-menu"
  :class="{
    'el-menu--center': center,
    'el-margin--right': marginRight,
    'el-margin--top': marginTop,
    'el-margin--left': marginLeft,
    'el-margin--bottom': marginBottom
  }"
  >
  <!-- Menu -->
  <div
    class="el-menu__context-panel el-momentum-scroll el-animation el-no-scroll"
    :class="{
      'el-menu__context-panel--closed': !menuIsOpen
    }"
    >

    <!-- Empty dummy title for menu alignment with content -->
    <h1 v-if="title === true && !menuIsOpen">
      &nbsp;
    </h1>

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

      <el-notification relative
        v-if="item.notification"
        >
        {{item.notification}}
      </el-notification>
    </div>
  </div>

  <!-- Narrow menu -->
  <div
    class="el-menu__backdrop el-momentum-scroll el-no-scroll"
    v-if="menuIsOpen"
    @click="menuIsOpen = false"
    />

  <div
    class="el-menu__button el-animation"
    @click="menuIsOpen = true"
    >
    <div class="el-menu__button__background" />
    <span>
      <svg width="15px" height="14px" viewBox="0 0 15 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g
          transform="translate(-19.000000, -25.000000)"
          class="el-menu__button__icon"
          >
          <path d="M20,25 L33,25 C33.5522847,25 34,25.4477153 34,26 C34,26.5522847 33.5522847,27 33,27 L20,27 C19.4477153,27 19,26.5522847 19,26 C19,25.4477153 19.4477153,25 20,25 Z M20,37 L33,37 C33.5522847,37 34,37.4477153 34,38 C34,38.5522847 33.5522847,39 33,39 L20,39 C19.4477153,39 19,38.5522847 19,38 C19,37.4477153 19.4477153,37 20,37 Z M20,31 L33,31 C33.5522847,31 34,31.4477153 34,32 C34,32.5522847 33.5522847,33 33,33 L20,33 C19.4477153,33 19,32.5522847 19,32 C19,31.4477153 19.4477153,31 20,31 Z"></path></g></g>
      </svg>
    </span>
  </div>

  <!-- Content -->
  <div
    class="el-menu__content"
    :class="{
      'el-menu__content--center': centerContent
    }"
    >
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
      default: 'right',
      validator: x => {
        return {
          left: true,
          right: true,
          center: true
        }[x] === true
      }
    },
    centerContent: { type: Boolean, default: false },
    center: { type: Boolean, default: false },
    title: { type: Boolean, default: true },
    marginRight: Boolean,
    marginTop: Boolean,
    marginBottom: Boolean,
    marginLeft: Boolean
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
    addItem (item) {
      this.items.push(item)
    },
    getIndex () {
      return this.indexCounter++
    },
    updateItem ({ index, ...item }) {
      this.items[index] = item
      this.$forceUpdate()
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
  @center-max-width: @section-content-wide-max-width;

  .el-menu {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    &--center {
      max-width: @center-max-width;
    }

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
      padding-top: 0px;
      padding-bottom: 65px;
      z-index: 4;
      overflow-y: auto;
      overflow-x: hidden;

      @media (max-width: @narrow-width) {
        position: fixed;
        background-color: @color-background;
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
        padding-bottom: 3px;
        padding-top: 3px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 14px;
        white-space: wrap;
        position: relative;

        @media (max-width: @narrow-width) {
          text-align: left;
        }

        &:hover {
          transform: translateX(5px);
        }

        &--active {
          position: relative;
          font-weight: bold;

          &::before {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 4px;
            height: 100%;
            border-radius: 3px 0px 0px 3px;
            content: " ";
            background-color: @color-secondary-4;
          }

          &:hover {
            transform: none;
          }
        }

        &--no-click {
          cursor: default;

          &:hover {
            transform: translateX(0px);
          }
        }

        &__section {
          border-bottom: 1px solid @color-grey-2;
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
        background-color: @color-background;
        opacity: 0.9;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        z-index: -1;
        border-radius: 3px;
        cursor: pointer;
      }

      &__icon {
        fill: @color-font-dark;
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

      &--center {
        margin: 0px auto;
      }

      @media (max-width: @narrow-width) {
        padding: 10px 10px;
        z-index: 1;
      }
    }
  }
</style>
