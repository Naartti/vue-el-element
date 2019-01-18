<template>
    <transition name="slide-fade">
        <div v-show="displayedIndex === index" class="el-menu-item">
            <h1>{{title}}</h1>
            <el-delimiter :short="true"></el-delimiter>

            <slot></slot>
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
    this.$parent.addItem(this.title)
    this.index = this.$parent.getIndex()
  }
}

</script>

<style scoped lang="less">
  .el-menu-item {
    width: 100%;
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-enter {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
