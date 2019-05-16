<template>
  <transition name="slide-fade">
    <div
      v-if="displayedIndex === index"
      class="el-tab-item"
      >

      <slot />

    </div>
  </transition>
</template>

<script>

export default {
  name: 'ElTabItem',
  data () {
    return {
      index: null
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    displayedIndex () {
      return this.$parent.displayedIndex
    }
  },
  mounted () {
    this.$parent.addItem({
      title: this.title,
      type: 'title'
    })
    this.index = this.$parent.getIndex()
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .el-tab-item {
    width: 100%;
  }
</style>
