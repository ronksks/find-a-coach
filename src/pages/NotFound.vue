<template>
  <section>

    <base-card>
      <h2>Page not found</h2>
      <p>This page could not be found - maybe check out all our coaches
        <router-link to="/coaches">Coaches</router-link>
      </p>
    </base-card>
  </section>
</template>
<script>

import {defineComponent} from "vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default defineComponent({
  components: {BaseCard}
})
</script>