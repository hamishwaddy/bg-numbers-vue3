<template>
  <div v-if="!entry">Loading EntryCard...</div>
  <div v-else class="entry-card">
    <AppCurrentBg :currentSgv="entry.sgv" />
    <CurrentBgDirection :direction="entry.direction" />
    <AppDate :timestamp="entry.date" />
  </div>
</template>

<script>
import AppDate from '@/components/AppDate'
import AppCurrentBg from '@/components/AppCurrentBg'
import CurrentBgDirection from '@/components/CurrentBgDirection'

export default {
  name: 'EntryCard',
  components: {
    AppDate,
    AppCurrentBg,
    CurrentBgDirection,
  },
  props: {
    entry: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.entry-card {
  align-items: center;
  width: 250px;
  background-color: aqua;
  border: 1px solid grey;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
}
.entry-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
