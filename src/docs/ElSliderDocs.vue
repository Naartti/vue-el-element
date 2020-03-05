<template>
<div class="el-element-docs">
  <h2>Show case</h2>
  <el-inline>
    <el-slider
      v-model="percentage"
      />
  </el-inline>

  <el-delimiter />

  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Primary">
      <el-slider
        v-model="percentage"
        />
      <br><pre><code class="hljs html">{{code.primary}}</code></pre>
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

  <el-delimiter />
</div>
</template>
<script>
export default {
  data () {
    return {
      percentage: 0.5,
      code: {
        primary: `<el-button
  @click="doSomething()"
  >
  Button label
</el-button>`
      },
      props: [{
        prop: 'secondary',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'danger',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'disabled',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'link',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'stretch',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'tooltip',
        type: 'String',
        default: '""'
      }, {
        prop: 'blur-delay',
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
</style>
