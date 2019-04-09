<template>
<div>
  <el-menu
    v-model="openTab"
    >
    <!-- Style guide -->
    <el-menu-section title="Style guide" />
    <el-menu-item title="Colors">
      <color-guide />
    </el-menu-item>
    <el-menu-item title="Fonts">
      <font-guide />
    </el-menu-item>
    <el-menu-item title="Sizing">
    </el-menu-item>

    <!-- Elements -->
    <el-menu-section title="Build elements" />

    <!-- Button -->
    <el-menu-item title="Button">
      <el-header>Text button</el-header>
      <p>&#60;el-button&#62;</p>

      <el-inline
        :stretch="true"
        :wrap="true"
        :marginTop="true"
        >
        <el-button
          :marginRight="true"
          :marginTop="true"
          >
          Button
        </el-button>
        <el-button
          :marginRight="true"
          :secondary="true"
          :marginTop="true"
          >
          Secondary
        </el-button>
        <el-button
          :marginRight="true"
          :danger="true"
          :marginTop="true"
          >
          Danger
        </el-button>
        <el-button
          :marginRight="true"
          :secondary="true"
          :danger="true"
          :marginTop="true"
          >
          Secondary danger
        </el-button>
        <el-button
          :disabled="true"
          :marginTop="true"
          :marginRight="true"
          :danger="true"
          tooltip="Tooltip"
          >
          Disabled
        </el-button>
        <el-button
          :disabled="true"
          :secondary="true"
          :marginTop="true"
          :marginRight="true"
          :danger="true"
          tooltip="Tooltip"
          >
          Secondary disabled
        </el-button>
        <el-button
          :marginTop="true"
          :link="true"
          >
          Some link
        </el-button>
      </el-inline>

      <icon-button />

      <el-header :marginTop="true">Toggle button</el-header>
      <p>&#60;el-toggle-button&#62;</p>
      <el-toggle-button
        v-model="toggleButton"
        :marginTop="true"
        />

      <el-header :marginTop="true">Switcher</el-header>
      <p>&#60;el-switch&#62; and &#60;el-multi-switch&#62;</p>
      <el-switch
        v-model="switchModel"
        left="Left"
        right="Right"
        :margin-top="true"
        />

      <el-multi-switch
        v-model="multiSwitch.model"
        :options="multiSwitch.options"
        :margin-top="true"
        :stretch="true"
        />
    </el-menu-item>

    <!-- Text -->
    <el-menu-item title="Text">
      <el-header>Header</el-header>
      <el-text>Just some regular text.</el-text>
      <el-caption>Caption</el-caption>

      <el-header :marginTop="true">Information wrappers</el-header>
      <el-info>Information</el-info>

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
    </el-menu-item>

    <!-- Input -->
    <el-menu-item title="Input">
      <el-input
        placeholder="Input"
        />
      <el-input
        placeholder="Input with warning"
        :warning="true"
        :marginTop="true"
        />

      <el-input-button
        placeholder="Input field"
        >
        Input button
      </el-input-button>
    </el-menu-item>

    <!-- Select -->
    <el-menu-item title="Select">
      <el-header>Checkbox</el-header>
      <el-checkbox
        v-model="checkbox.model"
        :options="checkbox.options"
        :marginTop="true"
        />

      <el-header :marginTop="true">Dropdown</el-header>
      <el-dropdown
        :options="dropdown.options"
        v-model="dropdown.model"
        />

      <el-header :marginTop="true">Radio button</el-header>
      <el-radio-button
        :options="dropdown.options"
        v-model="dropdown.model"
        :marginTop="true"
        />

      <el-header :marginTop="true">Input select</el-header>
      <el-select
        placeholder="Select"
        v-model="checkbox.model"
        :options="checkbox.options"
        />
    </el-menu-item>

    <!-- Hierarcy -->
    <el-menu-item title="Hierarcy">
      <el-collapse-header title="Collapse header">
        <el-collapse-header title="Collapse header">
          <el-collapse-header title="Collapse header">
            Taa daa!
          </el-collapse-header>
          </el-collapse-header>
      </el-collapse-header>

      <el-header :marginTop="true">Card</el-header>
      <el-card>
        This is a card
      </el-card>
      <el-card>
        And this is a card that can expand

        <div v-if="expandCard">
          Show more content when expanding
        </div>

        <el-extend-button :isExpanded="expandCard" @click="expandCard = !expandCard"/>
      </el-card>

      <el-header :marginTop="true">Page/section</el-header>
      <el-section>This is a section</el-section>

      <el-header :marginTop="true">Popup</el-header>
      <el-inline>
        <el-button @click="showModal = true" :marginRight="true">Show modal</el-button>
        <el-button @click="showHighModal = true" :danger="true" :secondary="true" :marginRight="true">Show high modal</el-button>
        <el-button @click="showPopup = true" :secondary="true">Show popup</el-button>
      </el-inline>

      <el-header :marginTop="true">Delimiter</el-header>
      <el-delimiter />
    </el-menu-item>

    <!-- Hierarcy -->
    <el-menu-item title="Status">
      <el-header :margin-top="false">Loader</el-header>
      <p>&#60;el-loader&#62;</p>
      <el-loader
        :margin-top="false"
        />

      <el-header :marginTop="true">Tags</el-header>
      <p>&#60;el-tag&#62;</p>
      <el-inline>
        <el-tag :danger="true" :marginRight="true">
          Danger
        </el-tag>
        <el-tag :warning="true" :marginRight="true">
          Warning
        </el-tag>
        <el-tag :info="true" :marginRight="true">
          Info
        </el-tag>
        <el-tag :success="true" :marginRight="true">
          Success
        </el-tag>
        <el-tag>
          No status
        </el-tag>
      </el-inline>
    </el-menu-item>

    <!-- Navigation -->
    <el-menu-item title="Navigation">

      <!-- Tab -->
      <el-tab>
        <el-tab-item title="Colors">
          <color-guide />
        </el-tab-item>

        <el-tab-item title="Fonts">
          <font-guide />
        </el-tab-item>

        <el-tab-item title="Got lost...">
          Follow the light!
        </el-tab-item>
      </el-tab>
    </el-menu-item>

    <!-- Layout -->
    <el-menu-item title="Layout">

      <!-- inline -->
      <el-header :marginTop="true">Inline</el-header>
      <p>&#60;el-inline&#62;</p>
      <el-inline>
        <b>Item 1</b>
        <b>Item 2</b>
        <b>Item 3</b>
      </el-inline>

      <el-header :marginTop="true">Inline with space between</el-header>
      <p>&#60;el-inline :stretch="true" :space-between="true"&#62;</p>
      <el-inline :stretch="true" :space-between="true">
        <b>Item 1</b>
        <b>Item 2</b>
        <b>Item 3</b>
      </el-inline>
      <el-delimiter />

      <!-- Columns -->
      <el-header>Columns</el-header>
      <el-tab>
        <el-tab-item title="One larger">
          <el-column>
            <el-column-item :grow="2">
              <el-header>Column 1</el-header>
              <p>&#60;el-column-item :grow="2"&#62;</p>
              <el-delimiter :short="true" />
              <color-guide />
            </el-column-item>
            <el-column-item :grow="1">
              <el-header>Column 2</el-header>
              <p>&#60;el-column-item :grow="1"&#62;</p>
              <el-delimiter :short="true" />
              <font-guide />
            </el-column-item>
          </el-column>
        </el-tab-item>

        <el-tab-item title="Equal sizing">
          <el-column>
            <el-column-item :grow="1">
              <el-header>Column 1</el-header>
              <p>&#60;el-column-item :grow="1"&#62;</p>
              <el-delimiter :short="true" />
              <color-guide />
            </el-column-item>
            <el-column-item :grow="1">
              <el-header>Column 2</el-header>
              <p>&#60;el-column-item :grow="1"&#62;</p>
              <el-delimiter :short="true" />
              <font-guide />
            </el-column-item>
          </el-column>
        </el-tab-item>

        <el-tab-item title="Three columns">
          <el-column>
            <el-column-item :grow="1">
              <el-header>Column 1</el-header>
              <p>&#60;el-column-item :grow="1"&#62;</p>
              <el-delimiter :short="true" />
              <color-guide />
            </el-column-item>
            <el-column-item :grow="1">
              <el-header>Column 2</el-header>
              <p>&#60;el-column-item :grow="1"&#62;</p>
              <el-delimiter :short="true" />
              <font-guide />
            </el-column-item>
            <el-column-item :grow="1">
              <el-header>Column 3</el-header>
              <p>&#60;el-column-item :grow="1"&#62;</p>
              <el-delimiter :short="true" />
              <font-guide />
            </el-column-item>
          </el-column>
        </el-tab-item>

        <!-- Responsive columns -->
        <el-tab-item title="Responsive">
          <el-button @click="wrapColumns = !wrapColumns">
            Wrap it!
          </el-button>
          <br>

          <el-column :wrap="wrapColumns" :margin-top="true">
            <el-column-item :width="200">
              <h3 style="margin-top: 0px;">Some title</h3>
              <p>Some caption</p>
            </el-column-item>
            <el-column-item>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b>
            </el-column-item>
          </el-column>
          <el-column :wrap="wrapColumns" :margin-top="true">
            <el-column-item :width="200">
              <h3 style="margin-top: 0px;">Some other title, a long one</h3>
              <p>More suspisious captions</p>
            </el-column-item>
            <el-column-item>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</b>
            </el-column-item>
          </el-column>
          <el-delimiter />
        </el-tab-item>
      </el-tab>
    </el-menu-item>
  </el-menu>

  <!-- Modals -->
  <el-popup
    @close="showPopup = false"
    v-if="showPopup"
    >
    Hello!

    <div style="height: 1000px"/>

    ...world
  </el-popup>

  <el-modal
    v-if="showModal"
    @close="showModal = false"
    close-button-align="right"
    >
    Hello! (modal)

    <div style="height: 100px"/>

    ...world

    <el-inline slot="footer">
      <el-button>Do something</el-button>
    </el-inline>
  </el-modal>

  <el-modal
    v-if="showHighModal"
    @close="showHighModal = false"
    close-button-align="right"
    >
    Hello! (modal)

    <div style="height: 1000px"/>

    ...world

    <el-inline slot="footer">
      <el-button
        :secondary="true"
        :danger="true"
        @click="showHighModal = false"
        >Close</el-button>
    </el-inline>
  </el-modal>
