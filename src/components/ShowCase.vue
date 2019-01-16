<template>
<div>
  <el-header>Header</el-header>

  <el-button>Button</el-button>
  <el-button :secondary="true">Secondary</el-button>
  <el-button :danger="true">Danger</el-button>
  <el-button :secondary="true" :danger="true">Secondary danger</el-button>

  <el-caption>Caption</el-caption>
</div>
</template>

<script>
export default {}
</script>
<style scoped lang="less">
</style>
