<template>
<div class="el-element-docs">
  <h2>Showcase</h2>
  <el-inline>
    <div class="block block--margin">
      <el-tooltip visible>
        Top
      </el-tooltip>
    </div>

    <div class="block block--margin">
      <el-tooltip visible bottom>
        Bottom
      </el-tooltip>
    </div>

    <div class="block block--margin">
      Hover me

      <el-tooltip left>
        On the side
      </el-tooltip>
    </div>

    <div class="block block--margin">
      Hover me

      <el-tooltip right>
        On another side
      </el-tooltip>
    </div>
  </el-inline>

  <el-delimiter />

  <h2>Usage</h2>
  <pre><code class="hljs html">{{code.primary}}</code></pre>

  <el-delimiter />

  <h2>Props</h2>
  <table>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr v-for="prop in props"
      :key="prop.prop"
      >
      <td>{{prop.prop}}</td>
      <td>{{prop.type}}</td>
      <td>{{prop.default}}</td>
    </tr>
  </table>
</div>
</template>
<script>
export default {
  data () {
    return {
      code: {
        primary: `<el-tooltip>
  Write tooltip here
</el-tooltip>`
      },
      props: [{
        prop: 'visible',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'top',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'bottom',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'left',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'right',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'delay',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'delay-duration',
        type: 'Number',
        default: '400'
      }]
    }
  },
  mounted () {
    this.$nextTick(this.reRender)
  },
  methods: {
    reRender () {
      window.refreshHljs()
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables.less';

  .block {
    position: relative;
    height: @button-height;
    border-radius: @radius-small;
    background-color: @color-grey-5;
    width: 100px;
    color: @color-grey-0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &--margin {
      margin-right: @side-margin;
    }
  }
</style>
