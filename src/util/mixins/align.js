export default {
  props: {
    right: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    alignClassName () {
      const alignClassName = []

      if (this.right) {
        alignClassName.push('el-align--right')
      }

      if (this.stretch) {
        alignClassName.push('el-align--stretch')
      }

      return alignClassName.join(' ')
    }
  }
}
