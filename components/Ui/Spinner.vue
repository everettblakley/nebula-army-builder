<template>
  <Icon
    icon="icomoon-free:spinner2"
    :class="[
      'animate-spin',
      { 'w-8 h-8': size === 'sm', 'w-12 h-12': size === 'lg' },
    ]"
    color="white"
  />
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
export default {
  components: { Icon },
  props: {
    size: {
      type: String,
      default: "sm",
      validator(size: string) {
        return ["sm", "lg"].includes(size);
      },
    },
  },
};
</script>
