<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <nuxt-link to="/" class="btn btn-ghost normal-case text-xl">Nebula Companion</nuxt-link>
    </div>
    <a href="#new-list" class="btn btn-primary">New List</a>
  </div>
  <NuxtPage />
  <Teleport to="body">
    <new-list-modal id="new-list" />
  </Teleport>
</template>
