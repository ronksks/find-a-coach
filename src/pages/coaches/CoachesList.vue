<template>
  <section>
    Filter
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as coach</router-link>

    </div>
    <ul v-if="hasCoaches">
      <!--    <ul>-->
      <coach-item v-for="coach in filterCoaches"
                  :key="coach.id"
                  :id="coach.id"
                  :first-name="coach.firstName"
                  :last-name="coach.lastName"
                  :rate="coach.hourlyRate"
                  :areas="coach.areas"
      ></coach-item>
    </ul>
    <h3 v-else>No coaches found.</h3>
  </section>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem.vue";

export default {
  name: "CoachesList",
  components: {CoachItem},
  computed: {
    filterCoaches() {
      // accessing trough namespace-coaches, /coacher - gettername
      return this.$store.getters['coaches/coaches']
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']

    },

  }
}
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>