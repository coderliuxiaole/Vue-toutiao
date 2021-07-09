<template>
  <div class="search-suggestion">
    <van-cell
    :title="item"
     icon="search"
     v-for="(item, index) in suggestionsList"
     :key="index"
     @click="$emit('onSearch', item)"
     >
     </van-cell>
  </div>
</template>

<script>
import { getCompletion } from '@/api/search'
export default {
  data () {
    return {
      suggestionsList: [],
      timer: null
    }
  },
  props: {
    searchText: {
      type: String,
      require: true
    }
  },

  methods: {
    async getCompletion () {
      const { data } = await getCompletion({
        q: this.searchText
      })
      this.suggestionsList = data.data.options
      // console.log(this.suggestions)
    }
  },

  created () {

  },

  watch: {
    searchText: {
      handler () {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.getCompletion()
        }, 300)
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
