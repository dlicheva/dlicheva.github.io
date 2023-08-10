<template>
  <header>
    <h1>Crafting recipes</h1>
  </header>
  <main>
    <div class="tabs">
      <h2 :class="{active: activeTab === 'divinity'}" class="tab" @click="handleTabClick('divinity')">Divinity</h2>
      <h2 :class="{active: activeTab === 'bg'}" class="tab" @click="handleTabClick('bg')">Baldur's Gate</h2>
    </div>
    <div v-if="loading">Loading...</div>
    <template v-else>
      <Divinity v-if="activeTab === 'divinity'" :filtered-data="filteredData" @search="handleSearch"/>
      <BaldursGate v-if="activeTab === 'bg'" :filtered-data="filteredData" @search="handleSearch"/>
    </template>
  </main>
  <footer>
    Made by dlicheva in August 2023
  </footer>
</template>
<script>
import fetchData from "./server.js";
import Divinity from './pages/Divinity.vue'
import BaldursGate from './pages/BaldursGate.vue'

export default {
  components: {
    BaldursGate,
    Divinity,
  },
  data() {
    return {
      data: [],
      filteredData: [],
      loading: false,
      searchTerm: '',
      activeTab: 'bg'
    }
  },
  methods: {
    async getData() {
      this.loading = true
      this.data = await fetchData(this.activeTab)
      this.filteredData = this.data
      this.loading = false
    },
    filterData(searchTerm) {
      const term = searchTerm.toLowerCase()
      this.filteredData = this.data.filter(recipe => recipe.result.toLowerCase().includes(term) ||
          recipe.ingredients?.find(ingredient => ingredient.toLowerCase().includes(term))
      )
    },
    handleSearch(searchTerm) {
      this.searchTerm = searchTerm
      if (this.searchTerm) this.filterData(this.searchTerm)
      else this.filteredData = this.data
    },
    handleTabClick(tab) {
      this.activeTab = tab
      this.getData()
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
main {
  max-width: 1200px;
  width: calc(100% - 32px);
  margin: 0 auto;
  padding: 0 16px;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}

.tab {
  opacity: 0.3;
  font-size: 1em;
  margin-top: 0;
  transition: all linear 0.2s;

  &.active {
    text-decoration: underline;
    text-underline-position: under;
    opacity: 1;
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
}

</style>
