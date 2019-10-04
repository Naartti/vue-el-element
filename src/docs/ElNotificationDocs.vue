<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <div class="block block--margin">
    <el-notification>
      2
    </el-notification>
  </div>

  <br><pre><code class="hljs html">{{code.primary}}</code></pre>

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

  <el-delimiter />

  <h2>Demo</h2>
  <el-tab>
    <el-tab-item title="Inbox" notification="123">
      ...
    </el-tab-item>
    <el-tab-item title="Calendar">
      ...
    </el-tab-item>
    <el-tab-item title="Checklist" notification="3">
      ...
    </el-tab-item>
  </el-tab>

  <br><pre><code class="hljs html">{{code.demo}}</code></pre>
</div>
</template>
<script>
export default {
  data () {
    return {
      code: {
        primary: `<el-notification>
  2
</el-notification>`,
        demo: `<el-tab>
  <el-tab-item title="Inbox" notification="123">
    ...
  </el-tab-item>
  <el-tab-item title="Calendar">
    ...
  </el-tab-item>
  <el-tab-item title="Checklist" notification="3">
    ...
  </el-tab-item>
</el-tab>`
      },
      props: [{
        prop: 'left',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'relative',
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
