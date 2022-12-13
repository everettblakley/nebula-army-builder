<template>
  <main class="prose mx-auto">
    <div>{{ $route.params.id }}</div>
    <pre v-if="user" class="font-mono bg-slate-400 rounded p-3 text-base-300 max-w-min"><code>{{ JSON.stringify(user, null, 2) }}</code></pre>
  </main>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
</script>
