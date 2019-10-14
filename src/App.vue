<template>
<div id="app" class="el-element-font">
<el-menu
  title
  center-content
  center
  v-model="menuItemIndex"
  align="left"
  ref="elMenu"
  @input="setRoute"
  >

  <el-menu-item title="Get started">
    <get-started />
  </el-menu-item>
  <el-menu-item title="Show case">
    <demo-elements />
  </el-menu-item>

  <!-- Elements -->
  <el-menu-section title="Elements" />
  <el-menu-item title="el-button">
    <el-button-docs />
  </el-menu-item>
  <el-menu-item title="el-tooltip">
    <el-tooltip-docs />
  </el-menu-item>
  <el-menu-item title="el-toggle-button">
    <el-toggle-button-docs />
  </el-menu-item>
  <el-menu-item title="el-multi-switch">
    <el-multi-switch-docs />
  </el-menu-item>
  <el-menu-item title="el-message">
    <el-message-docs />
  </el-menu-item>
  <el-menu-item title="el-kpi">
    <el-kpi-docs />
  </el-menu-item>
  <el-menu-item title="el-header">
    <el-header-docs />
  </el-menu-item>
  <el-menu-item title="el-collapse-header">
    <el-collapse-header-docs />
  </el-menu-item>
  <el-menu-item title="el-expand-button">
    <el-expand-button-docs />
  </el-menu-item>
  <el-menu-item title="el-select">
    <el-select-docs />
  </el-menu-item>
  <el-menu-item title="el-modal">
    <el-modal-docs />
  </el-menu-item>
  <el-menu-item title="el-tag">
    <el-tag-docs />
  </el-menu-item>
  <el-menu-item title="el-notification">
    <el-notification-docs />
  </el-menu-item>
  <el-menu-item title="el-loader">
    <el-loader-docs />
  </el-menu-item>
  <el-menu-item title="el-image">
    <el-image-docs />
  </el-menu-item>
  <el-menu-item title="el-uploader">
    <el-uploader-docs />
  </el-menu-item>
  <el-menu-item title="el-dropdown">
    <el-dropdown-docs />
  </el-menu-item>
  <el-menu-item title="el-checkbox">
    <el-checkbox-docs />
  </el-menu-item>
  <el-menu-item title="el-radio-button">
    <el-radio-button-docs />
  </el-menu-item>
  <el-menu-item title="el-inline">
    <el-inline-docs />
  </el-menu-item>
  <el-menu-item title="el-column">
    <el-column-docs />
  </el-menu-item>
  <el-menu-item title="el-menu">
    <el-menu-docs />
  </el-menu-item>
  <el-menu-item title="el-tab">
    <el-tab-docs />
  </el-menu-item>

  <el-menu-section title="Design guide" />
  <el-menu-item title="Colors">
    <color-guide />
  </el-menu-item>
  <el-menu-item title="Fonts">
    <font-guide />
  </el-menu-item>
  <el-menu-item title="Spacing">
    <spacing-guide />
  </el-menu-item>
</el-menu>
</div>
</template>
<script>
import GetStarted from 'docs/GetStarted.vue'
import ColorGuide from 'showCase/ColorGuide.vue'
import FontGuide from 'showCase/FontGuide.vue'
import DemoElements from 'showCase/DemoElements.vue'
import SpacingGuide from 'showCase/SpacingGuide.vue'
import ElButtonDocs from 'docs/ElButtonDocs.vue'
import ElImageDocs from 'docs/ElImageDocs.vue'
import ElToggleButtonDocs from 'docs/ElToggleButtonDocs.vue'
import ElMultiSwitchDocs from 'docs/ElMultiSwitchDocs.vue'
import ElTabDocs from 'docs/ElTabDocs.vue'
import ElSelectDocs from 'docs/ElSelectDocs.vue'
import ElModalDocs from 'docs/ElModalDocs.vue'
import ElTagDocs from 'docs/ElTagDocs.vue'
import ElLoaderDocs from 'docs/ElLoaderDocs.vue'
import ElDropdownDocs from 'docs/ElDropdownDocs.vue'
import ElCheckboxDocs from 'docs/ElCheckboxDocs.vue'
import ElRadioButtonDocs from 'docs/ElRadioButtonDocs.vue'
import ElColumnDocs from 'docs/ElColumnDocs.vue'
import ElMessageDocs from 'docs/ElMessageDocs.vue'
import ElHeaderDocs from 'docs/ElHeaderDocs.vue'
import ElMenuDocs from 'docs/ElMenuDocs.vue'
import ElInlineDocs from 'docs/ElInlineDocs.vue'
import ElCollapseHeaderDocs from 'docs/ElCollapseHeaderDocs.vue'
import ElUploaderDocs from 'docs/ElUploaderDocs.vue'
import ElKpiDocs from 'docs/ElKpiDocs.vue'
import ElTooltipDocs from 'docs/ElTooltipDocs.vue'
import ElNotificationDocs from 'docs/ElNotificationDocs.vue'
import ElExpandButtonDocs from 'docs/ElExpandButtonDocs.vue'

export default {
  name: 'app',
  components: { GetStarted, ColorGuide, FontGuide, DemoElements, SpacingGuide, ElButtonDocs, ElImageDocs, ElToggleButtonDocs, ElMultiSwitchDocs, ElTabDocs, ElSelectDocs, ElModalDocs, ElTagDocs, ElLoaderDocs, ElDropdownDocs, ElCheckboxDocs, ElRadioButtonDocs, ElColumnDocs, ElMessageDocs, ElHeaderDocs, ElMenuDocs, ElInlineDocs, ElCollapseHeaderDocs, ElUploaderDocs, ElKpiDocs, ElTooltipDocs, ElNotificationDocs, ElExpandButtonDocs },
  data () {
    return {
      someString: '',
      menuItemIndex: 0
    }
  },
  computed: {
    itemTitles () {
      return this.$refs.elMenu.$data.items.map(i => i.title)
    }
  },
  mounted () {
    // Modals on document.body needs fonts styles
    document.body.classList.add('el-element-font')

    // Route to correct section
    const elementName = this.$route.params.elementName || ''
    if (elementName !== '') {
      this.findRoute(elementName)
    }
  },
  watch: {
    $route (to, from) {
      this.findRoute(to.params.elementName)

      this.$nextTick(() => {
        window.scrollTo(0, 0)
      })
    }
  },
  methods: {
    routeTitle (str) {
      return str.toLowerCase().replace(/ /g, '_')
    },
    setRoute (index) {
      const title = this.getMenuIndexTitle(index)
      this.$router.push(title)

      this.$nextTick(() => {
        window.scrollTo(0, 0)
      })
    },
    findRoute (elementName) {
      let index = 0
      const soughtElementName = this.routeTitle(elementName)

      this.itemTitles.forEach((itemTitle, loopIndex) => {
        let title = this.routeTitle(itemTitle)

        if (title === soughtElementName) {
          index = loopIndex
        }
      })

      this.menuItemIndex = index
    },
    getMenuIndexTitle (index) {
      let title = this.itemTitles[index]
      return this.routeTitle(title)
    }
  }
}
</script>
<style lang="less">
  @import '~el-style/variables';

 #app, body {
   display: relative;
   background-color: @color-background;
 }

 .el-element-docs {
    position: relative;
    margin-bottom: 100px;

    table {
      width: 100%;

      th, td {
        text-align: left;
        width: 30%;
      }
    }
  }
</style>
