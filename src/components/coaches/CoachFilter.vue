<template>
  <!-- Component for filtering coaches based on categories -->
  <base-card>
    <h2>Find Your Coach</h2>
    <!-- Checkbox filters for frontend, backend, and career coaching -->
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter"/>
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter"/>
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter"/>
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  components: {BaseCard}, // Importing and using the BaseCard component
  emits: ['change-filter'], // Emitting an event when filters change
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  methods: {
    // Method to update and emit filter changes
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters; // Updating the filters
      this.$emit('change-filter', updatedFilters); // Emitting the updated filters
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
