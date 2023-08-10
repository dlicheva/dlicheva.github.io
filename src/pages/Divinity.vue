<template>
  <h2>Divinity Original Sin 2</h2>
  <nav>
    <a href="https://store.steampowered.com/app/435150/Divinity_Original_Sin_2__Definitive_Edition/">Steam</a>
    <a href="https://divinityoriginalsin2.wiki.fextralife.com/Divinity+Original+Sin+2+Wiki">Wiki</a>
  </nav>
  <Search v-model="searchTerm" v-on:update:modelValue="handleSearch"/>
  <RecipeList :recipes="filteredData"/>
</template>
<script>
import RecipeList from '../components/RecipeList.vue'
import Search from '../components/Search.vue'

export default {
  name: 'Divinity',
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
