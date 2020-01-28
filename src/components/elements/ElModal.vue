<template>
<div
  class="el-modal"
  :class="{
    'el-modal--center': centerPosition && !top
  }"
  >
  <div class="el-modal__scroll-wrapper">

    <!-- Backdrop -->
    <transition name="fade">
      <div
        class="el-modal__backdrop"
        :class="{
          'el-modal__backdrop--clickable': isClosable,
          'el-modal__backdrop--scrollable': isFinishedAnimation,
          'el-animation': !isFinishedAnimation
        }"
        @click="close"
        v-if="isVisible"
        ref="backdrop"
        />
    </transition>

    <!-- Modal -->
    <transition name="slide-fade-long">
      <div
        class="el-modal__body el-animation"
        :class="{
          'el-modal__body--overflow': displayOverflow,
          'el-modal__body--wide': wide
        }"
        ref="modalBody"
        v-if="isVisible"
        >

        <!-- Close button -->
        <div
          class="el-modal__close-button"
          :class="{
            'el-modal__close-button--fixed': fixedCloseButton,
            'el-modal__close-button--wide': wide
          }"
          v-if="isClosable"
          >
          <div
            class="el-modal__close-button__icon el-animation"
            :class="{
              'el-modal__close-button--right': closeButtonAlign === 'right'
            }"
            v-html="closeIcon"
            @click="close"
            />
        </div>

        <!-- Actual content -->
        <div class="el-modal__body__content">
          <slot />
        </div>

        <!-- Footer -->
        <div
          class="el-modal__footer"
          ref="inlineFooterWrapper"
          v-show="$slots.footer"
          >
          <div
            ref="inlineFooter"
            class="el-modal__footer__body"
            :class="{
              'el-modal__footer__body--sticky' : !this.absoluteFooterPosition,
              'el-modal__footer__body--wide': wide
            }"
            >

            <slot name="footer" />

          </div>
        </div>
      </div>
    </transition>

  </div>
</div>
</template>

<script>

import closeIcon from '@/assets/icons/close.js'

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
    },
    closeButtonAlign: {
      type: String,
      default: 'left'
    },
    wide: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    root: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      delay: 1,
      animationDuration: 500,
      isVisible: false,
      isFinishedAnimation: false,
      closeIcon: closeIcon,
      displayOverflow: true,
      centerPosition: true,
      absoluteFooterPosition: false,
      fixedCloseButton: false,
      observer: null
    }
  },
  computed: {
    isClosable () {
      return this.$listeners && this.$listeners.close && this.$listeners.close !== null
    }
  },
  watch: {
    isVisible () {
      this.$nextTick(() => {
        if (this.isVisible && this.$refs.modalBody) {
          // Update modal when slot-content is changing
          this.observer.observe(
            this.$refs.modalBody,
            { attributes: true, childList: true, characterData: true, subtree: true }
          )
        } else {
          this.observer.disconnect()
        }
      })
    }
  },
  mounted () {
    this.displayOverflow = this.overflow

    if (this.root === true) {
      this.moveToRoot()
    }

    setTimeout(() => {
      this.isVisible = true

      this.$nextTick(this.initialize)

      setTimeout(() => {
        this.isFinishedAnimation = true
        this.updateBackdropHeight()
      }, this.animationDuration)
    }, this.delay)

    if (this.pauseBodyScroll) {
      document.body.classList.add('document__body--no-scroll')
    }

    if (this.$slots.footer || this.isClosable) {
      this.$el.addEventListener('scroll', this.updateScroll)
    }

    window.addEventListener('resize', this.initialize)

    // Update modal when slot-content is changing
    this.observer = new MutationObserver(() => {
      this.initialize()
    })
  },
  destroyed () {
    if (this.pauseBodyScroll) {
      document.body.classList.remove('document__body--no-scroll')
    }

    window.removeEventListener('resize', this.initialize)
    this.isVisible = false
    this.isFinishedAnimation = false
  },
  methods: {
    moveToRoot () {
      document.body.appendChild(this.$el)
    },
    initialize () {
      this.checkHeight()
      this.checkScrollBottom()
      this.updateBackdropHeight()
    },
    updateScroll () {
      this.checkHeight()
      this.checkScrollBottom()
      this.checkTopScroll()
    },
    checkScrollBottom () {
      if (!this.$slots.footer) {
        return
      }

      let scrollBottom = this.$el.scrollHeight -
        this.$el.clientHeight -
        this.$el.scrollTop

      this.absoluteFooterPosition = scrollBottom < 50 || this.centerPosition
    },
    checkTopScroll () {
      if (!this.isClosable ||
        !this.$refs ||
        !this.$refs.modalBody) {
        return
      }

      let scrollTop = this.$refs.modalBody.getBoundingClientRect().top
      this.fixedCloseButton = scrollTop < 0
    },
    checkHeight () {
      if (!this.$refs ||
        !this.$refs.modalBody) {
        return
      }

      const bodyHeight = this.$refs.modalBody.clientHeight
      const windowHeight = window.innerHeight
      const footerInnerHeight = this.$refs.inlineFooter.scrollHeight
      const footerOuterHeight = this.$refs.inlineFooterWrapper.clientHeight

      this.centerPosition = bodyHeight < windowHeight - 40

      if (footerInnerHeight !== footerOuterHeight) {
        this.$refs.inlineFooterWrapper.style.height = `${footerInnerHeight}px`
      }
    },
    updateBackdropHeight () {
      if (!this.isVisible || !this.$refs.backdrop || !this.$refs.modalBody || !this.isFinishedAnimation) {
        return
      }

      this.isFinishedAnimation = false

      this.$nextTick(() => {
        if (!this.$refs ||
          !this.$refs.modalBody) {
          this.isFinishedAnimation = true
          return
        }

        const scrollHeight = this.$el.scrollHeight
        const { height } = this.$refs.modalBody.getBoundingClientRect()

        const backdropHeight = scrollHeight > 0 ? `${Math.ceil(scrollHeight)}px` : `${Math.ceil(height)}px`
        this.$refs.backdrop.style.height = backdropHeight

        this.isFinishedAnimation = true
      })
    },
    close () {
      if (!this.isClosable) {
        return
      }

      const delay = 300
      this.isVisible = false
      this.isFinishedAnimation = false

      setTimeout(() => {
        this.$emit('close')
      }, delay)
    }
  }
}

