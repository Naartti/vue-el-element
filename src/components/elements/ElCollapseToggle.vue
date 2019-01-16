<template>
<div class="more" @click="toggle">
  <span class="more-circle">
    <span class="more-icon">
      <span ref="line1" class="animation more-line more-line-1" v-bind:class="{ transformed1 : isFlipped}"></span>
      <span ref="line2" class="animation more-line more-line-2" v-bind:class="{ transformed2 : isFlipped}"></span>
    </span>
  </span>
</div>
</template>

<script>

export default {
  name: 'ElCollapseToggle',
  data () {
    return {
      isCollapsed_auto: false
    }
  },
  computed: {
    isFlipped () {
      return (this.isCollapsed == null) ? this.isCollapsed_auto : this.isCollapsed
    }
  },
  props: ['isCollapsed', 'color'],
  mounted () {
    if (this.color == null) return

    if (this.color === 'dark') {
      this.$refs.line1.style.backgroundColor = '#373737'
      this.$refs.line2.style.backgroundColor = '#373737'
    }
  },
  methods: {
    toggle () {
      this.isCollapsed_auto = !this.isCollapsed_auto
      this.$emit('click', this.isFlipped)
    }
  }
}
</script>

<style scoped>
  .more {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 50px;
    width: 50px;
    cursor: pointer;
  }

  .more-circle {
    background-color: transparent;
    top: 0px;
    left: 0px;
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 10;
  }

  .more-icon {
    position: absolute;
    top: 22px;
    left: 23px;
    width: 15px;
    height: 10px;
    margin: auto;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    transform: rotate(90deg);
  }

  .more-line {
    background-color: #fff;
    height: 2px;
    width: 12px;
    border-radius: 1px;
    position: absolute;
    left: 0px;
  }

  .more-line-1 {
    top: 1px;
    transform: translateX(2px) rotate(40deg);
  }

  .more-line-2 {
    bottom: 1px;
    transform: translateX(2px) rotate(-40deg);
  }

  .transformed1 {
    transform: translateX(3px) rotate(140deg);
  }

  .transformed2 {
    transform: translateX(3px) rotate(-140deg);
  }
</style>
