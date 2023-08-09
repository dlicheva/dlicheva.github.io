<script>
export default {
  name: 'RecipeList',
  props: {
    recipes: {
      type: Array,
      required: true,
      default: []
    },
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<template>
  <table>
    <thead>
    <tr>
      <th >Name</th>
      <th >Description</th>
      <th >Ingredient</th>
      <th >Ingredient</th>
      <th >Ingredient</th>
      <th >Ingredient</th>
      <th >Ingredient</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(recipe, index) in recipes" :key="index">
     {{recipe}}
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
