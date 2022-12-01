<script setup lang="ts">
import { ComputedRef } from "vue";
import { Unit } from "~~/composables/useUnits";

const factions = ["Pick One", "Exo Militia", "Res'ai", "Legion", "Ugnix"];
const faction = ref(factions[0]);
const hasFactionSelected = computed(() => faction.value !== factions[0]);

const name = ref("");
const pointLimit = ref(100);

const units: ComputedRef<Unit[]> = useUnits({ faction });

const selectedUnits = reactive<Record<string, number>>({});
const handleCountUpdated = (name: string, count: number) => {
  if (count === 0) {
    delete selectedUnits[name];
  } else {
    selectedUnits[name] = count;
  }
};

const currentPoints = computed(() => {
  return units.value.reduce((sum, { name, cost }: Unit) => {
    if (!selectedUnits[name]) return sum;
    sum += selectedUnits[name] * cost;
    return sum;
  }, 0);
});

const listIsValid = computed(() => {
  return currentPoints.value <= pointLimit.value;
});

const errors = computed(() => {
  const errors = [];

  if (!hasFactionSelected.value) {
    errors.push("You must select a faction");
  }

  if (currentPoints.value > pointLimit.value) {
    errors.push("Your list exceeds the point limit");
  }

  return errors;
});
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
        <span class="label-text">Point Limit</span>
      </label>
      <input
        v-model.number="pointLimit"
        type="number"
        class="input input-bordered w-full"
      />
    </div>

    <div class="stats drop-shadow-xl mx-auto grid">
      <div class="stat place-items-center">
        <div class="stat-title">Current Points</div>
        <div
          class="stat-value"
          :class="listIsValid ? 'text-success' : 'text-error'"
        >
          {{ currentPoints }} / {{ pointLimit }}
        </div>
        <div
          class="stat-desc"
          :class="listIsValid ? 'text-success' : 'text-error'"
        >
          {{
            listIsValid ? "Current list is valid" : "Current list is invalid"
          }}
        </div>
      </div>
    </div>

    <div class="space-y-3">
      <unit-list-view
        v-for="unit in units"
        :key="unit.name"
        :unit="unit"
        :count="selectedUnits[unit.name]"
        @update:count="(count: number) => handleCountUpdated(unit.name, count)"
      />
    </div>
  </form>
</template>
