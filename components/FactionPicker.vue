<template>
  <div class="faction-picker">
    <div
      v-for="faction in factions"
      :key="faction"
      :class="['faction', { 'faction--selected': selectedFaction === faction }]"
      tabindex="0"
      @click="selectedFaction = faction"
    >
      <div class="faction__image-wrapper" :data-tip="faction">
        <img
          :src="`/factions/${faction}.png`"
          :alt="faction"
          class="faction__image"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Faction } from '~~/lib/types';

const factions = useFactions();

interface Props {
  modelValue: Faction | null;
}
const props = withDefaults(defineProps<Props>(), { modelValue: null });
const emit = defineEmits(["update:modelValue"]);

const selectedFaction = useVModel(props, "modelValue", emit);
</script>

<style lang="postcss" scoped>
.faction-picker {
  @apply flex items-center justify-around;

  .faction {
    @apply outline-none cursor-pointer;

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
</style>
