<template>
<div class="el-element-docs">
  <!--
  <h2>Show case</h2>
  <el-inline>
    <el-slider
      v-model="percentage"
      />
  </el-inline>

  <el-delimiter />
  -->

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
        primary: `<el-slider
  v-model="percentage"
  />`
      },
      props: [{
        prop: 'value',
        type: 'Number',
        default: '0'
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
