<template>
<div
  class="el-inline"
  :class="{
    'el-inline--center': center,
    'el-inline--nowrap': !wrap || nowrap,
    'el-inline--stretch': stretch,
    'el-inline--tight': tight,
    'el-inline--space-between': spaceBetween,
    'el-inline--end': end,
    [marginClassName]: true,
  }"
  @click="click"
  >
  <slot />
</div>
</template>
<script>
import margin from '@/util/mixins/margin'

export default {
  name: 'ElInline',
  mixins: [margin],
  props: {
    center: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: true
    },
    nowrap: {
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
    },
    end: {
      type: Boolean,
      default: false
    },
    tight: Boolean
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
  @import '~el-style/variables.less';

  .el-inline {
    position: relative;
    width: auto;
    height: auto;
    min-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    &--center {
      justify-content: center;
    }

    &--nowrap {
      flex-wrap: nowrap !important;
    }

    &--stretch {
      width: 100%;
    }

    &--tight {
      min-height: 0px;
    }

    &--space-between {
      justify-content: space-between;
    }

    &--end {
      justify-content: flex-end;
    }
  }
</style>
