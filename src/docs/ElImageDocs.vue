<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Default">
      <el-image
        src="static/Mountains--wide.png"
        alt="Snowy mountains"
        />
      <br><pre><code class="hljs html">{{code.default}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Limit height">
      <el-image
        src="static/Mountains--wide.png"
        alt="Snowy mountains"
        max-height="200"
        />
      <br><pre><code class="hljs html">{{code.height}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Blur background">
      <el-image blur
        src="static/Mountains--narrow.png"
        alt="Snowy mountains"
        max-height="200"
        />
      <br><pre><code class="hljs html">{{code.narrow}}</code></pre>
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
  <el-inline nowrap>
    <el-image
      circle
      inset-shadow
      margin-right
      max-height="100"
      src="static/profile.png"
      />
    <div>
      <el-header tight>Mattias Naarttijärvi</el-header>
      <p>Founder of El Element</p>
    </div>
  </el-inline>

  <br><pre><code class="hljs html">{{code.demo}}</code></pre>

</div>
</template>
<script>
export default {
  data () {
    return {
      code: {
        default: `<el-image
  src="static/Mountains.png"
  />`,
        height: `<el-image
  max-height="200"
  src="static/Mountains.png"
  />`,
        narrow: `<el-image
  blur
  src="static/Mountains.png"
  />`,
        demo: `<el-inline nowrap>
  <el-image
    circle
    inset-shadow
    margin-right
    max-height="100"
    alt="Profile picture of Mattias"
    src="static/profile.png"
    />

  <div>
    <el-header tight>
      Mattias Naarttijärvi
    </el-header>

    <p>Founder of El Element</p>
  </div>
</el-inline>`
      },
      props: [{
        prop: 'src',
        type: 'String',
        default: '"'
      }, {
        prop: 'caption',
        type: 'String',
        default: '"'
      }, {
        prop: 'alt',
        type: 'String',
        default: '"'
      }, {
        prop: 'stretch',
        type: 'Boolean',
        default: 'true'
      }, {
        prop: 'blur',
        type: 'Boolean',
        default: 'true'
      }, {
        prop: 'max-height',
        type: 'String',
        default: 'auto'
      }, {
        prop: 'circle',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'inset-shadow',
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
