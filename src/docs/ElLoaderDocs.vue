<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-loader />

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

</div>
</template>
<script>
export default {
  data () {
    return {
      code: {
        primary: `<el-loader
  v-if="isLoading"
  />`,
        demo: `<el-inline space-between>
  <h2>Username</h2>

  <el-tag success>
    Pro
  </el-tag>
</el-inline>`
      },
      props: [{
        prop: 'paused',
        type: 'Boolean',
        default: 'false'
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
