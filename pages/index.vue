<script setup lang="ts">
const { units } = await useUnits();

const factions = useGroupBy(units.value, "faction");
</script>

<template>
  <main class="container mx-auto space-y-4 px-8">
    <section v-for="(units, faction) in factions" :key="faction">
      <div class="prose prose-xl mb-4">
        <h2>{{ faction }}</h2>
      </div>
      <div class="flex gap-3 flex-wrap">
        <article
          v-for="unit in units"
          class="card card-compact w-52 bg-base-100 shadow-xl"
        >
          <figure>
            <img :src="`units/${unit.name}.png`" :alt="unit.name" />
          </figure>
          <div class="card-body">
            <h2 class="card-title !mt-0">{{ unit.displayName }}</h2>
            <div class="card-actions">
              <button class="btn btn-primary">Add To List</button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>