<template>
<div class="el-element-docs">
  <h2>Show case</h2>
  <el-inline>
    <el-button
      :margin-right="true"
      :margin-top="true"
      >
      Primary
    </el-button>
    <el-button
      secondary
      margin-right
      margin-top
      >
      Secondary
    </el-button>
    <el-button
      secondary
      danger
      margin-right
      margin-top
      >
      Secondary danger
    </el-button>
    <el-button
      danger
      margin-right
      margin-top
      >
      Danger
    </el-button>
    <el-button
      disabled
      margin-right
      margin-top
      tooltip="Disabled"
      >
      Disabled
    </el-button>
    <el-button
      disabled
      secondary
      margin-right
      margin-top
      tooltip="Disabled"
      >
      Secondary disabled
    </el-button>
    <el-button
      link
      margin-right
      margin-top
      >
      Link
    </el-button>
    <el-button
      link
      danger
      margin-right
      margin-top
      >
      Link danger
    </el-button>
  </el-inline>

  <el-delimiter />

  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Primary">
      <el-button margin-top margin-bottom >Button label</el-button>
      <br><pre><code class="hljs html">{{code.primary}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Secondary">
      <el-button margin-top margin-bottom secondary>Button label</el-button>
      <br><pre><code class="hljs html">{{code.secondary}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Danger">
      <el-button margin-top margin-bottom danger>Button label</el-button>
      <br><pre><code class="hljs html">{{code.danger}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Danger & secondary">
      <el-button margin-top margin-bottom secondary danger>Button label</el-button>
      <br><pre><code class="hljs html">{{code.dangerSecondary}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Disabled & tooltip">
      <el-button margin-top margin-bottom disabled tooltip="Some description">Button label</el-button>
      <br><pre><code class="hljs html">{{code.disabledTooltip}}</code></pre>
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
  <p>Combine el-button with el-inline to create a accept/cancel option.</p><br>

  <el-inline>
    <el-button margin-right>Accept</el-button>
    <el-button danger secondary>Cancel</el-button>
  </el-inline>

  <br><pre><code class="hljs html">{{code.demo}}</code></pre>

</div>
</template>
<script>
export default {
  data () {
    return {
      code: {
        primary: `<el-button
  @click="doSomething()"
  >
  Button label
</el-button>`,
        secondary: `<el-button
  secondary
  @click="doSomething()"
  >
  Button label
</el-button>`,
        danger: `<el-button
  danger
  @click="doSomething()"
  >
  Button label
</el-button>`,
        dangerSecondary: `<el-button
  danger
  secondary
  @click="doSomething()"
  >
  Button label
</el-button>`,
        disabledTooltip: `<el-button
  disabled
  tooltip="Some description"
  @click="doSomething()"
  >
  Button label
</el-button>`,
        demo: `<el-inline>
  <el-button
    margin-right
    @click="accept()"
    >
    Accept
  </el-button>
  <el-button
    secondary
    danger
    @click="cancel()"
    >
    Cancel
  </el-button>
</el-inline>`
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
