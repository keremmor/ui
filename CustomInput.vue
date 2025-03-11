<script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext"; // ✅ InputText bileşenini import et

const inputValue = ref("");
</script>

<template>
  <InputText
    v-model="inputValue"
    placeholder="Metin giriniz"
    class="p-inputtext-lg w-full"
  />
</template>
