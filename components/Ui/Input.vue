<template>
  <div class="form-control w-full">
    <label v-if="label" class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      v-model="localValue"
      :type="type"
      class="input input-bordered w-full"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
interface InputProps {
  modelValue?: string | number;
  type?: "text" | "number" | "email"; 
  label?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: undefined,
  type: "text",
});
const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
