<template>
  <form class="prose max-w-sm mx-auto space-y-6" @submit.prevent="submit">
    <h1>Sign Up</h1>
    <p>Create your free account to start building armies</p>
    <ui-input v-model="email" type="email" label="Email" required />

    <ui-button class="w-full" type="submit" title="Sign Up" :loading="loading" />

    <section class="mt-4 text-center text-sm">
      Already have an account?
      <nuxt-link to="login" class="text-accent">Log in here</nuxt-link>
    </section>
  </form>
</template>

<script setup lang="ts">
const email = ref("");
const [loading, toggleLoading] = useToggle();

const submit = () => {
  toggleLoading(true);
  setTimeout(() => toggleLoading(false), 1000);
};
</script>
