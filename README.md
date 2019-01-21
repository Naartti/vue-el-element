# el-element

> Vue components for design elements with KM & exam.net style guides

# Import
## Globalize all components
```js
const ElElement = require('@teachiq/el-element')

for (let elementName in ElElement) {
  Vue.component(elementName, ElElement[elementName])
}
```

## Import selected components
```js
import { ElButton, ElTooltip } from '@teachiq/el-element'
```

## Set style guide
webpack.base.conf.js
```js
const styleGuide = 'kunskapsmatrisen' // or 'exam'

module.exports = {
  ...,
  resolve: {
    ...,
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'el-style': resolve(`node_modules/@teachiq/el-element/src/style/${styleGuide}`)
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
  :marginRight="Boolean"
  :marginTop="Boolean"
  :tooltip="String"
  @click="method"
  >
  Button label
</el-button>
```

## el-popup
```xml
<el-popup
  :top="Boolean"
  :overflow="Boolean"
  v-if="isOpen"
  @close="isOpen = false"
  >

  Content...

  <!-- Optional: Footer example -->
  <el-inline
    slot="footer"
    >

    <el-button>Previous</el-button>
    <el-button>Next</el-button>
  </el-inline>
</el-popup>
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

  <el-tooltip
    :content="String"
    :delay="Boolean"
    />
</div>
```

## el-menu & el-menu-item
```xml
<el-menu>
  <el-menu-item title=" Chapter 1 ">
    Content for chapter 1...
  </el-menu-item>
  <el-menu-item title=" Chapter 2 ">
    Content for chapter 2...
  </el-menu-item>
</el-menu>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
