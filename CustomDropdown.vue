<script setup>
import { ref } from "vue";
import Dropdown from "primevue/dropdown";

const selectedValue = ref(null);
const options = ref([
  { label: "Seçenek 1", value: "option1" },
  { label: "Seçenek 2", value: "option2" },
  { label: "Seçenek 3", value: "option3" },
]);
</script>

<template>
  <Dropdown
    v-model="selectedValue"
    :options="options"
    optionLabel="label"
    placeholder="Seçiniz"
    class="p-dropdown-lg w-full"
  />
</template>
