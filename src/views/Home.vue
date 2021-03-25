<template>
  <div class="entries">
    <EntryCard :entry="latestEntry" />
  </div>
</template>

<script>
import EntryCard from "@/components/EntryCard.vue";
import EntryService from "@/services/EntryService.js";
// import axios from "axios";

export default {
  name: "Home",
  components: {
    EntryCard,
  },
  data() {
    return {
      latestEntry: null,
    };
  },
  created() {
    EntryService.getLatestEntry()
      .then(({ data }) => {
        console.log(data[0]);
        this.latestEntry = data[0];
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.entries {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
