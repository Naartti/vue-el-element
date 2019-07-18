<template>
<div class="el-element-docs">
  <h2>Show case</h2>
  <el-header>Some Header</el-header>
  <el-header warning>Warning</el-header>
  <el-header danger>Danger</el-header>
  <el-header success>Success</el-header>

  <el-delimiter />

  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Primary">
      <el-header>Some header</el-header>
      <br><pre><code class="hljs html">{{code.primary}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Tight">
      <el-header tight>Some header</el-header>
      <br><pre><code class="hljs html">{{code.tight}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Warning">
      <el-header warning>Some header</el-header>
      <br><pre><code class="hljs html">{{code.warning}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Danger">
      <el-header danger>Some header</el-header>
      <br><pre><code class="hljs html">{{code.danger}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Success">
      <el-header success>Some header</el-header>
      <br><pre><code class="hljs html">{{code.success}}</code></pre>
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
        warning: `<el-header warning>
  Some header
</el-header>`,
        danger: `<el-header danger>
  Some header
</el-header>`,
        success: `<el-header success>
  Some header
</el-header>`,
        tight: `<el-header tight>
  Some header
</el-header>`,
        primary: `<el-header>
  Some header
</el-header>`
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
        prop: 'tight',
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
