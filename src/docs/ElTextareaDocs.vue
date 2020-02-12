<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-textarea
    placeholder="Placeholder..."
    />

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
      model: {
        one: []
      },
      code: {
        primary: `<el-textarea
  placeholder="Placeholder..."
  v-model="value"
  />`
      },
      props: [{
        prop: 'warning',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'success',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'focus',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'type',
        type: 'String',
        default: '""'
      }, {
        prop: 'placeholder',
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
