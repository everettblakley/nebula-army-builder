<template>
  <button
    :class="[
      'btn gap-2',
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
        'btn-xs': size === 'xs',
        'btn-sm': size === 'sm',
        'btn-md': size === 'md',
        'btn-lg': size === 'lg',
        loading: loading,
      },
    ]"
  >
    <Icon v-if="!loading && icon" :icon="icon" :width="16" :height="16" />
    <slot>
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
  size?: "xs" | "sm" | "md" | "lg";
  outline?: boolean;
  icon?: string;
  loading?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  size: "md",
  loading: false,
  outline: false,
});
</script>
