<template>
  <div class="mx-auto max-w-sm space-y-6">
    <ui-spinner v-if="loading"></ui-spinner>
    <template v-else-if="army">
      <div class="flex items-start space-x-6">
        <div>
          <img
            :src="`/factions/${army.faction}.png`"
            :alt="army.faction"
            class="w-20 h-20 object-contain"
          />
          <h1
            :class="[
              'faction faction__block !bg-transparent faction--shadowed text-lg font-bold',
              factionName,
            ]"
          >
            {{ army.faction }}
          </h1>
        </div>
        <div class="flex-1 -mt-3">
          <ui-input
            v-model="army.name"
            label="Army Name"
            :readonly="!isEditable"
          />
        </div>
      </div>
      <div v-if="units" class="space-y-3">
        <unit-list-view
          v-for="unit in units"
          :key="unit.name"
          :unit="unit"
          :count="0"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { logicOr } from "@vueuse/math";
import { Army, Faction, Unit } from "~~/lib/types";

const user = useSupabaseUser();

const headers = useRequestHeaders(["cookie"]);
const route = useRoute();

const { data: army, pending: armyLoading } = await useFetch<Army>(
  "/api/armies",
  {
    query: { id: route.params.id },
    headers: headers as Record<string, string>,
  }
);

const { data: units, pending: unitsLoading } = await useFetch("/api/units", {
  query: { faction: army.value?.faction, sort: "name" },
  watch: [army],
});

const loading = computedEager(() =>
  logicOr(unitsLoading, armyLoading, !army.value)
);

const factionName = useFactionName(army.value?.faction as Faction);

const isEditable = computed(() => {
  if (!user.value || !army.value) return false;
  return user.value.id === army.value.created_by;
});
</script>
