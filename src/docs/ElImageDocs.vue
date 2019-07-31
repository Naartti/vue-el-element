<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Large">
      <el-image stretch
        src="static/Mountains--wide.png"
        />
      <br><pre><code class="hljs html">{{code.large}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Narrow & blur">
      <el-image blur
        src="static/Mountains--narrow.png"
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
      small
      margin-right
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
        large: `<el-image
  large
  stretch
  src="static/Mountains--wide.png"
  />`,
        narrow: `<el-image
  blur
  src="static/Mountains--narrow.png"
  />`,
        demo: `<el-inline nowrap>
  <el-image
    circle
    inset-shadow
    small
    margin-right
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
        default: '400px'
      }, {
        prop: 'circle',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'inset-shadow',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'caption',
        type: 'String',
        default: '"'
      }, {
        prop: 'alt',
        type: 'String',
        default: '"'
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
