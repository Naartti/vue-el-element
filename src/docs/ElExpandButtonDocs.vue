<template>
<div class="el-element-docs">
  <h2>Show case</h2>
  <el-inline>
    <el-expand-button v-model="model.two" margin-right/>
    <el-expand-button shadow v-model="model.two" margin-right/>
    <el-expand-button color rounded v-model="model.two" margin-right/>
    <el-expand-button color v-model="model.two" margin-right/>
    <el-expand-button secondary v-model="model.two" margin-right/>
    <el-expand-button horizontal v-model="model.two" margin-right>
      <el-tooltip>
        Horizontal expansion
      </el-tooltip>
    </el-expand-button>
  </el-inline>

  <el-delimiter />

  <h2>Usage</h2>
  <el-expand-button v-model="model.one" />
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
        one: false,
        two: false,
        three: true,
        four: false
      },
      code: {
        primary: `<el-expand-button
  v-model="isExpanded"
  />`
      },
      props: [{
        prop: 'rounded',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'color',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'secondary',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'shadow',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'horizontal',
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
