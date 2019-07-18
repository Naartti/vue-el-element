<template>
<div id="app" class="el-element-font">
<el-menu
  center-content
  center
  v-model="menuItemIndex"
  align="left"
  >
  <el-menu-item title="Get started">
    <get-started />
  </el-menu-item>

  <!-- Elements -->
  <el-menu-section title="Elements" />
  <el-menu-item title="el-button">
    <el-button-docs />
  </el-menu-item>
  <el-menu-item title="el-toggle-button">
    <el-toggle-button-docs />
  </el-menu-item>
  <el-menu-item title="el-multi-switch">
    <el-multi-switch-docs />
  </el-menu-item>
  <el-menu-item title="el-tab & el-tab-item">
    <el-tab-docs />
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
  <el-menu-item title="el-loader">
    <el-loader-docs />
  </el-menu-item>
  <el-menu-item title="el-image">
    <el-image-docs />
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
  <el-menu-item title="el-column & el-column-item">
    <el-column-docs />
  </el-menu-item>
  <el-menu-item title="el-message">
    <el-message-docs />
  </el-menu-item>

  <!-- <el-menu-section title="Remaining" />

  <el-menu-item title="Sticky items">
    <h3>El Sticky Header</h3>
    <el-sticky-header>
      This is a sticky header
    </el-sticky-header>

    <div style="height: 1000px;"/>

    <el-delimiter />
    <h3>El Sticky Footer</h3>
    <el-sticky-footer>
      This is a sticky footer
    </el-sticky-footer>
  </el-menu-item>

  <el-menu-item title="Hierarcy">
    <el-collapse-header title="El Collapse Header">
      Hello!
    </el-collapse-header>
  </el-menu-item>

  <el-menu-item title="Text">
    <el-delimiter />
    <h3>El Info</h3>
    <el-info>
      some info
    </el-info>

    <el-delimiter />
    <h3>El Header</h3>
    <el-header>Just a header</el-header>
    <el-header tight>Tight header</el-header>
    <el-header warning>
      Header with warning
    </el-header>
    <el-header danger>
      Header with danger
    </el-header>
    <el-header success @click="() => {}">
      Header with success
    </el-header>

    <el-delimiter />
    <h3>El Caption</h3>
    <el-caption>
      Some caption
    </el-caption>
    <el-caption danger @click="() => {}">
      Some danger caption
    </el-caption>
    <el-caption light style="background-color: #222;">
      Some light caption
    </el-caption>
  </el-menu-item>

  <el-menu-item title="Input">
    <h3>El Input</h3>
    <el-input v-model="someString" />
    <el-input placeholder="Placeholder..." margin-top />
    <el-input placeholder="Warning" margin-top warning />
    <el-input placeholder="Success" margin-top success />

    <el-delimiter />
    <h3>El Text Area</h3>
    <el-textarea v-model="someString" />
  </el-menu-item> -->

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

  <!-- <el-menu-section title="Customize" />
  <el-menu-item title="Style">
    <custom-style />
  </el-menu-item> -->
</el-menu>
</div>
</template>
<script>
import GetStarted from 'docs/GetStarted.vue'
import ColorGuide from 'showCase/ColorGuide.vue'
import FontGuide from 'showCase/FontGuide.vue'
import SpacingGuide from 'showCase/SpacingGuide.vue'
import CustomStyle from 'showCase/CustomStyle.vue'
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

export default {
  name: 'app',
  components: { GetStarted, ColorGuide, FontGuide, SpacingGuide, CustomStyle, ElButtonDocs, ElImageDocs, ElToggleButtonDocs, ElMultiSwitchDocs, ElTabDocs, ElSelectDocs, ElModalDocs, ElTagDocs, ElLoaderDocs, ElDropdownDocs, ElCheckboxDocs, ElRadioButtonDocs, ElColumnDocs, ElMessageDocs },
  data () {
    return {
      someString: ''
    }
  },
  computed: {
    menuItemIndex: {
      get () {
        return Number(localStorage.getItem('menuItemIndex')) || 0
      },
      set (index) {
        localStorage.setItem('menuItemIndex', index)
      }
    }
  }
}
</script>

<style lang="less">
 #app {
   display: relative;
 }

 .el-element-docs {
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
