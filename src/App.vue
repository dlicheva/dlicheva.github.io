<template>
  <header>
    <h1>Crafting recipes</h1>
  </header>
  <main>
    <div v-if="loading">Loading...</div>
    <Divinity v-else :filtered-data="filteredData" @search="handleSearch" />
  </main>
  <footer>
    Made by dlicheva in August 2023
  </footer>
</template>
<script>
import fetchData from "./server.js";
import Divinity from './pages/Divinity.vue'

export default {
  components: {
    Divinity,
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
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm
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
