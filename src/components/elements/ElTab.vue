<!-- Usage

<el-tab>
  <el-tab-item title=" TITLE 1 ">
    CONTENT 1
  </el-tab-item>

  <el-tab-item title=" TITLE 2 ">
    CONTENT 2
  </el-tab-item>

    ...
</el-tab>

-->

<template>
<div class="el-tab">
  <!-- Menu -->
  <div class="el-tab__nav">
    <div class="el-tab__nav__border" />

    <div v-for="(item, index) in items"
      class="el-tab__item el-animation"
      :key="index"
      :class="{
        'el-tab__item--active' : displayedIndex === index
      }"
      @click="openTab(index)"
      >

      {{item.title}}
    </div>
  </div>

  <!-- Content -->
  <div class="el-tab__content">
    <slot />
  </div>
</div>
</template>

<script>

export default {
  name: 'ElTab',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
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
      this.displayedIndex = index

      this.$emit('input', index)
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables';

  .el-tab {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;

    &__nav {
      position: relative;
      width: auto;
      max-width: 100%;
      box-sizing: border-box;

      div:last-child {
        margin-right: 0px;
      }

      &__border {
        position: absolute;
        top: auto;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 2px;
        background-color: @color-grey-light;
        z-index: -1;
      }
    }

    &__item {
      padding: 5px 0px;
      display: inline-block;
      cursor: pointer;
      box-sizing: border-box;
      border-bottom: 2px solid @color-grey-light;
      z-index: 2;
      color: @color-grey-medium;
      margin-right: 30px;

      &--active {
        color: @color-font-dark;
        border-bottom: 2px solid @color-grey-dark;
        z-index: 2;
      }
    }

    &__content {
      width: 100%;
      max-width: @section-max-width;
      z-index: 1;
      box-sizing: border-box;
      padding-bottom: @bottom-margin-section;
      margin-top: @top-margin-header;
    }
  }
</style>
