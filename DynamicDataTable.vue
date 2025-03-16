<template>
  <div>
    <h3>İstatistiksel Veriler</h3>

    <!-- Kolon seçim checkboksları -->
    <div v-for="key in headers" :key="key">
      <label>
        <input type="checkbox" v-model="selectedColumns" :value="key" />
        {{ key.toUpperCase() }}
      </label>
    </div>

    <!-- Seçilen kolonlar ile tablo -->
    <DataTable :value="filteredData" class="p-datatable-sm" reorderableColumns>
      <Column
        v-for="key in selectedColumns"
        :key="key"
        :field="key"
        :header="key.toUpperCase()"
      />
    </DataTable>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

// 18-60 yaş arasında rastgele bir yaş döndüren fonksiyon
const getRandomAge = () => Math.floor(Math.random() * (60 - 18 + 1)) + 18;

// Varsayılan JSON verisi (15 kişiye çıkarıldı ve rastgele yaş eklendi)
const defaultData = [
  {
    id: 1,
    name: "Ali Yılmaz",
    email: "ali.yilmaz@example.com",
    phone: "+90 555 123 45 67",
    age: getRandomAge(),
  },
  {
    id: 2,
    name: "Zeynep Kaya",
    email: "zeynep.kaya@example.com",
    phone: "+90 532 987 65 43",
    age: getRandomAge(),
  },
  {
    id: 3,
    name: "Mehmet Demir",
    email: "mehmet.demir@example.com",
    phone: "+90 533 876 54 32",
    age: getRandomAge(),
  },
  {
    id: 4,
    name: "Ayşe Çelik",
    email: "ayse.celik@example.com",
    phone: "+90 536 654 32 21",
    age: getRandomAge(),
  },
  {
    id: 5,
    name: "Burak Şahin",
    email: "burak.sahin@example.com",
    phone: "+90 537 432 12 34",
    age: getRandomAge(),
  },
  {
    id: 6,
    name: "Elif Kılıç",
    email: "elif.kilic@example.com",
    phone: "+90 534 876 54 32",
    age: getRandomAge(),
  },
  {
    id: 7,
    name: "Can Yıldız",
    email: "can.yildiz@example.com",
    phone: "+90 538 765 43 21",
    age: getRandomAge(),
  },
  {
    id: 8,
    name: "Deniz Eren",
    email: "deniz.eren@example.com",
    phone: "+90 531 234 56 78",
    age: getRandomAge(),
  },
  {
    id: 9,
    name: "Emre Tan",
    email: "emre.tan@example.com",
    phone: "+90 535 654 32 10",
    age: getRandomAge(),
  },
  {
    id: 10,
    name: "Fatma Özkan",
    email: "fatma.ozkan@example.com",
    phone: "+90 530 987 65 43",
    age: getRandomAge(),
  },
  {
    id: 11,
    name: "Gökhan Aslan",
    email: "gokhan.aslan@example.com",
    phone: "+90 532 876 54 32",
    age: getRandomAge(),
  },
  {
    id: 12,
    name: "Hande Uçar",
    email: "hande.ucar@example.com",
    phone: "+90 536 234 12 34",
    age: getRandomAge(),
  },
  {
    id: 13,
    name: "İrem Kurt",
    email: "irem.kurt@example.com",
    phone: "+90 537 654 32 21",
    age: getRandomAge(),
  },
  {
    id: 14,
    name: "Kemal Taş",
    email: "kemal.tas@example.com",
    phone: "+90 534 876 54 32",
    age: getRandomAge(),
  },
  {
    id: 15,
    name: "Lale Aksoy",
    email: "lale.aksoy@example.com",
    phone: "+90 539 432 12 34",
    age: getRandomAge(),
  },
];

// Reactivity
const data = ref(defaultData);
const headers = ref(Object.keys(defaultData[0])); // Kolon başlıkları
const selectedColumns = ref(headers.value); // Başlangıçta tüm kolonlar seçili

// Dinamik olarak seçilen kolonları içeren veriyi filtrele
const filteredData = computed(() => {
  return data.value.map((item) => {
    const filteredItem = {};
    selectedColumns.value.forEach((column) => {
      filteredItem[column] = item[column];
    });
    return filteredItem;
  });
});
</script>

<style scoped>
/* Stil ekleme */
.p-datatable {
  margin-top: 10px;
}
</style>
