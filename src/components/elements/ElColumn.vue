<template>
<div class="el-column">
  <slot />
</div>
</template>
<script>
export default {

}
</script>

<style lang="less" scoped>
  .el-column {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: stretch;

    div:first-child {
      margin-left: 0px;
    }
  }
</style>
