<template>
  <div class="bg-number">
    <div v-if="bgValInMmol() < 4" class="warning">
      <span>URGENT</span>
      <fa icon="exclamation-triangle" type="fas" class="icon"></fa>
    </div>
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
  margin: 0;
}

.bg-unit {
  margin: 0 0 36px;
}

.warning {
  align-items: center;
  background-color: red;
  border-radius: 0.5rem;
  color: #fff;
  display: flex;
  font-weight: 700;
  padding: 0.5rem 2rem;
}

.icon {
  height: 1rem;
  margin-left: 10px;
  width: auto;
}
</style>
