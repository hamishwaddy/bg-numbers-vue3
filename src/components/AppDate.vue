<template>
  <span :title="humanFriendlyDate()">
    {{ timeAgo() }}
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
  methods: {
    timeAgo() {
      return formatDistanceToNow(this.timestamp, { addSuffix: true })
    },
    humanFriendlyDate() {
      return format(this.timestamp, 'dd-MMM-yyyy hh:mm:aaa')
    },
  },
}
</script>

<style lang="css" scoped></style>
