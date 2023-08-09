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
      <th >Ingredients</th>
      <th >Description</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(recipe, index) in recipes" :key="index">
      <td> {{recipe.result}}</td>
      <td> {{recipe.ingredients}}</td>
      <td> {{recipe.description}}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
</style>
