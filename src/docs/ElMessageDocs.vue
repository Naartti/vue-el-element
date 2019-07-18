<template>
<div class="el-element-docs">
  <h2>Show case</h2>
  <el-message margin-top warning>Warning</el-message>
  <el-message margin-top danger>Danger</el-message>
  <el-message margin-top success>Success</el-message>
  <el-message margin-top info>Info</el-message>
  <el-message margin-top>No status</el-message>

  <el-delimiter />

  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Warning">
      <el-message margin-right warning>Some label</el-message>
      <br><pre><code class="hljs html">{{code.warning}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Danger">
      <el-message margin-right danger>Some label</el-message>
      <br><pre><code class="hljs html">{{code.danger}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Success">
      <el-message margin-right success>Some label</el-message>
      <br><pre><code class="hljs html">{{code.success}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Info">
      <el-message margin-right info>Some label</el-message>
      <br><pre><code class="hljs html">{{code.info}}</code></pre>
    </el-tab-item>
    <el-tab-item title="No status">
      <el-message margin-right>Some label</el-message>
      <br><pre><code class="hljs html">{{code.noStatus}}</code></pre>
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
        warning: `<el-message warning>
  Some label
</el-message>`,
        danger: `<el-message danger>
  Some label
</el-message>`,
        success: `<el-message success>
  Some label
</el-message>`,
        info: `<el-message info>
  Some label
</el-message>`,
        noStatus: `<el-message>
  Some label
</el-message>`
      },
      props: [{
        prop: 'warning',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'danger',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'success',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'info',
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
</style>
