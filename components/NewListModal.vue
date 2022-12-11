<template>
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <form class="space-y-6">
        <h3 class="font-bold text-lg">New List</h3>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">List Name</span>
          </label>
          <input
            v-model="name"
            type="text"
            class="input input-bordered w-full"
            required
          />
        </div>

        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Faction</span>
          </label>
          <faction-picker v-model="faction" />
        </div>

        <div class="modal-action">
          <a
            href="#"
            class="btn btn-primary"
            :class="{ 'btn-disabled': isInvalid }"
            @click="submit"
          >
            Create List
          </a>
          <a href="#" class="btn">Cancel</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FactionOption } from "~~/composables/useFactions";

const router = useRouter();
const { createList } = useLists();

const name = ref("");
const faction = ref<FactionOption | null>(null);

const isInvalid = computed(() => {
  return !isDefined(faction) || !name.value;
});

const submit = () => {
  const list = createList({
    name: name.value,
    faction: faction.value!.label,
  });
  console.debug(JSON.stringify(list.value));

  router.push(`/lists/${list.value.id}`);
};
</script>
