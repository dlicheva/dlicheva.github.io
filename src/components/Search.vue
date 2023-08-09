<script>
export default {
  name: 'Search',
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
}
</script>

<template>
  <label>Search:</label>
  <input
      v-bind="$attrs"
      :value="modelValue"
      placeholder="Search crafting…"
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
input {
  border-radius: 4px;
  border: 1px solid rgb(75, 85, 99);
  line-height: 20px;
  padding: 8px;
  color: white;
  max-width: 400px;
  margin-bottom: 32px;
  width: calc(100% - 32px);
  font-size: 16px;
}
label {
  font-size: 0;
}
</style>
