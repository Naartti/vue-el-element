<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-tab>
    <el-tab-item title="First tab">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p>
    </el-tab-item>
    <el-tab-item title="Another tab">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </el-tab-item>
    <el-tab-item title="A third tab">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. </p>
    </el-tab-item>
  </el-tab>

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
      code: {
        primary: `<el-tab>
  <el-tab-item title="First tab">
    <p>Lorem ipsum ...</p>
  </el-tab-item>

  <el-tab-item title="Another tab">
    <p>Lorem ipsum ...</p>
  </el-tab-item>

  <el-tab-item title="A third tab">
    <p>Lorem ipsum ...</p>
  </el-tab-item>
</el-tab>`
      },
      props: [{
        prop: 'title',
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
