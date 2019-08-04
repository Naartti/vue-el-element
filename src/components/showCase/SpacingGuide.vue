<template>
<div class="spacing-guide">
  <div class="spacing-guide__line" />
  <el-header>el-header</el-header>
  <div class="spacing-guide__line" />

  <el-tab>
    <el-tab-item title="Two columns">
      <el-column>
        <el-column-item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.
        </el-column-item>
        <el-column-item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.
        </el-column-item>
      </el-column>
    </el-tab-item>
    <el-tab-item title="Three columns">
      <el-column>
        <el-column-item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.
        </el-column-item>
        <el-column-item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.
        </el-column-item>
        <el-column-item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.
        </el-column-item>
      </el-column>
    </el-tab-item>
  </el-tab>
  <div class="spacing-guide__line" />
  <el-inline>
    <el-button>
      Button
    </el-button>
  </el-inline>
</div>
</template>
<script>
export default {}
</script>
<style lang="less">
  @import '~el-style/variables.less';

  @highlight-color: @color-danger-4;

  .spacing-guide {
    &__line {
      width: 100%;
      height: 0px;
      border: 1px dashed @highlight-color;
    }

    .el-column-item {
      border: 1px dashed @highlight-color;
    }
  }
</style>
