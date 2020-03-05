// Navigators
import ElMenu from 'elements/ElMenu.vue'
import ElMenuItem from 'elements/ElMenuItem.vue'
import ElMenuSection from 'elements/ElMenuSection.vue'
import ElTab from 'elements/ElTab.vue'
import ElTabItem from 'elements/ElTabItem.vue'
import ElDelimiter from 'elements/ElDelimiter.vue'

// Alignors
import ElInline from 'elements/ElInline.vue'
import ElColumn from 'elements/ElColumn.vue'
import ElColumnItem from 'elements/ElColumnItem.vue'

// Selectors
import ElDropdown from 'elements/ElDropdown.vue'
import ElCheckbox from 'elements/ElCheckbox.vue'
import ElRadioButton from 'elements/ElRadioButton.vue'
import ElSelect from 'elements/ElSelect.vue'
import ElSlider from 'elements/ElSlider.vue'

// Actors
import ElButton from 'elements/ElButton.vue'
import ElToggleButton from 'elements/ElToggleButton.vue'
import ElMultiSwitch from 'elements/ElMultiSwitch.vue'
import ElExpandButton from 'elements/ElExpandButton.vue'

// Hierarcy
import ElModal from 'elements/ElModal.vue'
import ElCollapseHeader from 'elements/ElCollapseHeader.vue'

// Information
import ElMessage from 'elements/ElMessage.vue'
import ElTag from 'elements/ElTag.vue'
import ElLoader from 'elements/ElLoader.vue'
import ElHeader from 'elements/ElHeader.vue'
import ElCaption from 'elements/ElCaption.vue'
import ElInfo from 'elements/ElInfo.vue'
import ElImage from 'elements/ElImage.vue'
import ElKpi from 'elements/ElKpi.vue'
import ElNotification from 'elements/ElNotification.vue'

// Input
import ElInput from 'elements/ElInput.vue'
import ElTextarea from 'elements/ElTextarea.vue'
import ElUploader from 'elements/ElUploader.vue'

// Smart wrappers
import ElStickyFooter from 'elements/ElStickyFooter.vue'
import ElStickyHeader from 'elements/ElStickyHeader.vue'
import ElTooltip from 'elements/ElTooltip.vue'

const elements = {
  ElButton,
  ElToggleButton,
  ElMultiSwitch,
  ElMenu,
  ElMenuItem,
  ElTab,
  ElTabItem,
  ElDelimiter,
  ElInline,
  ElMenuSection,
  ElDropdown,
  ElCheckbox,
  ElRadioButton,
  ElColumn,
  ElColumnItem,
  ElModal,
  ElMessage,
  ElInput,
  ElTextarea,
  ElCollapseHeader,
  ElTag,
  ElLoader,
  ElStickyFooter,
  ElStickyHeader,
  ElTooltip,
  ElHeader,
  ElCaption,
  ElInfo,
  ElSelect,
  ElImage,
  ElUploader,
  ElKpi,
  ElNotification,
  ElExpandButton,
  ElSlider
}

const install = (Vue) => {
  Object.entries(elements).forEach(([type, el]) => {
    Vue.component(type, el)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  ElButton,
  ElToggleButton,
  ElMultiSwitch,
  ElMenu,
  ElMenuItem,
  ElTab,
  ElTabItem,
  ElDelimiter,
  ElInline,
  ElMenuSection,
  ElDropdown,
  ElCheckbox,
  ElRadioButton,
  ElColumn,
  ElColumnItem,
  ElModal,
  ElMessage,
  ElInput,
  ElTextarea,
  ElCollapseHeader,
  ElTag,
  ElLoader,
  ElStickyFooter,
  ElStickyHeader,
  ElTooltip,
  ElHeader,
  ElCaption,
  ElInfo,
  ElSelect,
  ElImage,
  ElUploader,
  ElKpi,
  ElNotification,
  ElExpandButton,
  ElSlider
}

export default {
  install,
  ElButton,
  ElToggleButton,
  ElMultiSwitch,
  ElMenu,
  ElMenuItem,
  ElTab,
  ElTabItem,
  ElDelimiter,
  ElInline,
  ElMenuSection,
  ElDropdown,
  ElCheckbox,
  ElRadioButton,
  ElColumn,
  ElColumnItem,
  ElModal,
  ElMessage,
  ElInput,
  ElTextarea,
  ElCollapseHeader,
  ElTag,
  ElLoader,
  ElStickyFooter,
  ElStickyHeader,
  ElTooltip,
  ElHeader,
  ElCaption,
  ElInfo,
  ElSelect,
  ElImage,
  ElUploader,
  ElKpi,
  ElNotification,
  ElExpandButton,
  ElSlider
}
