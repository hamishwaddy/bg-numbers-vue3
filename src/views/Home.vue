<template>
  <div class="entries">
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
    this.getInitEntry()
    this.fetchLatestEntryEveryMinute()
  },
  methods: {
    getInitEntry() {
      EntryService.getLatestEntry()
        .then(({ data }) => {
          console.log('init entry: ', data[0])
          this.latestEntry = data[0]
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchLatestEntryEveryMinute() {
      setInterval(() => {
        EntryService.getLatestEntry()
          .then(({ data }) => {
            console.log('getting data every minute: ', data[0])
            this.latestEntry = data[0]
          })
          .catch((error) => {
            console.log(error)
          })
      }, 60000)
    },
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
