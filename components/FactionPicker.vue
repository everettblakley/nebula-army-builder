<template>
  <RadioGroup class="faction-picker" v-model="selectedFaction">
    <RadioGroupLabel class="sr-only">Faciton</RadioGroupLabel>
    <RadioGroupOption
      as="template"
      v-for="faction in factions"
      :key="faction"
      :value="faction"
      v-slot="{ active, checked }"
    >
      <span
        :class="[
          'faction__wrapper',
          { 'faction--selected': active || checked },
        ]"
      >
        <div class="faction__image-wrapper">
          <img
            :src="`/factions/${faction}.png`"
            :alt="faction"
            class="faction__image"
          />
          <RadioGroupLabel
            as="p"
            :class="`faction__label faction ${getFactionName(faction)} ${
              (active || checked) && 'faction--shadowed'
            }`"
            >{{ faction }}</RadioGroupLabel
          >
        </div>
      </span>
    </RadioGroupOption>
  </RadioGroup>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { Faction } from "~~/lib/types";

const factions = useFactions();

interface Props {
  modelValue: Faction | undefined;
}
const props = withDefaults(defineProps<Props>(), { modelValue: undefined });
const emit = defineEmits(["update:modelValue"]);

const getFactionName = (faction: Faction) => {
  return useFactionName(faction).value;
};

const selectedFaction = useVModel(props, "modelValue", emit);
</script>

<style lang="postcss">
.faction-picker {
  @apply flex items-center justify-around;

  .faction__wrapper {
    @apply inline-block flex-1 outline-none cursor-pointer;

    .faction__image-wrapper {
      @apply flex flex-col items-center space-y-2;

      .faction__image,
      .faction__label {
        @apply opacity-50 transition transform;
      }

      .faction__image {
        @apply w-20 object-contain;
      }

      .faction__label {
        @apply text-base text-white font-semibold;
      }
    }

    &:hover,
    &.faction--selected {
      .faction__image,
      .faction__label {
        @apply scale-110 opacity-100;
      }
    }
  }
}
</style>
