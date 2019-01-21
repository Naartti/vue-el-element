<template>
<div class="extendButton animation"
  @click="$emit('click')">

  <span class="more-icon"
    v-bind:class="{ iconDown : isExpanded }">
    <span ref="line1"
      class="animation more-line more-line-1"
      v-bind:class="{ transformed1 : isExpanded}">
    </span>
    <span ref="line2"
      class="animation more-line more-line-2"
      v-bind:class="{ transformed2 : isExpanded}">
    </span>
  </span>
</div>
</template>

<script>

export default {
  name: 'ElExtendButton',
  props: {
    isExpanded: {
      type: Boolean,
      default: false
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .extendButton {
    margin: auto;
    position: absolute;
    top: auto;
    bottom: -20px;
    left: Calc(50% - 5px);
    height: 40px;
    width: 40px !important;
    border-radius: 50%;
    box-shadow: @shadow;
    background-color: #ffffff;
    z-index: 2;
    cursor: pointer;

    &:hover {
      background-color: @color-grey-super-light;
      transform: scale(1.05);
    }
  }

  .more-icon {
    position: absolute;
    width: 15px;
    height: 10px;
    margin: auto;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    transform: rotate(90deg);
  }

  .iconDown {
    top: -2px;
  }

  .more-line {
    background-color: @color-button-primary;
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
</style>
