<template>
  {{ timestamp }}
  <span :title="humanFriendlyDate">
    {{ timeAgo }}
  </span>
</template>

<script>
import { format, formatDistanceToNow } from 'date-fns'
export default {
  props: {
    timestamp: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      timeAgo: '',
    }
  },
  computed: {
    // timeAgo() {
    //   return this.recalculateTimeAgo()
    // },
    humanFriendlyDate() {
      return format(this.timestamp, 'dd-MMM-yyyy hh:mm:aaa')
    },
  },
  methods: {
    recalculateTimeAgo() {
      setInterval(() => {
        console.log(formatDistanceToNow(this.timestamp, { addSuffix: true }))
        this.timeAgo = formatDistanceToNow(this.timestamp, { addSuffix: true })
      }, 10000)
    },
  },
}
</script>

<style lang="css" scoped></style>
