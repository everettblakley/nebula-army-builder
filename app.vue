<script setup lang="ts">
const isAuthenticated = ref(false);
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <nuxt-link to="/" class="btn btn-ghost normal-case text-xl">
        Nebula Army Builder
      </nuxt-link>
    </div>
    <div class="flex-none space-x-4">
      <template v-if="isAuthenticated"></template>
      <template v-else>
        <nuxt-link to="sign_up" class="btn btn-secondary btn-outline">Sign Up</nuxt-link>
        <nuxt-link to="login" class="btn btn-primary">Login</nuxt-link>
      </template>
    </div>
  </div>
  <NuxtPage />
</template>
