<template>
  <div>
    <h1>Divinity Original Sin 2 - crafting recipes</h1>
  </div>
  <div v-if="loading">Loading...</div>
  <div v-else>
    <Search v-model="searchTerm" v-on:update:modelValue="handleSearch" />
    <RecipeList :recipes="filteredData"/>
  </div>
</template>
<script>
import fetchData from "./server.js";
import RecipeList from './components/RecipeList.vue'
import Search from './components/Search.vue'

export default {
  components: {
    RecipeList,
    Search
  },
  data() {
    return {
      data: [],
      filteredData: [],
      loading: false,
      searchTerm: '',
    }
  },
  methods: {
    async getData() {
      this.loading = true
      this.data = await fetchData()
      this.filteredData = this.data
      this.loading = false
    },
    filterData(searchTerm) {
      const term = searchTerm.toLowerCase()

      this.filteredData = this.data.filter(recipe =>
          recipe.result.toLowerCase().includes(term) ||
          recipe.ingredients.find(ingredient => ingredient.toLowerCase().includes(term))
      )
    },
    handleSearch() {
      if(this.searchTerm) this.filterData(this.searchTerm)
      else this.filteredData = this.data
    },
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
</style>
