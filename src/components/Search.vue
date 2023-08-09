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
      placeholder="Search..."
      @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped>

</style>
