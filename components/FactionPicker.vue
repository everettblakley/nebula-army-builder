<template>
  <div class="faction-picker">
    <div
      v-for="faction in factions"
      :key="faction.code"
      :class="['faction', { 'faction--selected': selectedFaction === faction }]"
      tabindex="0"
      @click="selectedFaction = faction"
    >
      <div class="faction__image-wrapper" :data-tip="faction.label">
        <img
          :src="`/factions/${faction.label}.png`"
          :alt="faction.label"
          class="faction__image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FactionOption } from "~~/composables/useFactions";

const factions = useFactions();

interface Props {
  modelValue: FactionOption | null;
}
const props = withDefaults(defineProps<Props>(), { modelValue: null });
const emit = defineEmits(["update:modelValue"]);

const selectedFaction = useVModel(props, "modelValue", emit);
</script>

<style lang="postcss" scoped>
.faction-picker {
  @apply flex items-center justify-around;

  .faction {
    @apply outline-none;

    .faction__image-wrapper {
      @apply tooltip tooltip-bottom;

      .faction__image {
        @apply w-20 object-contain opacity-50 transition transform;
      }
    }

    &:hover, &.faction--selected {
      .faction__image {
        @apply scale-110 opacity-100;
      }
    }
  }
}
/* 'w-20 object-contain transform transition group-hover:scale-110 group-focus:scale-110 group-hover:opacity-100 group-focus:opacity-100',
            selectedFaction === faction
              ? 'scale-110 opacity-100'
              : 'opacity-50', */
</style>
