<template>
  <main class="prose mx-auto space-y-6">
    <div>{{ $route.params.id }}</div>
    <template v-if="user">
      <div class="grid grid-cols-2 gap-4">
        <ui-button title="Sign Out" @click="signOut" />
        <ui-button title="Delete Account" variant="error" @click="deleteAccount" />
      </div>
      <pre
        class="font-mono bg-slate-400 rounded p-3 text-base-300 w-full"
      ><code>{{ JSON.stringify(user, null, 2) }}</code></pre>
    </template>
  </main>
</template>

<script setup lang="ts">
const user = useSupabaseUser();
const client = useSupabaseAuthClient();

const signOut = async () => {
  return await client.auth.signOut();
};

const deleteAccount = async () => {}
</script>
