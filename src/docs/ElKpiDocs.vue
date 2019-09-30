<template>
<div class="el-element-docs">
  <h2>Show case</h2>
  <el-inline nowrap space-between>
    <el-kpi margin-right
      value="9999"
      caption="Power"
      />
    <el-kpi margin-right
      :value="12345"
      caption="Revenue"
      space-thousand
      danger
      trend="negative"
      unit="kr"
      />
    <el-kpi margin-right
      :value="534"
      caption="Customers"
      space-thousand
      success
      />
    <el-kpi margin-right
      :value="76533456"
      caption="Goal"
      space-thousand
      trend="positive"
      />
  </el-inline>

  <el-delimiter />

  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Primary">
      <el-kpi
        value="12345"
        caption="Users"
        />
      <br><pre><code class="hljs html">{{code.primary}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Danger">
      <el-kpi
        danger
        value="12345"
        caption="Revenue"
        unit="kr"
        trend="negative"
        />
      <br><pre><code class="hljs html">{{code.danger}}</code></pre>
    </el-tab-item>
    <el-tab-item title="Success">
      <el-kpi
        success
        value="12345"
        caption="Revenue"
        unit="kr"
        trend="positive"
        />
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
    return { code: {
      primary: `<el-kpi
  value="12345"
  caption="Users"
  />`,
      danger: `<el-kpi
  danger
  value="12345"
  caption="Revenue"
  unit="kr"
  trend="negative"
  />`,
      success: `<el-kpi
  success
  value="12345"
  caption="Revenue"
  unit="kr"
  trend="positive"
  />`
    },
    props: [{
      prop: 'value',
      type: 'Number, String',
      default: '0'
    }, {
      prop: 'caption',
      type: 'String',
      default: '""'
    }, {
      prop: 'unit',
      type: 'String',
      default: '""'
    }, {
      prop: 'trend',
      type: '"positive", "negative',
      default: '""'
    }, {
      prop: 'secondary',
      type: 'Boolean',
      default: 'false'
    }, {
      prop: 'danger',
      type: 'Boolean',
      default: 'false'
    }, {
      prop: 'space-thousand',
      type: 'Boolean',
      default: 'true'
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