</div>
</template>

<script>
import ColorGuide from './ColorGuide.vue'
import FontGuide from './FontGuide.vue'
import IconButton from './IconButton.vue'

export default {
  components: { ColorGuide, FontGuide, IconButton },
  data () {
    return {
      openTab: 1,
      checkbox: {
        model: [],
        options: [{
          value: 'firstName',
          label: 'Förnamn'
        }, {
          value: 'lastName',
          label: 'Efternamn'
        }, {
          value: 'emial',
          label: 'Epost'
        }, {
          value: 'class',
          label: 'Klass'
        }, {
          value: 'teacher',
          label: 'Undervisande lärare'
        }]
      },
      dropdown: {
        options: [{
          value: 'firstName',
          label: 'Förnamn'
        }, {
          value: 'lastName',
          label: 'Efternamn'
        }, {
          value: 'emial',
          label: 'Epost'
        }, {
          value: 'class',
          label: 'Klass'
        }, {
          value: 'teacher',
          label: 'Undervisande lärare'
        }],
        model: 'firstName'
      },
      showPopup: false,
      showModal: false,
      showHighModal: false,
      toggleButton: true,
      switchModel: true,
      expandCard: false,
      multiSwitch: {
        options: [{
          value: 1,
          label: 'Mode 1'
        }, {
          value: 'två',
          label: 'Mode 2'
        }, {
          value: 3,
          label: 'Mode 3'
        }, {
          value: 4,
          label: 'Mode 4'
        }],
        model: 'två'
      },
      wrapColumns: false
    }
  },
  watch: {
    openTab () {
      localStorage.setItem('showCaseTab', this.openTab)
    }
  },
  mounted () {
    let tab = localStorage.getItem('showCaseTab')

    if (tab) {
      this.openTab = Number(tab)
    }
  },
  methods: {
    log (...args) {
      console.log('Logging', ...args)
    }
  }
}
</script>
<style scoped lang="less">
  p {
    color: #cacaca;
  }
</style>
