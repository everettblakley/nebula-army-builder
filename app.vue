<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Nebula Companion</a>
    </div>
    <nuxt-link class="btn btn-primary" tag="button" to="/lists/new"
      >New List</nuxt-link
    >
  </div>
  <NuxtPage />
</template>
