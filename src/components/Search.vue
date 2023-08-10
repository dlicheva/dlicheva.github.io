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
      placeholder="Search recipes…"
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>
input {
  border-radius: 4px;
  line-height: 20px;
  padding: 8px;
  max-width: 400px;
  margin-bottom: 32px;
  width: calc(100% - 32px);
  font-size: 16px;
  border: 1px solid #cacaca;
}
label {
  font-size: 0;
}
</style>
