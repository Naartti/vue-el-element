<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Two columns">
      <el-column>
        <el-column-item :grow="1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p>
        </el-column-item>
        <el-column-item>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor.</p>
        </el-column-item>
      </el-column>

      <br><pre><code class="hljs html">{{code.two}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Three columns">
      <el-column>
        <el-column-item>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p>
        </el-column-item>
        <el-column-item>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor.</p>
        </el-column-item>
        <el-column-item>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor.</p>
        </el-column-item>
      </el-column>

      <br><pre><code class="hljs html">{{code.three}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Three columns (wrap)">
      <el-column wrap>
        <el-column-item>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p>
        </el-column-item>
        <el-column-item>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor.</p>
        </el-column-item>
        <el-column-item>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor.</p>
        </el-column-item>
      </el-column>

      <br><pre><code class="hljs html">{{code.wrap}}</code></pre>
    </el-tab-item>
  </el-tab>

  <el-delimiter />

  <h2>Props</h2>
  <h3>el-column</h3>
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

  <br>
  <h3>el-column-item</h3>
  <table>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
    </tr>
    <tr v-for="prop in elColumnItemProps"
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
        two: `<el-column>
  <el-column-item>
    <p>Lorem ipsum...</p>
  </el-column-item>

  <el-column-item>
    <p>Lorem ipsum...</p>
  </el-column-item>
</el-column>`,
        three: `<el-column>
  <el-column-item>
    <p>Lorem ipsum...</p>
  </el-column-item>

  <el-column-item>
    <p>Lorem ipsum...</p>
  </el-column-item>

  <el-column-item>
    <p>Lorem ipsum...</p>
  </el-column-item>
</el-column>`,
        wrap: `<el-column wrap>
  <el-column-item>
    <p>Lorem ipsum...</p>
  </el-column-item>

  <el-column-item>
    <p>Lorem ipsum...</p>
  </el-column-item>

  <el-column-item>
    <p>Lorem ipsum...</p>
  </el-column-item>
</el-column>`
      },
      props: [{
        prop: 'wrap',
        type: 'Boolean',
        default: 'false'
      }],
      elColumnItemProps: [{
        prop: 'grow',
        type: 'Number',
        default: '1'
      }, {
        prop: 'width',
        type: 'Number, String',
        default: '"auto"'
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
