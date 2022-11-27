<script setup lang="ts">
const { units } = await useUnits();

const factions = useGroupBy(units.value, "faction");
</script>

<template>
  <div class="navbar bg-base-100">
    <a class="btn btn-ghost normal-case text-xl">Nebula Companion</a>
  </div>
  <main class="prose px-8 py-12">
    <div v-for="(units, faction) in factions" :key="faction">
      <h1>{{ faction }}</h1>
      <div class="grid grid-flow-col">
        <article
          v-for="unit in units"
          class="card card-compact w-52 bg-base-100 shadow-xl"
        >
          <figure>
            <img :src="`units/${unit.name}.png`" :alt="unit.name" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ unit.displayName }}</h2>
            <div class="card-actions">
              <button class="btn btn-primary">Add To List</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>
