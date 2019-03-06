<template>
<div
  class="el-modal noPrint"
  :class="{ centerPosition }"
  >

  <!-- Backdrop -->
  <transition name="fade">
    <div
      class="el-modal-backdrop animation"
      ref="backdrop"
      @click="close"
      v-show="isVisible"
      />
  </transition>

  <!-- Modal -->
  <transition name="slide-fade">
    <div
      class="body animation"
      :class="{
        displayOverflow
      }"
      ref="modalBody"
      v-show="isVisible"
      >

      <!-- Close button -->
      <div
        v-if="displayCloseButton"
        class="closeButton animation"
        v-html="closeIcon"
        @click="close"
        />

      <!-- Actual content -->
      <slot />

      <!-- Footer -->
      <div
        class="inline-footer-wrapper"
        ref="inlineFooterWrapper"
        v-show="$slots.footer"
        >
        <div
          ref="inlineFooter"
          class="inline-footer"
          :class="{
            stickyFixed : !this.disableFooterShadow
          }"
          >

          <slot name="footer" />

        </div>
      </div>
    </div>
  </transition>

</div>
</template>

<script>

import svgCodes from '../script/svg'

export default {
  name: 'ElModal',
  props: {
    overflow: {
      type: Boolean,
      default: false
    },
    pauseBodyScroll: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      delay: 1,
      isVisible: false,
      displayCloseButton: false,
      closeIcon: svgCodes.close,
      disableFooterShadow: false,
      displayOverflow: true,
      centerPosition: true
    }
  },
  mounted () {
    this.displayOverflow = this.overflow

    setTimeout(() => {
      this.isVisible = true

      this.$nextTick(this.initialize)
    }, this.delay)

    if (this.$listeners && this.$listeners.close) {
      this.displayCloseButton = true
      this.$refs.backdrop.classList.add('clickable')
    }

    if (this.pauseBodyScroll) {
      document.body.classList.add('document-body-no-scroll')
    }

    if (this.$slots.footer) {
      this.$el.addEventListener('scroll', this.checkScrollBottom)
    }

    window.addEventListener('resize', this.initialize)
  },
  destroyed () {
    if (this.pauseBodyScroll) {
      document.body.classList.remove('document-body-no-scroll')
    }

    window.removeEventListener('resize', this.initialize)
  },
  methods: {
    initialize () {
      this.checkHeight()
      this.checkScrollBottom()
      // this.resizeUpdate()
    },
    resizeUpdate () {
      let STYLING = this.$refs.modalBody.getBoundingClientRect()
      let EL_HEIGHT = STYLING.height

      this.$refs.inlineFooter.style.width = STYLING.width + 'px'
      this.$refs.inlineFooterWrapper.style.height = EL_HEIGHT + 'px'
    },
    checkScrollBottom () {
      let scrollBottom = this.$el.scrollHeight -
        this.$el.clientHeight -
        this.$el.scrollTop

      this.disableFooterShadow = scrollBottom < 50 || this.centerPosition
    },
    checkHeight () {
      const bodyHeight = this.$refs.modalBody.clientHeight
      const windowHeight = window.innerHeight
      const footerInnerHeight = this.$refs.inlineFooter.scrollHeight
      const footerOuterHeight = this.$refs.inlineFooterWrapper.clientHeight

      this.centerPosition = bodyHeight < windowHeight - 40

      if (footerInnerHeight !== footerOuterHeight) {
        this.$refs.inlineFooterWrapper.style.height = `${footerInnerHeight}px`
      }
    },
    close () {
      const delay = 200
      this.isVisible = false

      setTimeout(() => {
        this.$emit('close')
      }, delay)
    }
  }
}

</script>
<style>
  .document-body-no-scroll {
    overflow: hidden !important;
  }
</style>
<style scoped lang="less">
  @import '~el-style/variables';

  .el-modal {
    position: fixed;
    display: block;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 1000000;
    box-sizing: border-box;
    overflow: auto;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    .el-modal-backdrop {
      position: fixed;
      display: block;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      background-color: @color-backdrop;
      opacity: 0.9;
      z-index: 1;
      box-sizing: border-box;
    }

    .body {
      position: relative;
      display: block;
      top: auto;
      left: auto;
      width: 100%;
      max-width: @section-content-max-width;
      height: auto;
      text-align: left;
      z-index: 2;
      background-color: #fff;
      border-radius: @radius-small;
      box-shadow: @shadow-wide;
      overflow-y: scroll;
      overflow-x: hidden;
      box-sizing: border-box;
      margin: 20px auto;
      padding: 30px 30px;

      @media (max-width: @section-content-max-width) {
        border-radius: 0px;
        padding: 30px 15px;
        margin: 0px;
      }

      .closeButton {
        position: absolute;
        top: 10px;
        left: 10px;
        height: 20px;
        width: 20px;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .header {
    width: 100%;
  }

  .displayOverflow {
    overflow: visible !important;
  }

  .disableFooterShadow {
    box-shadow: none !important;
    border-radius: 5px;
  }

  .clickable {
    cursor: pointer;
  }

  .inline-footer-wrapper {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    overflow: visible;
  }

  .inline-footer {
    position: relative;
    display: block;
    width: 100%;
    padding: @top-margin-element 0px;
    box-sizing: border-box;
  }

  .stickyFixed {
    position: fixed;
    top: auto;
    bottom: 0px;
    width: 100%;
    max-width: @section-content-max-width;
    left: 0px;
    right: 0px;
    margin: auto;
    border-top: 1px solid @color-grey-light;
    background-color: #ffffff;
    padding: @top-margin-element 30px;

    @media (max-width: @section-content-max-width) {
      padding: @top-margin-element 15px;
    }
  }

  .centerPosition {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(100px);
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0 !important;
  }
</style>
