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
          :danger="true"
          tooltip="Tooltip"
          >
          Secondary disabled
        </el-button>
      </el-inline>

      <el-header :marginTop="true">Icon button</el-header>
      <el-icon-button
        tooltip="Icon button"
        icon="?"
        />

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
    </el-menu-item>

    <!-- Input -->
    <el-menu-item title="Input">
      <el-input
        placeholder="Input"
        />
      <el-input
        placeholder="Input with warning"
        :warning="true"
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
      <el-button @click="showPopup = true">Show popup</el-button>

      <el-header :marginTop="true">Delimiter</el-header>
      <el-delimiter />
    </el-menu-item>
  </el-menu>

  <el-popup
    @close="showPopup = false"
    v-if="showPopup"
    >
    Hello!
  </el-popup>
</div>
</template>

<script>
import ColorGuide from './ColorGuide.vue'
import FontGuide from './FontGuide.vue'

export default {
  components: { ColorGuide, FontGuide },
  data () {
    return {
      openTab: 6,
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
  }
}
</script>
<style scoped lang="less">
</style>
