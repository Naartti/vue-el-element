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
<div class="menuContainer">
  <div class="contextPanel">
    <div v-for="(title, index) in items"
      class="contextPanelItem animation"
      v-bind:key="index"
      v-bind:class="{
        contextPanelActiveItem : displayedIndex === index
      }"
      @click="displayedIndex = index">
      {{title}}
    </div>
  </div>

  <div class="contentArea">
    <slot></slot>
  </div>
</div>
</template>

<script>

export default {
  name: 'ElMenu',
  data () {
    return {
      displayedIndex: 0,
      indexCounter: 0,
      items: []
    }
  },
  methods: {
    addItem (title) {
      this.items.push(title)
    },
    getIndex () {
      return this.indexCounter++
    }
  }
}
</script>
<style scoped lang="less">
  @import '../style/variables.less';

  .menuContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: flex-start;
  }

  .contextPanelItem {
    text-align: right;
    cursor: pointer;
    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
  }

  .contextPanelItem:hover {
    padding-left: 5px;
    padding-right: 15px;
  }

  .contextPanelItem:active {
    padding-left: 0px;
    padding-right: 20px;
  }

  .contextPanelActiveItem {
    font-weight: bold;
  }

  .contextPanel {
    flex: 0 0 170px;
    margin-right: 50px;
    margin-left: 10px;
    padding-top: 65px;
  }

  .contentArea {
    display: flex;
    flex-grow: 1;
    max-width: 700px;
  }
</style>
