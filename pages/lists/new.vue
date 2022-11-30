<script setup lang="ts">
const factions = ["Pick One", "Exo Militia", "Res'ai", "Legion", "Ugnix"];

const name = ref("");
const faction = ref(factions[0]);
const points = ref(100);
</script>

<template>
  <form class="mx-auto max-w-sm space-y-6" @submit.prevent>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">List Name</span>
      </label>
      <input v-model="name" type="text" class="input input-bordered w-full" />
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">Faction</span>
      </label>
      <select v-model="faction" class="select select-bordered">
        <option v-for="(option, index) in factions" :disabled="index === 0">
          {{ option }}
        </option>
      </select>
    </div>
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">Point Value</span>
      </label>
      <input
        v-model.number="points"
        type="number"
        class="input input-bordered w-full"
      />
    </div>
    <div class="flex items-center justify-between space-x-4">
      <button
        class="btn btn-primary btn-block"
        :disabled="faction === factions[0]"
      >
        Add Unit
      </button>
    </div>
  </form>
</template>
