<template>
<div class="RecipeList">
    <div v-for="(recipe, index) in recipes" :key="index" class="recipe">
      <h3> {{recipe.result}}</h3>
      <span class="description"> {{recipe.description}}</span>
      <ul class="ingredients">
        <li v-for="(ingredient, j) in recipe.ingredients" :key="j">
          1 ⨯ {{ingredient}}
        </li>
      </ul>
    </div>
</div>
</template>
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
}
</script>
<style lang="scss" scoped>
.RecipeList {
  display: grid;
  grid-gap: 16px;
  width: 100%;
}
.recipe {
  border-radius: 4px;
  border: 1px solid #cacaca;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  margin: 0 0 16px;
  background-color: white;
  color: black;
  text-align: left;
  width: 100%;
}

h3 {
  margin: 0;
  padding: 15px 15px 0;
}

.description {
  display: block;
  padding: 0 15px 8px;
}

.ingredients {
  padding: 8px 15px 15px;
  list-style: none;
  margin: 0;
  border-top: 1px solid #cacaca;
  li {
    display: block;
  }
}

@media only screen and (min-width: 600px) {
  .RecipeList {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 32px;
  }
}
@media only screen and (min-width: 1200px) {
  .RecipeList {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 32px;
  }
}
</style>
