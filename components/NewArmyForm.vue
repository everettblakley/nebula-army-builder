<template>
  <form class="space-y-6" @submit.prevent="submit">
    <h3 class="font-bold text-lg">New Army</h3>

    <ui-input v-model="name" label="Army Name" type="text" required />

    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">Faction</span>
      </label>
      <faction-picker v-model="faction" />
    </div>

    <div class="modal-action">
      <button
        class="btn btn-primary"
        :class="{ 'btn-disabled': isInvalid }"
        type="submit"
      >
        Create Army
      </button>
      <button class="btn" @click.prevent="cancel">Cancel</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Army, Faction } from "~~/lib/types";

const emit = defineEmits(["cancel"]);

const router = useRouter();

const name = ref("");
const faction = ref<Faction | null>(null);
const [loading, toggleLoading] = useToggle();

const isInvalid = computed(() => {
  return !isDefined(faction) || !name.value;
});

const submit = async () => {
  toggleLoading(true);
  const army: Army = await $fetch("/api/army", {
    method: "post",
    body: { name: name.value, faction: faction.value },
  });

  toggleLoading(false);
  router.push(`/armies/${army.id}`);
};

const cancel = () => {
  emit("cancel");
};
</script>
