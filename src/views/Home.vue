<template>
  <div v-if="!latestEntry">Loading...</div>
  <div v-else-if="latestEntry" class="entries">
    <EntryCard :entry="latestEntry" />
  </div>
</template>

<script>
import EntryCard from '@/components/EntryCard.vue'
import EntryService from '@/services/EntryService.js'

export default {
  name: 'Home',
  components: {
    EntryCard,
  },
  data() {
    return {
      latestEntry: {},
    }
  },
  created() {
    EntryService.getLatestEntry()
      .then(({ data }) => {
        this.latestEntry = data[0]
        console.log('latest: ', data[0])
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.entries {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
