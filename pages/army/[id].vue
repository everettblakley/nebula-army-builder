<template>
  <div class="mx-auto max-w-sm space-y-6">
    <div v-if="units" class="space-y-3">
      <unit-list-view
        v-for="unit in units"
        :key="unit.name"
        :unit="unit"
        :count="0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Unit } from "~~/types";

const { getList } = useLists();
const route = useRoute();
const { data } = await useAsyncData("list", () =>
  getList(route.params.id as string)
);

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "List not found",
    fatal: true,
  });
}

const units = computed<Unit[]>(() => {
  return [];
});
</script>
