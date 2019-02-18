<template>
  <transition name="slide-fade">
    <div v-if="displayedIndex === index" class="el-menu-item">
      <h1 class="el-menu-item-header">{{title}}</h1>
      <el-delimiter :short="true" />

      <slot />
    </div>
  </transition>
</template>

<script>

import ElDelimiter from './ElDelimiter.vue'

export default {
  components: { ElDelimiter },
  name: 'ElMenuItem',
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

  .el-menu-item {
    width: 100%;
  }

  .el-menu-item-header {

    @media (max-width: 700px) {
      margin-top: 0px;
      margin-left: 40px;
    }
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-enter {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
