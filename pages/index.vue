<script setup lang="ts">
import { Ref } from "vue";
import { Army } from "~~/lib/types";

const user = useSupabaseUser();
const headers = useRequestHeaders(["cookie"]);
const [isNewArmyModalOpen, toggleNewArmyModalOpen] = useToggle(false);
const [loadingArmies] = useToggle(false);

const armies: Ref<Army[]> = computedAsync(
  async () => {
    if (!user.value) return [];
    return await $fetch("/api/armies", {
      method: "get",
      query: { created_by: user.value.id },
      headers: headers as Record<string, string>,
    });
  },
  [],
  loadingArmies
);
</script>

<template>
  <main class="prose mx-auto space-y-4 px-8">
    <section>
      <h1>Your armies</h1>
      <div class="w-full py-28 flex flex-col items-center justify-center">
        <template v-if="user">
          <ui-spinner v-if="loadingArmies" size="lg" />
          <div v-else-if="armies.length === 0">
            <p class="text-primary-content text-center">You have no armies</p>
            <ui-button @click="toggleNewArmyModalOpen()">
              Create a new army
            </ui-button>
          </div>
          <div v-else>{{ armies }}</div>
        </template>
        <template v-else>
          <p>You are not signed in.</p>
          <p>Sign in or sign up for free to create your first army!</p>
          <nuxt-link to="/sign_in" class="btn btn-primary mt-7"
            >Sign In</nuxt-link
          >
        </template>
      </div>
    </section>
    <ui-modal v-model:open="isNewArmyModalOpen">
      <template #="{ handleClose }">
        <new-army-form @cancel="handleClose" />
      </template>
    </ui-modal>
  </main>
</template>
