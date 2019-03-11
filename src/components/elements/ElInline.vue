<template>
<div class='inlineContainer'
  v-bind:class="{
    center,
    nowrap: wrap === false,
    marginTop,
    stretch,
    spaceBetween
  }"
  @click="click"
  >
  <slot />
</div>
</template>

<script>

export default {
  name: 'ElInline',
  props: {
    center: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: true
    },
    marginTop: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    },
    spaceBetween: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      if (this.$listeners && this.$listeners.click) {
        this.$emit('click')
      }
    }
  }
}

</script>

<style scoped lang="less">
  @import '~el-style/variables';

  .inlineContainer {
    position: relative;
    width: auto;
    min-width: @element-min-width;
    height: auto;
    min-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .center {
    justify-content: center;
  }

  .nowrap {
    flex-wrap: nowrap !important;
  }

  .marginTop {
    margin-top: @top-margin-element !important;
  }

  .stretch {
    width: 100%;
  }

  .spaceBetween {
    justify-content: space-between;
  }
</style>
