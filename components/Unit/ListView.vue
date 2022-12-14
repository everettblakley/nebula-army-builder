<template>
  <div
    :class="[
      'px-3 py-2.5 rounded text-white font-semibold flex items-center justify-between',
      {
        'bg-exo': unit.faction === 'Exo Militia',
        'bg-resai text-black': unit.faction === 'Res\'ai',
        'bg-legion': unit.faction === 'Legion',
        'bg-ugnix': unit.faction === 'Ugnix',
      },
    ]"
  >
    <h2>
      {{ unit.name }}
      <span class="badge badge-md badge-info bg-current mix-blend-screen"
        ><p class="text-white">{{ unit.cost }}</p></span
      >
    </h2>
    <div class="flex items-center space-x-1.5">
      <button class="btn btn-xs btn-circle" @click="decrement">-</button>
      <input
        v-model.number="count"
        type="text"
        pattern="\d{1,3}"
        class="input input-ghost bg-transparent focus:bg-white focus:text-neutral-focus max-w-[3.5ch] max-h-8 px-1 py-0.5 text-center"
      />
      <button class="btn btn-xs btn-circle" @click="increment">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { Unit } from "~~/lib/types";

interface Props {
  unit: Unit;
  count?: number;
}

const props = withDefaults(defineProps<Props>(), { count: 0 });

const count = useVModel(props, "count");

const decrement = () => {
  if (count.value === undefined) return;
  if (count.value === 0) return;
  count.value -= 1;
};

const increment = () => {
  if (count.value === undefined) {
    count.value = 1;
  } else {
    count.value += 1;
  }
};
</script>

<style scoped></style>
