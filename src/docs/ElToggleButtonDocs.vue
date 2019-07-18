<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-toggle-button v-model="model.one" />
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

  <el-delimiter />

  <h2>Demo</h2>
  <p>Combine el-toggle-button with el-inline to create settings form.</p><br>

  <el-inline nowrap>
    <el-toggle-button
      margin-right
      v-model="model.two"
      />
    <b>Email notifications</b>
  </el-inline>
  <el-inline nowrap margin-top>
    <el-toggle-button
      margin-right
      v-model="model.three"
      />
    <b>Newsletter subscription</b>
  </el-inline>
  <el-inline nowrap margin-top>
    <el-toggle-button
      margin-right
      v-model="model.four"
      />
    <b>Position sharing</b>
  </el-inline>

  <br>

  <pre><code class="hljs html">{{code.demoInline}}</code></pre>

</div>
</template>
<script>
export default {
  data () {
    return {
      model: {
        one: false,
        two: false,
        three: true,
        four: false
      },
      code: {
        primary: `<el-toggle-button
  v-model="isActive"
  />`,
        demoInline: `<el-inline nowrap>
  <el-toggle-button
    margin-right
    v-model="emailIsActive"
    />
  <b>Email notifications</b>
</el-inline>

<el-inline nowrap margin-top>
  <el-toggle-button
    margin-right
    v-model="newsletterIsActive"
    />
  <b>Newsletter subscription</b>
</el-inline>

<el-inline nowrap margin-top>
  <el-toggle-button
    margin-right
    v-model="positionSharingIsActive"
    />
  <b>Position sharing</b>
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
