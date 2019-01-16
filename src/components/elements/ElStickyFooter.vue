<template>
<div
  class='referenceContainer'
  ref='referenceContainer'
  >
  <div ref='main'
    class='sticky'
    v-bind:class="{
      stickyFixed : isOutside === true,
      shadow: shadow === true && isOutside === true
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
    shadow: {
      type: Boolean,
      default: false
    }
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

    setTimeout(() => {
      this.scrollUpdate()
    }, 100)
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
  @import '../style/variables';

  .referenceContainer {
    position: relative;
    width: 100%;
    height: auto;
  }

  .sticky {
    position: relative;
    padding: @top-margin-element 0px;
  }

  .stickyFixed {
    position: fixed;
    top: auto;
    bottom: 0px;
    border-top: 1px solid @grey-light;
    background-color: #ffffff;
  }

  .shadow {
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
</style>
