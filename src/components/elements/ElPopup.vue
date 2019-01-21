<template>
<div class="main noPrint"
  :class="{ top }"
  >
  <div class="backdrop"
    @click="$emit('close')"
    />

  <transition name="slide-fade">
    <div
      class="body animation"
      v-bind:class="{ displayOverflow }"
      ref="body"
      v-show="isVisible"
      >

      <!-- Header -->
      <div
        class="header"
        v-show="$slots.header"
        >
        <slot name="header" />
      </div>

      <div
        v-if="displayCloseButton"
        class="closeButton animation"
        v-html="closeIcon"
        @click="$emit('close')"
        />

      <div
        class="content"
        ref="content"
        v-bind:class="{ displayOverflow }"
        >
        <slot/>
      </div>

      <!-- Footer -->
      <div
        class="footer animation"
        v-bind:class="{
          disableFooterShadow
        }"
        v-show="$slots.footer"
        >
        <div
          class="footerContent"
          >
          <slot
            name="footer"
            />
        </div>
      </div>
    </div>
  </transition>
</div>
</template>

<script>

import svgCodes from '../script/svg'

export default {
  name: 'ElPopup',
  props: {
    overflow: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      delay: 1,
      isVisible: false,
      displayCloseButton: false,
      closeIcon: svgCodes.close,
      disableFooterShadow: false,
      displayOverflow: false
    }
  },
  computed: {
    content () {
      return this.$refs.content
    }
  },
  mounted () {
    this.displayOverflow = this.overflow

    setTimeout(() => {
      this.isVisible = true
    }, this.delay)

    if (this.$listeners && this.$listeners.close) {
      this.displayCloseButton = true
    }

    if (this.$slots.footer) {
      this.content.addEventListener('scroll', this.checkScrollBottom)

      setTimeout(() => {
        this.checkScrollBottom()
      }, 1)
    }
  },
  methods: {
    checkScrollBottom () {
      const item = this.content
      let scrollBottom = item.scrollHeight - item.clientHeight - item.scrollTop

      this.disableFooterShadow = scrollBottom < 5
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(100px);
    opacity: 0;
  }

  .main {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000000;
    box-sizing: border-box;

    .backdrop {
      position: fixed;
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
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      width: 100%;
      max-width: @section-content-max-width;
      height: auto;
      max-height: 100%;
      text-align: left;
      z-index: 2;
      background-color: #fff;
      border-radius: @radius-small;
      box-shadow: @shadow;
      overflow-y: hidden;
      overflow-x: hidden;
      box-sizing: border-box;

      @media (max-width: @section-content-max-width) {
        border-radius: 0px;
      }

      p {
        font-size: 12px;
        text-align: left;
        margin-top: 10px;
      }

      div {
        width: 100%;
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

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-grow: 1;
        overflow: auto;
        width: 100%;
        padding: 30px 30px;
        box-sizing: border-box;
      }

      .footer {
        background-color: #ffffff;
        min-height: 50px;
        padding: 10px;
        box-sizing: border-box;
        box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.2);
        z-index: 10;
        border-radius: 0px 0px @radius-small @radius-small;

        .footerContent {
          width: 100%;
          max-width: @section-content-max-width;
          padding: 0px 20px;
          box-sizing: border-box;
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
  }

  .top {
    justify-content: flex-start;
    padding-top: 50px;

    @media (max-height: 600px) {
      padding-top: 0px;
    }
  }
</style>
