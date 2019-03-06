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
      <el-toggle-button
        v-model="toggleButton"
        :marginTop="true"
        />

      <el-header :marginTop="true">Switcher</el-header>
      <el-switch
        left="Left"
        right="Right"
        :marginTop="true"
        v-model="switchModel"
        />

      <el-multi-switch
        :options="multiSwitch.options"
        v-model="multiSwitch.model"
        :marginTop="true"
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

      <el-header :marginTop="true">El Tag</el-header>
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
  </el-menu>

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
    >
    Hello! (modal)

    <div style="height: 1000px"/>

    ...world

    <el-inline slot="footer">
      <el-button>Do something</el-button>
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
          value: 2,
          label: 'Mode 2'
        }, {
          value: 3,
          label: 'Mode 3'
        }, {
          value: 4,
          label: 'Mode 4'
        }],
        model: 2
      }
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
  }
}
</script>
<style scoped lang="less">
</style>
