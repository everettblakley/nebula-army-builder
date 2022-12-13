<template>
  <nuxt-link
    :to="`/armies/${army.id}`"
    :class="['army-list-view not-prose', factionColours]"
  >
    <img
      :src="`/factions/${army.faction}.png`"
      :alt="army.faction"
      class="w-12 h-12 object-contain"
    />
    <div>
      <h2 class="text-lg font-semibold">{{ army.name }}</h2>
      <p class="text-sm font-medium opacity-60 italic">{{ army.faction }}</p>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { Army, Faction } from "~~/lib/types";

interface ArmyListViewProps {
  army: Army;
}

const props = defineProps<ArmyListViewProps>();

const factionColours = computed(() => {
  switch (props.army.faction as Faction) {
    case "Exo Militia":
      return "bg-exo text-white";
    case "Legion":
      return "bg-legion text-black";
    case "Res'Ai":
      return "bg-resai text-white";
    case "Ugnix":
      return "bg-ugnix text-black";
  }
});
</script>

<style lang="postcss">
.army-list-view {
  @apply no-underline rounded p-4 w-full;
  @apply flex items-center space-x-4;
  @apply transform transition;

  &:hover,
  &:active {
    @apply drop-shadow-2xl scale-105 opacity-90;
  }
}
</style>
