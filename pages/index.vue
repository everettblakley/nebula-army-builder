<script setup lang="ts">
const user = useSupabaseUser();
const [isOpen, toggleOpen] = useToggle(false);
</script>

<template>
  <main class="prose mx-auto space-y-4 px-8">
    <section>
      <h1>Your armies</h1>
      <div class="w-full py-28 flex flex-col items-center justify-center">
        <template v-if="user">
          <p class="text-primary-focus-content">You have no armies</p>
          <ui-button @click="toggleOpen()"> Create a new army </ui-button>
        </template>
        <template v-else>
          <p>
            You are not signed in. 
          </p>
          <p>
            Sign in or sign up for free to create your
            first army!
          </p>
          <nuxt-link to="/sign_in" class="btn btn-primary mt-7">Sign In</nuxt-link>
        </template>
      </div>
    </section>
    <ui-modal v-model:open="isOpen">
      <template #="{ handleClose }">
        <new-army-form @cancel="handleClose" />
      </template>
    </ui-modal>
  </main>
</template>
