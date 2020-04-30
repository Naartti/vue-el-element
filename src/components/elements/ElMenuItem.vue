<template>
<transition name="slide-fade">
  <div
    v-if="displayedIndex === index"
    class="el-menu-item"
    >
    <h1
      v-if="showTitle"
      class="el-menu-item__header"
      >
      {{title}}
    </h1>
    <el-delimiter v-if="showTitle" short />

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
    },
    notification: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    displayedIndex () {
      return this.$parent.displayedIndex
    },
    showTitle () {
      return this.$parent.$props.title === true
    }
  },
  watch: {
    title: 'update',
    notification: 'update'
  },
  mounted () {
    this.$parent.addItem({
      title: this.title,
      type: 'title',
      notification: this.notification
    })
    this.index = this.$parent.getIndex()
  },
  methods: {
    update () {
      this.$parent.updateItem({
        index: this.index,
        title: this.title,
        type: 'title',
        notification: this.notification
      })
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables.less';

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
