<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <p>This documentation is based on el-menu. The navigation panel is build from the <b>title</b> prop of el-menu-item & el-menu-section.</p>

  <br><pre><code class="hljs html">{{code.primary}}</code></pre>

  <el-delimiter />

  <h2>Props</h2>
  <h3>el-menu</h3>
  <table>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr v-for="prop in elMenuProps"
      :key="prop.prop"
      >
      <td>{{prop.prop}}</td>
      <td>{{prop.type}}</td>
      <td>{{prop.default}}</td>
    </tr>
  </table>

  <br>
  <h3>el-menu-item & el-menu-section</h3>
  <table>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr v-for="prop in elMenuItemProps"
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
        primary: `<el-menu>
  <el-menu-item title="Get started">
    <p>Lorem ipsum ...</p>
  </el-menu-item>

  <el-menu-section title="Elements" />

  <el-menu-item title="el-button">
    <p>Lorem ipsum ...</p>
  </el-menu-item>

  <el-menu-item title="el-header">
    <p>Lorem ipsum ...</p>
  </el-menu-item>
</el-menu>`
      },
      elMenuProps: [{
        prop: 'align',
        type: 'String',
        default: '"right"'
      }, {
        prop: 'center',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'center-content',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'title',
        type: 'Boolean',
        default: 'true'
      }],
      elMenuItemProps: [{
        prop: 'title',
        type: 'String',
        default: '""'
      }]
    }
  },
  mounted () {
    window.refreshHljs()
  }
}
</script>
<style lang="less" scoped>
</style>
