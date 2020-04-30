<template>
<div
  class='el-sticky-header'
  :class="{
    'el-sticky-header--fixed': isOutside
  }"
  ref='referenceContainer'
  >
  <div
    ref='main'
    class='el-sticky-header__content'
    :class="{
      'el-sticky-header__content--fixed': isOutside,
      'el-sticky-header__content--border': border && isOutside,
      'el-sticky-header__content--shadow': shadow && isOutside
    }"
    >

    <slot />
  </div>
</div>
</template>

<script>

export default {
  name: 'ElStickyFooter',
  props: {
    shadow: { type: Boolean, default: false },
    border: { type: Boolean, default: false }
  },
  data () {
    return {
      isOutside: false
    }
  },
  computed: {
    container () {
      return this.$refs.main
    },
    referenceContainer () {
      return this.$refs.referenceContainer
    },
    parentContainer () {
      return this.$refs.referenceContainer.parentElement
    }
  },
  mounted () {
    let STYLING = this.referenceContainer.getBoundingClientRect()
    let EL_HEIGHT = STYLING.height

    this.container.style.width = STYLING.width + 'px'
    this.referenceContainer.style.height = EL_HEIGHT + 'px'

    window.addEventListener('scroll', this.scrollUpdate)
    window.addEventListener('resize', this.resizeUpdate)

    this.$nextTick(this.scrollUpdate)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollUpdate)
    window.removeEventListener('resize', this.resizeUpdate)
  },
  methods: {
    resizeUpdate () {
      let STYLING = this.referenceContainer.getBoundingClientRect()
      let EL_HEIGHT = STYLING.height

      this.container.style.width = STYLING.width + 'px'
      this.referenceContainer.style.height = EL_HEIGHT + 'px'
    },
    scrollUpdate () {
      let STYLING = this.referenceContainer.getBoundingClientRect()
      let SCROLL_TOP = STYLING.top
      this.isOutside = SCROLL_TOP < 0
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables.less';

  .el-sticky-header {
    position: relative;
    width: 100%;
    height: auto;
    z-index: 2;

    &--fixed {
      z-index: 3;
    }

    &__content {
      position: relative;
      padding: @top-margin-element 0px;

      &--fixed {
        position: fixed;
        top: auto;
        top: 0px;
        background-color: @color-background;
      }

      &--border {
        border-bottom: 1px solid @color-grey-2;
      }

      &--shadow {
        box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }
    }
  }
</style>
