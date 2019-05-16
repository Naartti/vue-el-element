<template>
  <transition name="slide-fade">
    <div v-show="displayedIndex === index" class="el-menu-item">
      <h1 class="el-menu-item__header">{{title}}</h1>
      <el-delimiter :short="true" />

      <slot />
    </div>
  </transition>
</template>

<script>

import ElDelimiter from './ElDelimiter.vue'

export default {
  components: { ElDelimiter },
  name: 'ElMenuSection',
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
      type: 'section',
      clickable: this.$slots.default !== undefined
    })
    this.index = this.$parent.getIndex()
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .el-menu-item {
    width: 100%;

    &__header {
      @media (max-width: 700px) {
        margin-top: 0px;
        margin-left: 40px;
      }
    }
  }
</style>
