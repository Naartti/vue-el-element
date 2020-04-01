export default {
  props: {
    marginRight: {
      type: Boolean,
      default: false
    },
    marginLeft: {
      type: Boolean,
      default: false
    },
    marginTop: {
      type: Boolean,
      default: false
    },
    marginBottom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    marginClassName () {
      const marginClassName = []

      if (this.marginRight) {
        marginClassName.push('el-margin--right')
      }

      if (this.marginLeft) {
        marginClassName.push('el-margin--left')
      }

      if (this.marginTop) {
        marginClassName.push('el-margin--top')
      }

      if (this.marginBottom) {
        marginClassName.push('el-margin--bottom')
      }

      return marginClassName.join(' ')
    }
  }
}
