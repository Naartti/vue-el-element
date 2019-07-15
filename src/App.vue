<template>
<div id="app" class="el-element-font">
<el-menu v-model="menuItemIndex" align="left">
  <el-menu-section title="Design guide" />
  <el-menu-item title="Colors">
    <color-guide />
  </el-menu-item>
  <el-menu-item title="Fonts">
    <font-guide />
  </el-menu-item>

  <el-menu-section title="Clickables" />
  <el-menu-item title="Button">
    <h3>El Button</h3>
    <el-inline>
      <el-button
        :margin-right="true"
        :margin-top="true"
        >
        Primary
      </el-button>
      <el-button
        secondary
        margin-right
        margin-top
        >
        Secondary
      </el-button>
      <el-button
        secondary
        danger
        margin-right
        margin-top
        >
        Secondary danger
      </el-button>
      <el-button
        danger
        margin-right
        margin-top
        >
        Danger
      </el-button>
      <el-button
        disabled
        margin-right
        margin-top
        tooltip="Disabled"
        >
        Disabled
      </el-button>
      <el-button
        disabled
        secondary
        margin-right
        margin-top
        tooltip="Disabled"
        >
        Secondary disabled
      </el-button>
      <el-button
        link
        margin-right
        margin-top
        >
        Link
      </el-button>
    </el-inline>

    <el-delimiter />
    <h3>El Toggle Button</h3>
    <el-toggle-button
      v-model="someBoolean"
      />

    <el-delimiter />
    <h3>El Multi Switch</h3>
    <el-multi-switch
      v-model="someValue"
      :options="[
        { value: 1, label: 'Item 1' },
        { value: 2, label: 'Item 2' },
        { value: 3, label: 'Item 3' },
        { value: 4, label: 'Item 4' },
      ]"
      />
  </el-menu-item>

  <el-menu-item title="Smart items">
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

  <el-menu-item title="Tabs">
    <el-tab>
      <el-tab-item title="Agrarbah">
        <p>Hello!</p>
      </el-tab-item>
      <el-tab-item title="Mordor">
        <p>Orugh dorem!</p>
      </el-tab-item>
      <el-tab-item title="Orion">
        <p>Untz untz untz</p>
      </el-tab-item>
    </el-tab>
  </el-menu-item>

  <el-menu-item title="Select">
    <h2>El Dropdown</h2>
    <el-dropdown
      margin-top
      :options="[
        { value: null, label: '-- Select an item--' },
        { value: 1, label: 'Item 1' },
        { value: 2, label: 'Item 2' }
      ]"
      />

    <el-delimiter />
    <h2>El Checkbox</h2>
    <el-checkbox
      :margin-top="true"
      :options="[
        { value: 1, label: 'Item 1' },
        { value: 2, label: 'Item 2' }
      ]"
      />

    <el-delimiter />
    <h2>El Radio Button</h2>
    <el-radio-button
      :options="[
        { value: 1, label: 'Item 1' },
        { value: 2, label: 'Item 2' }
      ]"
      />
  </el-menu-item>

  <el-menu-item title="Layout">
    <el-column>
      <el-column-item>
        First column
      </el-column-item>
      <el-column-item>
        Second column
      </el-column-item>
    </el-column>
  </el-menu-item>

  <el-menu-item title="Hierarcy">
    <el-collapse-header title="El Collapse Header">
      Hello!
    </el-collapse-header>

    <el-delimiter />
    <h3>El Modal</h3>
    <el-inline>
      <el-button
        @click="activeModal = 'normal'"
        margin-top margin-right
        >
        Normal modal
      </el-button>
      <el-button
        @click="activeModal = 'high'"
        margin-top margin-right
        >
        High modal
      </el-button>
      <el-button
        @click="activeModal = 'wide'"
        margin-top margin-right
        >
        Wide modal
      </el-button>
    </el-inline>
  </el-menu-item>

  <el-menu-item title="Text">
    <h3>El Message</h3>
    <el-message
      :warning="true"
      >
      Warning message
    </el-message>
    <el-message
      :danger="true"
      >
      Danger message
    </el-message>
    <el-message
      :success="true"
      >
      Success message
    </el-message>
    <el-message
      :info="true"
      >
      Info message
    </el-message>
    <el-message
      @click="() => {}"
      >
      Clickable message
    </el-message>

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

  <el-menu-item title="Status">
    <h3>El Tag</h3>
    <el-inline>
      <el-tag margin-right margin-top warning>Warning</el-tag>
      <el-tag margin-right margin-top danger>Danger</el-tag>
      <el-tag margin-right margin-top success>Success</el-tag>
      <el-tag margin-right margin-top info>info</el-tag>
      <el-tag margin-right margin-top >No status</el-tag>
    </el-inline>

    <el-delimiter />
    <h3>El Loader</h3>
    <el-loader />
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
  </el-menu-item>
</el-menu>

<!-- Modals -->
<el-modal root
  v-if="activeModal === 'wide'"
  wide
  @close="activeModal = ''"
  >
  hello!
</el-modal>
<el-modal root
  v-if="activeModal === 'normal'"
  close-button-align="right"
  @close="activeModal = ''"
  >
  hello!

  <el-button @click="someBoolean = !someBoolean">
    Toggle
  </el-button>

  <div v-if="someBoolean" style="background-color: green; height: 800px;">
    wide
  </div>
</el-modal>
<el-modal root
  v-if="activeModal === 'high'"
  @close="activeModal = ''"
  >
  hello!

  <div style="height: 1200px; background-color: #eee; width: 10px;" />

  <el-inline slot="footer">
    <el-button @click="activeModal = ''">
      Close
    </el-button>
  </el-inline>
</el-modal>
</div>
</template>
<script>
import ColorGuide from '@/components/showCase/ColorGuide.vue'
import FontGuide from '@/components/showCase/FontGuide.vue'

export default {
  name: 'app',
  components: { ColorGuide, FontGuide },
  data () {
    return {
      activeModal: '',
      someBoolean: false,
      someValue: 1,
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
</style>
