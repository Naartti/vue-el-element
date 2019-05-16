<template>
<div
  class='el-collapse-header'
  :class="{
    'el-margin--right': marginRight,
    'el-margin--top': marginTop
  }"
  >
  <div
    class='el-collapse-header__header'
    @click="isExpanded = !isExpanded"
    >
    <div class="el-collapse-header__icon">
      <span class="el-collapse-header__icon__backgound">
        <span class="el-collapse-header__icon__icon">
          <span
            ref="line1"
            class="el-animation el-collapse-header__icon__line el-collapse-header__icon__line-1"
            :class="{
              'el-collapse-header__icon__line-1--open' : isExpanded
            }"
            />

          <span
            ref="line2"
            class="el-animation el-collapse-header__icon__line el-collapse-header__icon__line-2"
            :class="{
              'el-collapse-header__icon__line-2--open' : isExpanded
            }"
            />
        </span>
      </span>
    </div>

    <h3>{{title}}</h3>
  </div>

  <transition name="slide-fade">
    <div
      v-if="isExpanded"
      class="el-collapse-header__content"
      key="collapseContent"
      >
      <slot />
    </div>
  </transition>

  <div
    v-if="isExpanded"
    class="el-collapse-header__line"
    />
</div>
</template>
<script>
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

  .el-collapse-header {
    position: relative;
    width: 100%;
    height: auto;
    font-size: 18px;
    text-align: left;
    margin-top: @top-margin-header;
    color: @color-font-dark;
    box-sizing: border-box;

    &__header {
      padding-left: 30px;
      width: 100%;
      cursor: pointer;
      box-sizing: border-box;
    }

    &__content {
      margin-left: 30px;
      width: auto;
      height: auto;
    }

    &__line {
      position: absolute;
      top: 12px;
      left: 10px;
      height: 100%;
      width: 1px;
      z-index: -1;
      background-color: @color-grey-light;
    }

    &__icon {
      position: absolute;
      top: 3px;
      left: 0px;
      height: 20px;
      width: 20px;
      cursor: pointer;

      &__background {
        background-color: transparent;
        top: 2px;
        left: 0px;
        width: 100%;
        height: 100%;
        position: absolute;
      }

      &__icon {
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

      &__line {
        background-color: @color-grey-super-dark;
        height: 2px;
        width: 12px;
        border-radius: 1px;
        position: absolute;
        left: 0px;
      }

      &__line-1 {
        top: 1px;
        transform: translateX(2px) rotate(40deg);

        &--open {
          transform: translateX(3px) rotate(140deg);
        }
      }

      &__line-2 {
        bottom: 1px;
        transform: translateX(2px) rotate(-40deg);

        &--open {
          transform: translateX(3px) rotate(-140deg);
        }
      }
    }
  }
</style>
