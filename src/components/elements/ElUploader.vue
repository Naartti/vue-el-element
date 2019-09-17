<template>
<div
  class="el-uploader el-animation"
  :class="{
    'el-uploader--active': this.isActive
  }"
  ref="dropArea"
  @click="openFileBrowse"
  @dragenter="activate"
  @dragover="activate"
  @dragleave="deactivate"
  @drop="handleDrop"
  >

  <!-- Hidden upload file form -->
  <div class="el-uploader__form">
    <form>
      <input
        type="file"
        ref="fileInput"
        :multiple="multiple"
        :accept="accept"
        @change="handleBrowse"
        >
    </form>
  </div>

  <div
    v-if="caption !== ''"
    >
    {{caption}}
  </div>
</div>
</template>
<script>

export default {
  props: {
    caption: {
      type: String,
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    multiple: {
      type: Boolean,
      default: true
    },
    preventDefaultOnBody: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    dropArea () {
      return this.$refs.dropArea
    }
  },
  mounted () {
    if (this.preventDefaultOnBody) {
      ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.body.addEventListener(eventName, this.preventDefaults, false)
      })
    }
  },
  destroyed () {
    if (this.preventDefaultOnBody) {
      ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        document.body.removeEventListener(eventName, this.preventDefaults, false)
      })
    }
  },
  methods: {
    activate (ev) {
      this.isActive = true
      this.preventDefaults(ev)
    },
    deactivate (ev) {
      this.isActive = false
      this.preventDefaults(ev)
    },
    preventDefaults (ev) {
      ev.preventDefault()
      ev.stopPropagation()
    },
    handleDrop (ev) {
      const files = ev.dataTransfer.files
      this.emitFiles(files)
      this.deactivate(ev)
    },
    handleBrowse () {
      const files = this.$refs.fileInput.files
      this.emitFiles(files)
    },
    emitFiles (files) {
      this.$emit('select', [ ...files ])
    },
    openFileBrowse () {
      this.$refs.fileInput.click()
    }
  }
}
</script>
<style lang="less" scoped>
  @import '~el-style/variables';

  .el-uploader {
    background-color: @color-primary-1;
    border: 1px dashed @color-primary-4;
    border-radius: @radius-small;
    width: 100%;
    height: @input-height;
    cursor: pointer;
    color: @color-primary-6;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: @color-primary-2;
      border: 1px dashed @color-primary-5;
      color: @color-primary-7;
    }

    &--active {
      border: 1px solid @color-primary-5;
      background-color: @color-primary-1;
      box-shadow: inset @shadow;
    }

    &__form {
      visibility: hidden;
      display: none;
    }
  }
</style>
