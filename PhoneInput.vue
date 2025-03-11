<script setup>
import { ref } from "vue";
import InputMask from "primevue/inputmask";

const phoneNumber = ref("");
</script>

<template>
  <InputMask
    v-model="phoneNumber"
    mask="(999) 999-9999"
    placeholder="Telefon Numarası"
    class="w-full"
  />
</template>
