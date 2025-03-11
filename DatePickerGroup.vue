<script setup>
import { ref } from "vue";
import Calendar from "primevue/calendar";

const startDate = ref(null);
const endDate = ref(null);
</script>

<template>
  <div class="flex gap-3 w-full">
    <Calendar
      v-model="startDate"
      placeholder="Başlangıç Tarihi"
      showIcon
      class="w-full"
    />
    <Calendar
      v-model="endDate"
      placeholder="Bitiş Tarihi"
      showIcon
      class="w-full"
    />
  </div>
</template>
