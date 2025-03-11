<script setup>
import Card from "primevue/card";
import CustomInput from "./CustomInput.vue";
import CustomDropdown from "./CustomDropdown.vue";
import DatePickerGroup from "./DatePickerGroup.vue";
import PhoneInput from "./PhoneInput.vue";
</script>

<template>
  <Card class="custom-card">
    <template #content>
      <div class="flex flex-col gap-4">
        <!-- Üst Kısım -->
        <div class="flex gap-3">
          <CustomInput />
          <CustomDropdown />
        </div>

        <!-- Alt Kısım -->
        <DatePickerGroup />
        <PhoneInput />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.custom-card {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: var(--surface-card-shadow);
}
</style>
