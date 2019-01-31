<template>
<div class='main' :class="{ marginTop, marginRight }">
  <div class='mainHeader' @click="isExpanded = !isExpanded">
    <div class="more">
      <span class="more-circle">
        <span class="more-icon">
          <span ref="line1" class="animation more-line more-line-1" v-bind:class="{ transformed1 : isExpanded}"></span>
          <span ref="line2" class="animation more-line more-line-2" v-bind:class="{ transformed2 : isExpanded}"></span>
        </span>
      </span>
    </div>

    <span>
        {{title}}
    </span>
  </div>

  <transition name="slide-fade">
    <div v-if="isExpanded" class="collapseContent" key="collapseContent">
      <slot></slot>
    </div>
  </transition>

  <div v-if="isExpanded" class="extensionLine"></div>
</div>
</template>

<script>

import { ElCollapseToggle } from 'vue-el-element'

export default {
  name: 'ElCollapseHeader',
  props: {
    title: {
      type: String,
      default: ''
    },
    open: {
      type: Boolean,
      default: false
    },
    marginRight: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: Boolean,
      default: false
    }

  },
  components: { ElCollapseToggle },
  data () {
    return {
      isExpanded: false
    }
  },
  mounted () {
    if (this.open === true) this.isExpanded = true
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .main {
    position: relative;
    width: 100%;
    height: auto;
    font-size: 18px;
    text-align: left;
    margin-top: @top-margin-header;
    color: @color-font-dark;
    box-sizing: border-box;
  }

  .mainHeader {
    padding-left: 30px;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
  }

  .collapseContent {
    margin-left: 30px;
    width: auto;
    height: auto;
  }

  .extensionLine {
    position: absolute;
    top: 12px;
    left: 9px;
    height: 100%;
    width: 1px;
    background-color: @color-grey-dark;
  }

  /* collapse icon */
  .more {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }

  .more-circle {
    background-color: transparent;
    top: 2px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .more-icon {
    position: absolute;
    top: 22px;
    left: 23px;
    width: 15px;
    height: 10px;
    margin: auto;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    transform: rotate(90deg);
  }

  .more-line {
    background-color: @color-grey-super-dark;
    height: 2px;
    width: 12px;
    border-radius: 1px;
    position: absolute;
    left: 0px;
  }

  .more-line-1 {
    top: 1px;
    transform: translateX(2px) rotate(40deg);
  }

  .more-line-2 {
    bottom: 1px;
    transform: translateX(2px) rotate(-40deg);
  }

  .transformed1 {
    transform: translateX(3px) rotate(140deg);
  }

  .transformed2 {
    transform: translateX(3px) rotate(-140deg);
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-enter {
    transform: translateY(-10px);
    opacity: 0;
  }

  .marginTop {
    margin-top: @top-margin-header-large;
  }
</style>
