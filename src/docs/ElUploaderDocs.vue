<template>
<div class="el-element-docs">
  <h2>Usage</h2>

  <el-uploader
    caption="Drop image here (or click to upload)"
    accept="image/*"
    :multiple="true"
    @select="upload"
    />

  <el-image margin-top
    v-for="(src, index) in images"
   :key="index"
   :src="src"
   :blur="true"
   max-height="100px"
   />

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
      images: [],
      code: {
        primary: `<el-uploader
  caption="Drop image here (or click to upload)"
  accept="image/*"
  :multiple="true"
  @select="upload"
  />`,
        upload: `upload (files) {
  files.forEach(file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      const src = reader.result
      this.images.push(src)
    }
  })
}`
      },
      props: [{
        prop: 'caption',
        type: 'String',
        default: '""'
      }, {
        prop: 'accept',
        type: 'String',
        default: 'image/*'
      }, {
        prop: 'multiple',
        type: 'Boolean',
        default: 'true'
      }, {
        prop: 'prevent-default-on-body',
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
    },
    upload (files) {
      files.forEach(file => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
          const src = reader.result
          this.images.push(src)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>