</script>
<style>
  .document__body--no-scroll {
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

    &--center {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__scroll-wrapper {
      background-color: transparent;
      width: 100%;
    }

    &__backdrop {
      position: fixed;
      display: block;
      top: 0px;
      left: 0px;
      height: auto;
      min-height: 100vh;
      width: 100%;
      background-color: @color-backdrop;
      opacity: 0.9;
      z-index: 1;
      box-sizing: border-box;

      &--clickable {
        cursor: pointer;
      }

      &--scrollable {
        position: absolute;
      }
    }

    &__body {
      position: relative;
      display: block;
      top: auto;
      left: auto;
      width: 100%;
      max-width: @section-content-max-width;
      height: auto;
      text-align: left;
      z-index: 2;
      background-color: @color-background;
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

      &--overflow {
        overflow: visible !important;
      }

      &--wide {
        max-width: @section-content-wide-max-width;

        @media (max-width: @section-content-wide-max-width) {
          border-radius: 0px;
          padding: 30px 15px;
          margin: 0px;
        }
      }

      &__content {
        width: 100%;
        position: relative;
        z-index: 2;
      }
    }

    &__footer {
      position: relative;
      display: block;
      width: 100%;
      height: auto;
      box-sizing: border-box;
      overflow: visible;
      z-index: 1000;

      &__body {
        position: relative;
        display: block;
        width: 100%;
        padding: @top-margin-element 0px;
        box-sizing: border-box;

        &--sticky {
          position: fixed;
          top: auto;
          bottom: 0px;
          width: 100%;
          max-width: @section-content-max-width;
          left: 0px;
          right: 0px;
          margin: auto;
          border-top: 1px solid @color-grey-2;
          background-color: @color-background;
          padding: @top-margin-element 30px;

          @media (max-width: @section-content-max-width) {
            padding: @top-margin-element 15px;
          }
        }

        &--wide {
          max-width: @section-content-wide-max-width;

          @media (max-width: @section-content-wide-max-width) {
            padding: @top-margin-element 15px;
          }
        }
      }
    }

    &__close-button {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      height: 1px;
      width: 100%;
      max-width: @section-content-max-width;
      margin: auto;
      z-index: 10;
      overflow: visible;

      &--wide {
        max-width: @section-content-wide-max-width;
      }

      &--fixed {
        position: fixed !important;
      }

      &--right {
        left: auto !important;
        right: 5px !important;
      }

      &__icon {
          position: absolute;
          top: 5px;
          left: 5px;
          height: 20px;
          width: 20px;
          cursor: pointer;
          background-color: @color-background;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;

          &:hover {
            transform: scale(1.1);
          }
        }
    }
  }
</style>
