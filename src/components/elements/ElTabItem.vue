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

import ElDelimiter from './ElDelimiter.vue'

export default {
  components: { ElDelimiter },
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

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-enter {
    transform: translateY(-5px);
    opacity: 0;
  }
</style>
