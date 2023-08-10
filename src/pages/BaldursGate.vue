<template>
  <nav>
    <a href="https://store.steampowered.com/app/1086940/Baldurs_Gate_3/">Steam</a>
    <a href="https://baldursgate3.wiki.fextralife.com/">Wiki</a>
  </nav>
  <Search v-model="searchTerm" v-on:update:modelValue="handleSearch"/>
  <RecipeList :recipes="filteredData"/>
</template>
<script>
import RecipeList from '../components/RecipeList.vue'
import Search from '../components/Search.vue'

export default {
  name: 'BaldursGate',
  components: {
    RecipeList,
    Search
  },
  data() {
    return {
      loading: false,
      searchTerm: '',
    }
  },
  props: {
    filteredData: {
      type: Array,
      required: true,
      default: []
    },
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchTerm)
    },
  },
}
</script>

<style scoped>
</style>
