<template>
<div class="el-element-docs">
  <h2>Show case</h2>
  <el-inline margin-top>
    <el-tag margin-right warning>Warning</el-tag>
    <el-tag margin-right danger>Danger</el-tag>
    <el-tag margin-right success>Success</el-tag>
    <el-tag margin-right info>info</el-tag>
    <el-tag margin-right>No status</el-tag>
  </el-inline>

  <el-delimiter />

  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Warning">
      <el-inline>
        <el-tag margin-right warning>Some label</el-tag>
      </el-inline>
      <br><pre><code class="hljs html">{{code.warning}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Danger">
      <el-inline>
        <el-tag margin-right danger>Some label</el-tag>
      </el-inline>
      <br><pre><code class="hljs html">{{code.danger}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Success">
      <el-inline>
        <el-tag margin-right success>Some label</el-tag>
      </el-inline>
      <br><pre><code class="hljs html">{{code.success}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Info">
      <el-inline>
        <el-tag margin-right info>Some label</el-tag>
      </el-inline>
      <br><pre><code class="hljs html">{{code.info}}</code></pre>
    </el-tab-item>
    <el-tab-item title="No status">
      <el-inline>
        <el-tag margin-right>Some label</el-tag>
      </el-inline>
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

  <el-delimiter />

  <h2>Demo</h2>
  <p>Combine a header and el-tag with el-inline (and space-between) to create a tag to a header.</p><br>

  <el-inline space-between>
    <h2>Username</h2>
    <el-tag success>Pro</el-tag>
  </el-inline>

  <br><pre><code class="hljs html">{{code.demo}}</code></pre>

</div>
</template>
<script>
export default {
  data () {
    return {
      code: {
        warning: `<el-tag warning>
  Some label
</el-tag>`,
        danger: `<el-tag danger>
  Some label
</el-tag>`,
        success: `<el-tag success>
  Some label
</el-tag>`,
        info: `<el-tag info>
  Some label
</el-tag>`,
        noStatus: `<el-tag>
  Some label
</el-tag>`,
        demo: `<el-inline space-between>
  <h2>Username</h2>

  <el-tag success>
    Pro
  </el-tag>
</el-inline>`
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
      }, {
        prop: 'nowrap',
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
