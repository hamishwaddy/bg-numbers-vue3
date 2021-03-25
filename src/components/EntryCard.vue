<template>
  <div class="entry-card">
    <h1>{{ entry.sgv }}</h1>
    <span>{{ entry.date }}</span>
    <p>{{ entry.direction }}</p>
  </div>
</template>

<script>
export default {
  name: "EntryCard",
  props: {
    entry: Object,
  },
};
</script>

<style scoped>
.entry-card {
  width: 400px;
  border: 1px solid grey;
  border-radius: 6px;
  cursor: pointer;
  padding: 20px;
  margin-bottom: 20px;
}
.entry-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
