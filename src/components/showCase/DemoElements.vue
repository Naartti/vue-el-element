<template>
<div>
  <!-- el-header -->
  <el-column margin-top>
    <el-column-item>
      <el-header warning>Header</el-header>
    </el-column-item>
    <el-column-item width="60">
      <el-sticky-header>
        <el-button secondary link
          @click="route('el-header')"
          >
          <span v-html="linkIcon" />
        </el-button>
      </el-sticky-header>
    </el-column-item>
  </el-column>
  <el-delimiter />

  <!-- el-button -->
  <el-column margin-top>
    <el-column-item>
      <el-header>el-button</el-header>

      <el-inline stretch>
        <el-button margin-right>
          Primary button
        </el-button>
        <el-button secondary danger>
          Secondary button
        </el-button>
      </el-inline>
    </el-column-item>
    <el-column-item width="60">
      <el-sticky-header>
        <el-button secondary link
          @click="route('el-button')"
          >
          <span v-html="linkIcon" />
        </el-button>
      </el-sticky-header>
    </el-column-item>
  </el-column>
  <el-delimiter />

  <!-- el-toggle-button -->
  <el-column margin-top>
    <el-column-item>
      <el-header>el-toggle-button</el-header>

      <el-toggle-button v-model="model.elToggleButton" />
    </el-column-item>
    <el-column-item width="60">
      <el-sticky-header>
        <el-button secondary link
          @click="route('el-toggle-button')"
          >
          <span v-html="linkIcon" />
        </el-button>
      </el-sticky-header>
    </el-column-item>
  </el-column>
  <el-delimiter />

  <!-- el-multi-switch -->
  <el-column margin-top>
    <el-column-item>
      <el-header>el-multi-switch</el-header>

      <el-multi-switch
        v-model="model.elMultiSwitch"
        :options="[
          { value: 1, label: 'Backlog' },
          { value: 2, label: 'In progress' },
          { value: 3, label: 'Testing' },
          { value: 4, label: 'Done' },
        ]"
        />
    </el-column-item>
    <el-column-item width="60">
      <el-sticky-header>
        <el-button secondary link
          @click="route('el-multi-switch')"
          >
          <span v-html="linkIcon" />
        </el-button>
      </el-sticky-header>
    </el-column-item>
  </el-column>
  <el-delimiter />

  <!-- el-select -->
  <el-column margin-top>
    <el-column-item>
      <el-header>el-select</el-header>

      <el-select
        v-model="model.elSelect"
        :options="[
          { value: 1, label: 'Apple' },
          { value: 2, label: 'Banana' },
          { value: 3, label: 'Orange' },
          { value: 4, label: 'Melon' },
          { value: 5, label: 'Peach' },
        ]"
        placeholder="What's your fruit(s)?"
        />
    </el-column-item>
    <el-column-item width="60">
      <el-sticky-header>
        <el-button secondary link
          @click="route('el-select')"
          >
          <span v-html="linkIcon" />
        </el-button>
      </el-sticky-header>
    </el-column-item>
  </el-column>
  <el-delimiter />

  <!-- el-input -->
  <el-column margin-top>
    <el-column-item>
      <el-header>el-input</el-header>

      <el-input placeholder="..." />
    </el-column-item>
    <el-column-item width="60">
      <el-sticky-header>
        <el-button secondary link
          @click="route('el-input')"
          >
          <span v-html="linkIcon" />
        </el-button>
      </el-sticky-header>
    </el-column-item>
  </el-column>
  <el-delimiter />

  <!-- el-textarea -->
  <el-column margin-top>
    <el-column-item>
      <el-header>el-textarea</el-header>

      <el-textarea />
    </el-column-item>
    <el-column-item width="60">
      <el-sticky-header>
        <el-button secondary link
          @click="route('el-textarea')"
          >
          <span v-html="linkIcon" />
        </el-button>
      </el-sticky-header>
    </el-column-item>
  </el-column>
  <el-delimiter />

  <!-- el-checkbox -->
  <el-column margin-top>
    <el-column-item>
      <el-header>el-checkbox</el-header>

      <el-checkbox
        v-model="model.elCheckbox"
        :options="[
          { value: 1, label: 'Apple' },
          { value: 2, label: 'Banana' },
          { value: 3, label: 'Orange' },
          { value: 4, label: 'Melon' },
          { value: 5, label: 'Peach' },
        ]"
        />
    </el-column-item>
    <el-column-item width="60">
      <el-sticky-header>
        <el-button secondary link
          @click="route('el-checkbox')"
          >
          <span v-html="linkIcon" />
        </el-button>
      </el-sticky-header>
    </el-column-item>
  </el-column>
  <el-delimiter />

  <!-- el-radio-button -->
  <el-column margin-top>
    <el-column-item>
      <el-header>el-radio-button</el-header>

      <el-radio-button
        v-model="model.elRadioButton"
        :options="[
          { value: 1, label: 'Apple' },
          { value: 2, label: 'Banana' },
          { value: 3, label: 'Orange' },
          { value: 4, label: 'Melon' },
          { value: 5, label: 'Peach' },
        ]"
        />
    </el-column-item>
    <el-column-item width="60">
      <el-sticky-header>
        <el-button secondary link
          @click="route('el-radio-button')"
          >
          <span v-html="linkIcon" />
        </el-button>
      </el-sticky-header>
    </el-column-item>
  </el-column>
  <el-delimiter />

  <!-- el-tab -->
  <el-column margin-top>
    <el-column-item>
      <el-header>el-tab & el-tab-item</el-header>

      <el-inline stretch>
        <el-tab>
          <el-tab-item title="Some tab" />
          <el-tab-item title="Another one" />
          <el-tab-item title="Third tab" />
        </el-tab>
      </el-inline>
    </el-column-item>
    <el-column-item width="60">
      <el-sticky-header>
        <el-button secondary link
          @click="route('el-tab')"
          >
          <span v-html="linkIcon" />
        </el-button>
      </el-sticky-header>
    </el-column-item>
  </el-column>
  <el-delimiter />

</div>
</template>
<script>

const linkIcon = `<svg width="18px" height="25px" viewBox="0 0 18 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="favicon-copy" transform="translate(-7.000000, -5.000000)" fill="#cacaca"><path d="M22.6442911,10.4237284 L14.8305826,18.2374369 L22.6442911,26.0511454 L19.1442911,29.5511454 L7.83058262,18.2374369 L19.1442911,6.92372837 L22.6442911,10.4237284 Z" id="Combined-Shape"></path><path d="M26.6442911,2.42372837 L18.8305826,10.2374369 L26.6442911,18.0511454 L23.1442911,21.5511454 L11.8305826,10.2374369 L23.1442911,-1.07627163 L26.6442911,2.42372837 Z" id="Combined-Shape" transform="translate(19.237437, 10.237437) scale(-1, 1) rotate(-315.000000) translate(-19.237437, -10.237437) "></path></g></g></svg>`

export default {
  data () {
    return {
      linkIcon: linkIcon,
      model: {
        elMultiSwitch: 1,
        elToggleButton: false,
        elSelect: [],
        elRadioButton: null,
        elCheckbox: []
      }
    }
  },
  methods: {
    route (elementName) {
      this.$router.push(elementName)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
