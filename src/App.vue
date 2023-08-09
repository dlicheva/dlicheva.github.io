<template>
  <header>
    <h1>Divinity Original Sin 2</h1>
    <nav>
      <a href="https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/">Steam</a>
      <a href="https://divinityoriginalsin2.wiki.fextralife.com/Divinity+Original+Sin+2+Wiki">Wiki</a>
    </nav>
    <h2>Crafting recipes</h2>
  </header>
  <main>
    <div v-if="loading">Loading...</div>
    <template v-else>
      <Search v-model="searchTerm" v-on:update:modelValue="handleSearch" />
      <RecipeList :recipes="filteredData"/>
    </template>
  </main>
  <footer>
    Made by dlicheva in August 2023
  </footer>
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
main {
  max-width: 1200px;
  width: calc(100% - 32px);
  margin: 0 auto;
  padding: 0 16px;
}
</style>
