<!-- # ![alt text](static/favicon.png) vue-el-element -->
# ![alt text](https://raw.githubusercontent.com/Naartti/vue-el-element/master/static/favicon.png) vue-el-element
> Vue components for design elements with custom style guides

# Installation
## For Vue-cli 3
```
npm install --save-dev postcss-url postcss-import vue-el-element
```

vue.config.js
```js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'el-style': 'node_modules/vue-el-element/src/style' // Or redirect to your own style guide
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        data: '@import "el-style/variables.less";'
      }
    }
  }
}
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

## Set style guide
webpack.base.conf.js
```js

module.exports = {
  ...,
  resolve: {
    ...,
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'el-style': resolve(`node_modules/vue-el-element/src/style`) // or copy variables.less and set your custom style
    }
  },
  ...
}
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
    >
    Content for column 1...
  </el-column-item>
  <el-column-item
    :grow="Number"
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

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
