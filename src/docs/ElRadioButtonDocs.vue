<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-radio-button
    v-model="model"
    :options="[
    { value: 1, label: 'Dog' },
    { value: 2, label: 'Cat' },
    { value: 3, label: 'Horse' }
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
</div>
</template>
<script>
export default {
  data () {
    return {
      model: null,
      code: {
        primary: `<el-radio-button
  v-model="favoritePet"
  :options="[
    { value: 1, label: 'Dog' },
    { value: 2, label: 'Cat' },
    { value: 3, label: 'Horse' }
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
</style>
