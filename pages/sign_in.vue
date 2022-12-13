<template>
  <form class="prose max-w-sm mx-auto space-y-6" @submit.prevent="submit">
    <h1>Sign In</h1>
    <p>Create or login to your free account to start building armies</p>

    <ui-input v-model="email" type="email" label="Email" required />

    <ui-button
      class="w-full"
      type="submit"
      title="Send Magic Link"
      :loading="loading"
    />

    <section v-if="linkSent" class="mt-4 text-center text-accent animate-pulse">
      Check your email for a verification code
    </section>
  </form>
</template>

<script setup lang="ts">
const client = useSupabaseAuthClient();
const email = ref("");

const [loading, toggleLoading] = useToggle();
const [linkSent, toggleLinkSent] = useToggle();

const submit = async () => {
  toggleLoading(true);
  const { data, error } = await client.auth.signInWithOtp({
    email: email.value,
  });
  toggleLinkSent();
  toggleLoading(false);
};
</script>
