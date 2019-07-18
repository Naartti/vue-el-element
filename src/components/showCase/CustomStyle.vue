<template>
<div>
  <h2>Text</h2>
  <h3>Font family</h3>
  <el-inline nowrap>
    <el-input margin-right
      v-model="fontFamily"
      />

    <el-button @click="reRender()">
      Apply
    </el-button>
  </el-inline>

  <h3>Font color</h3>
  <el-inline nowrap>
    <el-input margin-right
      v-model="color"
      />

    <el-button @click="reRender()">
      Apply
    </el-button>
  </el-inline>
</div>
</template>
<script>
export default {
  data () {
    return {
      fontFamily: `'Proxima Nova', 'Avenir', Helvetica, Arial, sans-serif`,
      color: '#222222'
    }
  },
  mounted () {
    window.customStyle = this
  },
  methods: {
    reRender () {
      const customStyle = { ...this.$data }

      console.log(customStyle)

      // Global styles
      const elElements = document.querySelectorAll('[class^="el-"]')

      elElements.forEach(elElement => {
        Object.entries(customStyle).forEach(([key, value]) => {
          elElement.style[key] = value
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
