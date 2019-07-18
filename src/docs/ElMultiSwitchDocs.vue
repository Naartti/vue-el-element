<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-multi-switch
      v-model="model.one"
      :options="[
        { value: 1, label: 'Backlog' },
        { value: 2, label: 'In progress' },
        { value: 3, label: 'Testing' },
        { value: 4, label: 'Done' },
      ]"
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

  <el-delimiter />
</div>
</template>
<script>
export default {
  data () {
    return {
      model: {
        one: 1
      },
      code: {
        primary: `<el-multi-switch
  v-model="activeTab"
  :options="[
    { value: 1, label: 'Backlog' },
    { value: 2, label: 'In progress' },
    { value: 3, label: 'Testing' },
    { value: 4, label: 'Done' },
  ]"
  />`
      },
      props: [{
        prop: 'options',
        type: 'Array',
        default: '[]'
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
