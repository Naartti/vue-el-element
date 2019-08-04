<template>
<div
  class='el-sticky-footer'
  ref='referenceContainer'
  >
  <div
    ref='main'
    class='el-sticky-footer__content'
    :class="{
      'el-sticky-footer__content--fixed': isOutside === true,
      'el-sticky-footer__content--shadow': shadow === true && isOutside === true
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
    shadow: Boolean
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
      let PARENT_TOP = this.parentContainer.getBoundingClientRect().top
      let HEIGHT = window.innerHeight
      let STYLING = this.referenceContainer.getBoundingClientRect()
      let EL_HEIGHT = STYLING.height
      let SCROLL_TOP = STYLING.top
      let IS_OUTSIDE_SCREEN = HEIGHT - PARENT_TOP - EL_HEIGHT < 0

      if (SCROLL_TOP > HEIGHT - EL_HEIGHT &&
        !IS_OUTSIDE_SCREEN &&
        !this.isOutside) {
        this.isOutside = true
      } else if (SCROLL_TOP < HEIGHT - EL_HEIGHT && this.isOutside) {
        this.isOutside = false
      } else if (IS_OUTSIDE_SCREEN && this.isOutside) {
        this.isOutside = false
      }
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .el-sticky-footer {
    position: relative;
    width: 100%;
    height: auto;

    &__content {
      position: relative;
      padding: @top-margin-element 0px;

      &--fixed {
        position: fixed;
        top: auto;
        bottom: 0px;
        border-top: 1px solid @color-grey-2;
        background-color: @color-background;
      }

      &--shadow {
        box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
      }
    }
  }
</style>
