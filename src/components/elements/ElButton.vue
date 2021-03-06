<template>
<button
  type="button"
  @click="next"
  class="el-button el-animation"
  :class="{
    'el-button--icon': icon === true,
    'el-button--primary': !disabled && !secondary && !danger,
    'el-button--disabled': disabled && !secondary,
    'el-button--secondary--disabled': disabled && secondary,
    'el-button--danger': danger && !secondary && !disabled,
    'el-button--secondary': secondary && !danger && !disabled,
    'el-button--secondary--danger': danger && secondary && !disabled,
    'el-button--link': link,
    'el-button--link--danger': link && danger,
    'el-button--link--disabled': link && disabled,
    [alignClassName]: true,
    [marginClassName]: true,
  }"
  >
  <el-tooltip
    v-if="tooltip !== ''"
    :delay="true"
    >
    {{tooltip}}
  </el-tooltip>
  <slot />
</button>
</template>
<script>
import margin from '@/util/mixins/margin'
import align from '@/util/mixins/align'
import ElTooltip from './ElTooltip.vue'

export default {
  components: { ElTooltip },
  mixins: [margin, align],
  name: 'ElButton',
  props: {
    disabled: Boolean,
    danger: Boolean,
    secondary: Boolean,
    link: Boolean,
    icon: Boolean,
    tooltip: {
      type: String,
      default: ''
    },
    blurDelay: {
      type: Number,
      default: 400
    }
  },
  methods: {
    next (e) {
      if (this.disabled === true) return

      this.$emit('click', e)

      setTimeout(() => {
        if (this.$el && this.$el.blur) {
          this.$el.blur()
        }
      }, this.blurDelay)
    }
  }
}
</script>
<style scoped lang="less">
  @import '~el-style/variables.less';

  .el-button {
    padding: @button-padding;
    text-decoration: bold;
    text-transform: none;
    cursor: pointer;
    font-size: @button-font-size;
    border-radius: @button-radius;
    height: @button-height;
    min-height: @button-height;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;

    &--primary {
      background-color: @color-button-primary;
      border: 1px solid @color-button-primary;
      color: @color-font-light;

      &:hover {
        background-color: @color-button-primary-hover;
        border: 1px solid @color-button-primary-hover;
      }
    }

    &--secondary {
      color: @color-button-secondary;
      border: 1px solid @color-button-secondary;
      background-color: transparent;

      &:hover {
        color: @color-button-secondary-hover;
        border: 1px solid @color-button-secondary-hover;
      }

      &--disabled {
        background-color: transparent;
        border: 1px solid @color-disable-dark;
        color: @color-disable-dark;
        cursor: not-allowed;
      }

      &--danger {
        background-color: transparent;
        color: @color-button-danger;
        border: 1px solid @color-button-danger;

        &:hover {
          color: @color-button-danger-hover;
          border: 1px solid @color-button-danger-hover;
        }
      }
    }

    &--disabled {
      background-color: @color-disable-dark;
      border: 1px solid @color-disable-dark;
      color: @color-font-light;
      cursor: not-allowed;
    }

    &--danger {
      background-color: @color-button-danger;
      border: 1px solid @color-button-danger;
      color: @color-font-light;

      &:hover {
        background-color: @color-button-danger-hover;
        border: 1px solid @color-button-danger-hover;
      }
    }

    &--icon {
      width: @button-height;
      min-width: @button-height;
      padding: 0px;
    }

    &--link {
      background-color: transparent;
      border: none;
      color: @color-button-primary;
      padding-right: 0px;
      padding-left: 0px;

      &:hover {
        background-color: transparent;
        border: none;
        color: @color-button-link;
        text-decoration: underline;
      }

      &--danger {
        color: @color-button-danger;

        &:hover {
          color: @color-button-danger-hover;
        }
      }

      &--disabled {
        color: @color-disable-dark;
        cursor: not-allowed;

        &:hover {
          color: @color-disable-dark;
          text-decoration: none;
        }
      }
    }
  }
</style>
