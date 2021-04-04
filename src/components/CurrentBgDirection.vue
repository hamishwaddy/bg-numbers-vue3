<template>
  <div class="icon-wrapper">
    <fa
      :icon="arrowDirection"
      type="fas"
      class="{ direction === 'FortyFiveUp' ? 'forty-five-up' || direction === 'FortyFiveDown' ? 'forty-five-down' : '' }"
    ></fa>
  </div>
</template>

<script>
export default {
  name: 'CurrentBgDirection',
  props: {
    direction: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      icons: [
        { direction: 'Flat', iconString: 'arrows-alt-h' },
        { direction: 'FortyFiveUp', iconString: 'angle-right' },
        { direction: 'SingleUp', iconString: 'angle-up' },
        { direction: 'DoubleUp', iconString: 'angle-double-up' },
        { direction: 'FortyFiveDown', iconString: 'angle-right' },
        { direction: 'SingleDown', iconString: 'angle-down' },
        { direction: 'DoubleDown', iconString: 'angle-double-down' },
      ],
    }
  },
  computed: {
    arrowDirection() {
      let iconName
      this.icons.filter((i) => {
        if (i.direction === this.direction) {
          return (iconName = i.iconString)
        }
      })
      return iconName
    },
  },
}
</script>

<style lang="css" scoped>
.icon-wrapper {
  height: auto;
  width: 30%;
}
.forty-five-down {
  transform: rotate(45deg);
}

.forty-five-up {
  transform: rotate(-45deg);
}
</style>
