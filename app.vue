<script setup lang="ts">
const user = useSupabaseUser();

onMounted(() => {
  console.debug(user);
});
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <nuxt-link to="/" class="btn btn-ghost normal-case text-xl">
        Nebula Army Builder
      </nuxt-link>
    </div>
    <div class="flex-none space-x-4">
      <template v-if="user">
        <nuxt-link :to="`/users/${user.id}`" class="btn btn-ghost">Profile</nuxt-link>
      </template>
      <template v-else>
        <nuxt-link to="/sign_in" class="btn btn-primary">Sign In</nuxt-link>
      </template>
    </div>
  </div>
  <NuxtPage />
</template>
