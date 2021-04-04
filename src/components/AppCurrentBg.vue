<template>
  <div v-if="!entry">Loading...</div>
  <div v-else-if="currentSgv" class="bg-number">
    <p
      class="bg-value"
      :style="{
        fontSize: `${fontSize}px`,
        fontWeight: 900,
      }"
    >
      {{ bgValInMmol() }}
    </p>
    <p class="bg-unit">mmol</p>
  </div>
</template>

<script>
export default {
  name: 'AppCurrentBg',
  props: {
    currentSgv: {
      type: Number,
      required: true,
    },
    fontSize: {
      type: Number,
      default: 64,
    },
  },
  methods: {
    bgValInMmol() {
      return (this.currentSgv / 18).toFixed(1)
    },
  },
}
</script>

<style lang="css" scoped>
.bg-value {
  margin-bottom: 0;
}

.bg-unit {
  margin: 0 0 36px;
}
</style>
