<!-- # ![alt text](static/favicon.png) vue-el-element -->
# ![alt text](https://raw.githubusercontent.com/Naartti/vue-el-element/master/static/favicon.png) vue-el-element
> Vue components for design elements with custom style guides

# Installation
```
npm install --save vue-el-element
```

# Import
## Globalize all components
```js
import ElElements from 'vue-el-element'

Object.entries(ElElements)
  .forEach(([type, ElElement]) => {
    Vue.component(type, ElElement)
  })
```

## Import selected components
```js
import { ElButton, ElTooltip } from 'vue-el-element'
```

# Elements
## el-button
```xml
<el-button
  :disabled="Boolean"
  :secondary="Boolean"
  :danger="Boolean"
  :link="Boolean"
  :margin-right="Boolean"
  :margin-top="Boolean"
  :tooltip="String"
  @click="method"
  >
  Button label
</el-button>
```
Boolean props can also be activated as:
```xml
<el-button>
  Primary action
</el-button>

<el-button secondary>
  Secondary action
</el-button>

<el-button secondary danger>
  Close
</el-button>

<el-button danger>
  Delete
</el-button>
```

## el-modal
```xml
<el-modal
  v-if="isOpen"
  @close="isOpen = false"
  :pause-body-scroll="true"
  close-button-align="right"
  >

  Content...

  <!-- Optional: Footer example -->
  <el-inline
    slot="footer"
    >

    <el-button>Previous</el-button>
    <el-button>Next</el-button>
  </el-inline>
</el-modal>
```

## el-dropdown
```xml
<el-dropdown
  :options="[{
    value: 'key1',
    label: 'Item 1'
  }, {
    value: 'key2',
    label: 'Item 2'
  }]"
  v-model="key1"
  />
```

## el-checkbox
Note that the model is an array
```xml
<el-checkbox
  :options="[{
    value: 'key1',
    label: 'Item 1'
  }, {
    value: 'key2',
    label: 'Item 2'
  }]"
  v-model="[]"
  />
```

## el-radio-button
```xml
<el-radio-button
  :options="[{
    value: 'key1',
    label: 'Item 1'
  }, {
    value: 'key2',
    label: 'Item 2'
  }]"
  v-model="key1"
  />
```

## el-tooltip
Place the tooltip within the item you want to describe. It will place itself at the center of that element. Note that you need the parent element not to have static positioning.
```xml
<div style="{ position: relative }">

  Content...

  <el-tooltip :delay="Boolean">
    Description
  </el-content>
</div>
```

## el-message
```xml
<el-message
  :success="Boolean"
  :info="Boolean"
  :warning="Boolean"
  :danger="Boolean"
  :margin-right="Boolean"
  :margin-top="Boolean"
  >
  Message content
</el-message>
```

## el-tag
```xml
<el-tag
  :success="Boolean"
  :info="Boolean"
  :warning="Boolean"
  :danger="Boolean"
  :margin-right="Boolean"
  :margin-top="Boolean"
  >
  Tag content
</el-tag>
```

## el-menu & el-menu-item
```xml
<el-menu
  align="right"
  >
  <el-menu-item title="Chapter 1">
    Content for chapter 1...
  </el-menu-item>
  <el-menu-item title="Chapter 2">
    Content for chapter 2...
  </el-menu-item>

  <!-- Categorize with sections -->
  <el-menu-section title="Section 1" />

  <!-- Clickable sections -->
  <el-menu-section title="Section 2">
    Content for section 2
  </el-menu-section>
</el-menu>
```

## el-tab & el-tab-item
Horisonal navigation
```xml
<el-tab>
  <el-tab-item title="Tab 1">
    Content for tab 1...
  </el-tab-item>
  <el-tab-item title="Tab 2">
    Content for tab 2...
  </el-tab-item>
</el-tab>
```

## el-inline
```xml
<el-inline
  :stretch="Boolean"
  :space-between="Boolean"
  :wrap="Boolean"
  :margin-top="Boolean"
  >
  Content...
</el-inline>
```

## el-column
```xml
<el-column>
  <el-column-item
    :grow="Number"
    :wrap="Boolean"
    >
    Content for column 1...
  </el-column-item>
  <el-column-item
    :grow="Number"
    :wrap="Boolean"
    >
    Content for column 2...
  </el-column-item>
</el-column>
```

## el-loader
```xml
<el-loader
  :margin-top="Boolean"
  />
```

## el-sticky-header & el-sticky-footer
```xml
<el-sticky-header>
  content...
</el-sticky-header>

<el-sticky-footer>
  content...
</el-sticky-footer>
```

# Change style guide
The elements' css classes follow the BEM naming scheematics.

## Rounded button
```css
.el-button {
  height: 30px;
  border-radius: 15px;
}
```

## Change danger color of button
```css
.el-button--danger {
  background-color: #FA3E44;
}

.el-button--danger:hover {
  background-color: #CB3837;
}
```

## Change modal styling
```css
.el-modal__body {
  border-radius: 0px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
}

.el-modal__body--wide {
  max-width: 1200px;
}
```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve
```
