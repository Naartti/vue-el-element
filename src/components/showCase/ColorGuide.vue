<template>
<div>
  <h3>Main colors</h3>
  <el-inline>
    <div class="color-card">
      <div class="color-preview color-brand" />
      <p>@color-primary-4</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-accent" />
      <p>@color-secondary-4</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-backdrop" />
      <p>@color-backdrop</p>
    </div>
  </el-inline>

  <h3>Grey scale</h3>
  <el-inline>
    <div class="color-card">
      <div class="color-preview color-grey-super-light" />
      <p>@color-grey-1</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-grey-light" />
      <p>@color-grey-2</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-grey-medium" />
      <p>@color-grey-5</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-grey-dark" />
      <p>@color-grey-5</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-grey-super-dark" />
      <p>@color-grey-7</p>
    </div>
  </el-inline>

  <h3 :marginTop="true">State colors</h3>
  <el-inline>
    <div class="color-card">
      <div class="color-preview color-danger-light" />
      <p>@color-danger-1</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-danger-medium" />
      <p>@color-danger-4</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-danger-dark" />
      <p>@color-danger-7</p>
    </div>
  </el-inline>
  <el-inline :marginTop="true">
    <div class="color-card">
      <div class="color-preview color-warning-light" />
      <p>@color-warning-1</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-warning-medium" />
      <p>@color-warning-4</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-warning-dark" />
      <p>@color-warning-7</p>
    </div>
  </el-inline>
  <el-inline :marginTop="true">
    <div class="color-card">
      <div class="color-preview color-info-light" />
      <p>@color-info-1</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-info-medium" />
      <p>@color-info-4</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-info-dark" />
      <p>@color-info-7</p>
    </div>
  </el-inline>
  <el-inline :marginTop="true">
    <div class="color-card">
      <div class="color-preview color-success-light" />
      <p>@color-success-1</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-success-medium" />
      <p>@color-success-4</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-success-dark" />
      <p>@color-success-7</p>
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
    width: 120px;
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

  .color-brand {
    background-color: @color-primary-4;
  }

  .color-accent {
    background-color: @color-secondary-4;
  }

  .color-backdrop {
    background-color: @color-backdrop;
  }

  .color-grey-super-light {
    background-color: @color-grey-1;
  }

  .color-grey-light {
    background-color: @color-grey-2;
  }

  .color-grey-medium {
    background-color: @color-grey-5;
  }

  .color-grey-dark {
    background-color: @color-grey-5;
  }

  .color-grey-super-dark {
    background-color: @color-grey-7;
  }

  .color-danger-dark {
    background-color: @color-danger-7;
  }

  .color-danger-medium {
    background-color: @color-danger-4;
  }

  .color-danger-light {
    background-color: @color-danger-1;
  }

  .color-warning-dark {
    background-color: @color-warning-7;
  }

  .color-warning-medium {
    background-color: @color-warning-4;
  }

  .color-warning-light {
    background-color: @color-warning-1;
  }

  .color-info-dark {
    background-color: @color-info-7;
  }

  .color-info-medium {
    background-color: @color-info-4;
  }

  .color-info-light {
    background-color: @color-info-1;
  }

  .color-success-dark {
    background-color: @color-success-7;
  }

  .color-success-medium {
    background-color: @color-success-4;
  }

  .color-success-light {
    background-color: @color-success-1;
  }

</style>
