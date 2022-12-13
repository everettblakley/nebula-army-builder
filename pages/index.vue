<script setup lang="ts">
const [isOpen, toggleOpen] = useToggle(false);
</script>

<template>
  <main class="prose mx-auto space-y-4 px-8">
    <section>
      <h1>Your armies</h1>
      <div
        class="border-accent-focus border-2 border-dashed rounded w-full h-56 flex flex-col items-center justify-center"
      >
        <p class="text-accent">You have no armies</p>
        <button class="btn btn-accent" @click="toggleOpen()">
          Create a new army
        </button>
      </div>
    </section>
    <ui-modal v-model:open="isOpen">
      <template #="{ handleClose }">
        <new-army-form @cancel="handleClose" />
      </template>
    </ui-modal>
  </main>
</template>
