// Global components
import ElHeader from '@/components/elements/ElHeader.vue'
import ElButton from '@/components/elements/ElButton.vue'
import ElCaption from '@/components/elements/ElCaption.vue'

export default (Vue) => {
  Vue.component('ElHeader', ElHeader)
  Vue.component('ElButton', ElButton)
  Vue.component('ElCaption', ElCaption)

  return Vue
}
