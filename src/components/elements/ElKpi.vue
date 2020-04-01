<template>
<div
  class="el-kpi"
  :class="{
    'el-kpi--clickable': clickable,
    [marginClassName]: true,
  }"
  @click="$emit('click')"
  >
  <div
    class="el-kpi__value"
    :class="{
      'el-kpi__value--success': success,
      'el-kpi__value--danger': danger
    }"
    >
    <slot />

    {{kpiValue}}

    <span v-if="unit !== ''">
      {{unit}}
    </span>

  </div>

  <el-inline tight>
    <div
      v-if="trend !== ''"
      class="el-kpi__trend"
      :class="{
        'el-kpi__trend--positive': trend === 'positive',
        'el-kpi__trend--negative': trend === 'negative'
      }"
      />

    <div
      class="el-kpi__caption"
      :class="{
        'el-kpi__caption--danger': danger,
        'el-kpi__caption--success': success
      }"
      >
      {{caption}}
    </div>
  </el-inline>
</div>
</template>
<script>
import margin from '@/util/mixins/margin'
import spaceThousand from 'script/spaceThousands.js'

export default {
  name: 'ElKpi',
  mixins: [margin],
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    caption: {
      type: String,
      default: ''
    },
    trend: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    },
    spaceThousand: {
      type: Boolean,
      default: true
    },
    success: Boolean,
    danger: Boolean
  },
  computed: {
    kpiValue () {
      if (!this.spaceThousand) {
        return this.value
      }

      return spaceThousand(this.value)
    },
    clickable () {
      return this.$listeners && this.$listeners.click
    }
  }
}
</script>
<style scoped lang="less">
  @import "~el-style/variables.less";

  .el-kpi {
    position: relative;

    &--clickable {
      cursor: pointer;

      &:hover .el-kpi__value {
        text-decoration: underline;
      }
    }

    &__value {
      position: relative;
      color: @color-grey-7;
      font-weight: 900;
      font-size: 18px;

      &--danger {
        color: @color-danger-4;
      }

      &--success {
        color: @color-success-4;
      }
    }

    &__caption {
      font-size: @font-size-x-small;
      color: @color-grey-6;
      font-style: italic;

      &--danger {
        color: @color-danger-3;
      }

      &--success {
        color: @color-success-3;
      }
    }

    &__trend {
      height: 14px;
      width: 24px;
      margin-right: 10px;
      background-repeat: no-repeat;
      background-position: center;

      &--positive {
        background-image: url("data:image/svg+xml;utf8,<svg width='24px' height='14px' viewBox='0 0 24 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'> <g id='KPI' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'> <g transform='translate(-446.000000, -565.000000)' id='trending-up-copy-3' stroke='%2343B8A9' stroke-width='2'> <g transform='translate(447.000000, 566.000000)'> <polyline id='Path' points='22 0 12.5 9.5 7.5 4.5 0 12'></polyline> <polyline id='Path' points='16 0 22 0 22 6'></polyline> </g> </g> </g> </svg>");
      }

      &--negative {
        background-image: url("data:image/svg+xml;utf8,<svg width='24px' height='14px' viewBox='0 0 24 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='KPI' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'><g transform='translate(-286.000000, -565.000000)' id='trending-up-copy' stroke='%23E98C8D' stroke-width='2'><g transform='translate(298.000000, 572.000000) scale(1, -1) translate(-298.000000, -572.000000) translate(287.000000, 566.000000)'> <polyline id='Path' points='22 0 12.5 9.5 7.5 4.5 0 12'></polyline> <polyline id='Path' points='16 0 22 0 22 6'></polyline> </g> </g> </g> </svg>");
      }
    }
  }
</style>
