<script setup lang="ts">
const headers = useRequestHeaders(["cookie"]);
const { data: units } = await useFetch("/api/units", {
  query: { faction: "Exo Militia" },
  headers: headers as Record<string, string>,
});
</script>

<template>
  <main class="container mx-auto space-y-4 px-8">
    {{ units }}
  </main>
</template>
