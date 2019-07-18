<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-select
    v-model="model.one"
    :options="[
      { value: 1, label: 'Apple' },
      { value: 2, label: 'Banana' },
      { value: 3, label: 'Orange' },
      { value: 4, label: 'Lime' },
      { value: 5, label: 'Melon' },
      { value: 6, label: 'Peach' },
    ]"
    placeholder="Select fruit..."
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
        primary: `<el-select
  v-model="selectedFruits"
  :options="[
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'lime', label: 'Lime' },
    { value: 'melon', label: 'Melon' },
    { value: 'peach', label: 'Peach' },
  ]"
  placeholder="Select fruit..."
  />`
      },
      props: [{
        prop: 'options',
        type: 'Array',
        default: '[]'
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
