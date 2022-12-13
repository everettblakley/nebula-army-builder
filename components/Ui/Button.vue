<template>
  <button
    :class="[
      'btn space-x-2',
      {
        'btn-outline': outline,
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
        'btn-accent': variant === 'accent',
        'btn-neutral': variant === 'neutral',
        'btn-success': variant === 'success',
        'btn-info': variant === 'info',
        'btn-warning': variant === 'warning',
        'btn-error': variant === 'error',
        loading: loading,
      },
    ]"
  >
    <slot>
      <Icon v-if="!loading && icon" :icon="icon" />
      <span v-if="title">{{ title }}</span>
    </slot>
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface ButtonProps {
  title?: string;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "success"
    | "info"
    | "warning"
    | "error";
  outline?: boolean;
  icon?: string;
  loading?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  loading: false,
  outline: false,
});
</script>
