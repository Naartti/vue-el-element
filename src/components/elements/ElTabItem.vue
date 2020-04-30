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
    },
    notification: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    displayedIndex () {
      return this.$parent.displayedIndex
    }
  },
  watch: {
    title: 'update',
    notification: 'update'
  },
  mounted () {
    this.$parent.addItem({
      title: this.title,
      notification: this.notification
    })
    this.index = this.$parent.getIndex()
  },
  methods: {
    update () {
      this.$parent.updateItem({
        index: this.index,
        title: this.title,
        notification: this.notification
      })
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables.less';

  .el-tab-item {
    width: 100%;
  }
</style>
