<template>
<div class="el-element-docs">
  <h2>Usage</h2>
  <el-tab @change="reRender">
    <el-tab-item title="Closable & root">
      <p>This modal pauses background body scroll and is placed directly on document.body so you don't have to worry about where to put it in your nested Vue-components.</p>
      <el-button margin-top margin-bottom @click="model.normal = true">
        Open modal
      </el-button>
      <br><pre><code class="hljs html">{{code.normal}}</code></pre>
    </el-tab-item>
    <el-tab-item title="High modal & footer">
      <p>This modal is very large and will exceen the window height (unless you have a kick-ass monitor). The top and bottom of the modal will have a margin from to display when the user has scrolled to the start or end of the content. Though, on narrow screens the modal will fill the screen.</p>
      <p>The footer is a sticky item and will keep on screen as you scroll. If you have a @close-listener, the close button will also be sticky.</p>
      <el-button margin-top margin-bottom @click="model.high = true">
        Open modal
      </el-button>
      <br><pre><code class="hljs html">{{code.high}}</code></pre>
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

  <!-- Modals -->
  <el-modal
    root
    :pauseBodyScroll="true"
    v-if="model.normal"
    @close="model.normal = false"
    >
    <h2>This is a modal</h2>
    <p>This modal pauses background body scroll and is placed directly on document.body so you don't have to worry about where to put it in your nested Vue-components.</p>

    <br><pre><code class="hljs html">{{code.normal}}</code></pre>
  </el-modal>

  <el-modal
    root
    :pauseBodyScroll="true"
    closeButtonAlign="left"
    v-if="model.high"
    @close="model.high = false"
    >
    <h2>This is a high modal</h2>
    <p>This modal is very large and will exceen the window height (unless you have a kick-ass monitor). The top and bottom of the modal will have a margin from to display when the user has scrolled to the start or end of the content. Though, on narrow screens the modal will fill the screen.</p>
    <p>The footer is a sticky item and will keep on screen as you scroll. If you have a @close-listener, the close button will also be sticky.</p>

    <br><pre><code class="hljs html">{{code.high}}</code></pre>

    <!-- <el-collapse-header> -->
    <br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ut magna vitae ultrices. Vivamus egestas dui pulvinar rhoncus semper. Sed auctor tortor nisi, ac cursus nisl iaculis quis. Duis convallis, erat eu molestie venenatis, dui sapien sagittis metus, non dictum nunc lectus quis eros. Curabitur dignissim quis dui sit amet venenatis. Ut congue luctus maximus. Quisque eget dolor condimentum, tempus neque eget, varius tortor. Proin a mattis nisl. Proin bibendum aliquet bibendum.</p>
    <!-- </el-collapse-header> -->

    <el-inline slot="footer">
      <el-button secondary @click="model.high = false">
        Close
      </el-button>
    </el-inline>
  </el-modal>

  <el-modal
    root
    v-if="model.footer"
    @close="model.footer = false"
    >
    <h2>This is a modal</h2>
    <p>This modal pauses background body scroll and is placed directly on document.body so you don't have to worry about where to put it in your nested Vue-components.</p>

    <br><pre><code class="hljs html">{{code.footer}}</code></pre>

  </el-modal>

</div>
</template>
<script>
export default {
  data () {
    return {
      model: {
        normal: false,
        high: false,
        footer: false
      },
      code: {
        normal: `<el-modal
  root
  v-if="isOpen"
  @close="isOpen = false"
  >
  <h2>This is a modal</h2>
  <p>This modal pauses backgroun...</p>
</el-modal>`,
        high: `<el-modal
  root
  v-if="isOpen"
  @close="isOpen = false"
  >
  <h2>This is a high modal</h2>
  <p>This modal is very large ...</p>

  <el-inline slot="footer">
    <el-button
      secondary
      @click="isOpen = false"
      >
      Close
    </el-button>
  </el-inline>
</el-modal>`
      },
      props: [{
        prop: 'overflow',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'pause-body-scroll',
        type: 'Boolean',
        default: 'true'
      }, {
        prop: 'close-button-align',
        type: 'String',
        default: '"left"'
      }, {
        prop: 'wide',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'top',
        type: 'Boolean',
        default: 'false'
      }, {
        prop: 'root',
        type: 'Boolean',
        default: 'false'
      }]
    }
  },
  mounted () {
    this.$nextTick(this.reRender)
  },
  watch: {
    model: {
      deep: true,
      handler: 'reRenderDelay'
    }
  },
  methods: {
    reRenderDelay () {
      setTimeout(this.reRender, 10)
    },
    reRender () {
      window.refreshHljs()
    }
  }
}
</script>
<style lang="less" scoped>
</style>
