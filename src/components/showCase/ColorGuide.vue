<template>
<div>
  <el-header margin-top>Main</el-header>
  <el-inline
    v-for="state in ['primary', 'secondary']"
    :key="state"
    >
    <div class="color-card"
      v-for="index in [1, 2, 3, 4, 5, 6, 7]"
      :key="`${state}_${index}`"
      >
      <div :class="`color-preview color-${state}-${index}`" />
      <p>{{`@color-${state}-${index}`}}</p>
    </div>
  </el-inline>

  <el-header margin-top>Grey</el-header>
  <el-inline>
    <div class="color-card"
      v-for="index in [1, 2, 3, 4, 5, 6, 7]"
      :key="`grey_${index}`"
      >
      <div :class="`color-preview color-grey-${index}`" />
      <p>{{`@color-grey-${index}`}}</p>
    </div>
  </el-inline>

  <el-header margin-top>State</el-header>
  <el-inline
    v-for="state in ['success', 'info', 'warning', 'danger']"
    :key="state"
    >
    <div class="color-card"
      v-for="index in [1, 2, 3, 4, 5, 6, 7]"
      :key="`${state}_${index}`"
      >
      <div :class="`color-preview color-${state}-${index}`" />
      <p>{{`@color-${state}-${index}`}}</p>
    </div>
  </el-inline>
</div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
  @import '~el-style/variables.less';

  .color-card {
    height: 120px;
    width: 80px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    border-radius: @radius-small;
    box-shadow: @shadow;
    overflow: hidden;
    margin-top: @top-margin-element;
    margin-right: @side-margin;
    font-family: @font-family;
    font-size: @font-size-small;
    text-align: center;

    p {
      margin: 0px;
      margin-top: 10px;
      padding: 0px;
    }
  }

  .color-preview {
    width: 100%;
    height: 70px;
    box-shadow: inset @shadow;
  }

  .color-primary-7 { background-color: @color-primary-7; }
  .color-primary-6 { background-color: @color-primary-6; }
  .color-primary-5 { background-color: @color-primary-5; }
  .color-primary-4 { background-color: @color-primary-4; }
  .color-primary-3 { background-color: @color-primary-3; }
  .color-primary-2 { background-color: @color-primary-2; }
  .color-primary-1 { background-color: @color-primary-1; }

  .color-secondary-7 { background-color: @color-secondary-7; }
  .color-secondary-6 { background-color: @color-secondary-6; }
  .color-secondary-5 { background-color: @color-secondary-5; }
  .color-secondary-4 { background-color: @color-secondary-4; }
  .color-secondary-3 { background-color: @color-secondary-3; }
  .color-secondary-2 { background-color: @color-secondary-2; }
  .color-secondary-1 { background-color: @color-secondary-1; }

  .color-grey-7 { background-color: @color-grey-7; }
  .color-grey-6 { background-color: @color-grey-6; }
  .color-grey-5 { background-color: @color-grey-5; }
  .color-grey-4 { background-color: @color-grey-4; }
  .color-grey-3 { background-color: @color-grey-3; }
  .color-grey-2 { background-color: @color-grey-2; }
  .color-grey-1 { background-color: @color-grey-1; }

  .color-danger-7 { background-color: @color-danger-7; }
  .color-danger-6 { background-color: @color-danger-6; }
  .color-danger-5 { background-color: @color-danger-5; }
  .color-danger-4 { background-color: @color-danger-4; }
  .color-danger-3 { background-color: @color-danger-3; }
  .color-danger-2 { background-color: @color-danger-2; }
  .color-danger-1 { background-color: @color-danger-1; }

  .color-warning-7 { background-color: @color-warning-7; }
  .color-warning-6 { background-color: @color-warning-6; }
  .color-warning-5 { background-color: @color-warning-5; }
  .color-warning-4 { background-color: @color-warning-4; }
  .color-warning-3 { background-color: @color-warning-3; }
  .color-warning-2 { background-color: @color-warning-2; }
  .color-warning-1 { background-color: @color-warning-1; }

  .color-info-7 { background-color: @color-info-7; }
  .color-info-6 { background-color: @color-info-6; }
  .color-info-5 { background-color: @color-info-5; }
  .color-info-4 { background-color: @color-info-4; }
  .color-info-3 { background-color: @color-info-3; }
  .color-info-2 { background-color: @color-info-2; }
  .color-info-1 { background-color: @color-info-1; }

  .color-success-7 { background-color: @color-success-7; }
  .color-success-6 { background-color: @color-success-6; }
  .color-success-5 { background-color: @color-success-5; }
  .color-success-4 { background-color: @color-success-4; }
  .color-success-3 { background-color: @color-success-3; }
  .color-success-2 { background-color: @color-success-2; }
  .color-success-1 { background-color: @color-success-1; }

</style>
