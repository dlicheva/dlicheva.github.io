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
      this.filteredData = this.data.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase())

          // || recipe.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          // recipe.sport.toLowerCase().includes(searchTerm.toLowerCase())
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

<style scoped>

</style>
