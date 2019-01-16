<template>
<div>
  <el-menu>
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
          tooltip="Tooltip"
          >
          Disabled
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
        />

      <el-header :marginTop="true">Switcher</el-header>
      <el-switch
        left="Left"
        right="Right"
        :marginTop="true"
        v-model="switchModel"
        @change="switchModel = !switchModel"
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
        :warning="true"
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
      <el-checkbox
        v-model="checkbox.model"
        :options="checkbox.options"
        />

      <el-dropdown
        :options="dropdown.options"
        v-model="dropdown.model"
        />

      <el-radio-button
        :options="dropdown.options"
        v-model="dropdown.model"
        />

      <el-select
        placeholder="Select"
        v-model="checkbox.model"
        :options="checkbox.options"
        />
    </el-menu-item>

    <!-- Hierarcy -->
    <el-menu-item title="Hierarcy">
      <el-card>
        This is a card

        <el-extend-button :isExpanded="false" />
      </el-card>

      <el-collapse-header title="Collapse header">Hidden content</el-collapse-header>

      <el-delimiter />

      <el-section>This is a section</el-section>

      <el-button @click="showPopup = true">Show popup</el-button>
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
export default {
  data () {
    return {
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
      switchModel: true
    }
  }
}
</script>
<style scoped lang="less">
</style>
