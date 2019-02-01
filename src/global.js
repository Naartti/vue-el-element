import ElElements from '../main'

export default Vue => {
  Object.entries(ElElements)
    .forEach(([type, ElElement]) => {
      Vue.component(type, ElElement)
    })
}
