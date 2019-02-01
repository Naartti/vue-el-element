<template>
<div>
  <el-header>Main colors</el-header>
  <el-inline>
    <div class="color-card">
      <div class="color-preview color-brand" />
      <p>@color-brand</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-accent" />
      <p>@color-accent</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-backdrop" />
      <p>@color-backdrop</p>
    </div>
  </el-inline>

  <el-header :marginTop="true">Grey scale</el-header>
  <el-inline>
    <div class="color-card">
      <div class="color-preview color-grey-super-light" />
      <p>@color-grey-super-light</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-grey-light" />
      <p>@color-grey-light</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-grey-medium" />
      <p>@color-grey-medium</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-grey-dark" />
      <p>@color-grey-dark</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-grey-super-dark" />
      <p>@color-grey-super-dark</p>
    </div>
  </el-inline>

  <el-header :marginTop="true">State colors</el-header>
  <el-inline>
    <div class="color-card">
      <div class="color-preview color-danger-light" />
      <p>@color-danger-light</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-danger-medium" />
      <p>@color-danger-medium</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-danger-dark" />
      <p>@color-danger-dark</p>
    </div>
  </el-inline>
  <el-inline :marginTop="true">
    <div class="color-card">
      <div class="color-preview color-warning-light" />
      <p>@color-warning-light</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-warning-medium" />
      <p>@color-warning-medium</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-warning-dark" />
      <p>@color-warning-dark</p>
    </div>
  </el-inline>
  <el-inline :marginTop="true">
    <div class="color-card">
      <div class="color-preview color-info-light" />
      <p>@color-info-light</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-info-medium" />
      <p>@color-info-medium</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-info-dark" />
      <p>@color-info-dark</p>
    </div>
  </el-inline>
  <el-inline :marginTop="true">
    <div class="color-card">
      <div class="color-preview color-success-light" />
      <p>@color-success-light</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-success-medium" />
      <p>@color-success-medium</p>
    </div>

    <div class="color-card">
      <div class="color-preview color-success-dark" />
      <p>@color-success-dark</p>
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
    background-color: @color-brand;
  }

  .color-accent {
    background-color: @color-accent;
  }

  .color-backdrop {
    background-color: @color-backdrop;
  }

  .color-grey-super-light {
    background-color: @color-grey-super-light;
  }

  .color-grey-light {
    background-color: @color-grey-light;
  }

  .color-grey-medium {
    background-color: @color-grey-medium;
  }

  .color-grey-dark {
    background-color: @color-grey-dark;
  }

  .color-grey-super-dark {
    background-color: @color-grey-super-dark;
  }

  .color-danger-dark {
    background-color: @color-danger-dark;
  }

  .color-danger-medium {
    background-color: @color-danger-medium;
  }

  .color-danger-light {
    background-color: @color-danger-light;
  }

  .color-warning-dark {
    background-color: @color-warning-dark;
  }

  .color-warning-medium {
    background-color: @color-warning-medium;
  }

  .color-warning-light {
    background-color: @color-warning-light;
  }

  .color-info-dark {
    background-color: @color-info-dark;
  }

  .color-info-medium {
    background-color: @color-info-medium;
  }

  .color-info-light {
    background-color: @color-info-light;
  }

  .color-success-dark {
    background-color: @color-success-dark;
  }

  .color-success-medium {
    background-color: @color-success-medium;
  }

  .color-success-light {
    background-color: @color-success-light;
  }

</style>
