<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Primary">
      <el-inline>
        <div class="block block--margin" />
        <div class="block" />
      </el-inline>
      <br><pre><code class="hljs html">{{code.primary}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Space between">
      <el-inline space-between>
        <div class="block block--margin" />
        <div class="block" />
      </el-inline>
      <br><pre><code class="hljs html">{{code.spaceBetween}}</code></pre>
    </el-tab-item>
  </el-tab>

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
        primary: `<el-inline>
  <div> ... </div>
  <div> ... </div>
</el-inline>`,
        spaceBetween: `<el-inline space-between>
  <div> ... </div>
  <div> ... </div>
</el-inline>`
      },
      props: [{
        prop: 'center',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'nowrap',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'stretch',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'space-between',
        type: 'Boolean',
        default: 'false'
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
  @import '~el-style/variables';

  .block {
    height: @button-height;
    border-radius: @radius-small;
    background-color: @color-grey-medium;
    width: 100px;

    &--margin {
      margin-right: @side-margin;
    }
  }
</style>
