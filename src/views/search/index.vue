<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3296fa"
        @search="onSearch"
        @cancel="onCancel"
        @focus="isResultShow = false"
      />
     </form>
     <!-- 结果 -->
      <search-result v-if="isResultShow"
      :searchText="searchText"
      />
     <!-- /结果 -->

     <!--  -->
      <search-suggestion v-else-if="searchText"
      :searchText="searchText"
      @onSearch="onSearch"
      />

    <!-- 历史记录 -->
      <search-histrory v-else
      :searchHistoryList="searchHistoryList"
      @historySearch="onSearch"
      @clearLocalStorage="clearLocalStorageFun"
      />
  </div>
</template>

<script>
import SearchResult from './components/search-result.vue'
import SearchHistrory from './components/search-history.vue'
import SearchSuggestion from './components/search-suggestion.vue'

import { getItem, setItem } from '@/utils/storage'
// import { getSearchList } from '@/api/search'
export default {
  name: 'searchIndex',
  data () {
    return {
      searchText: '',
      isResultShow: false,
      searchHistoryList: getItem('searchHistory') || [],
      searchList: []
    }
  },

  methods: {
    onSearch (text) {
      this.searchText = text

      const index = this.searchHistoryList.indexOf(text)
      if (index !== -1) {
        this.searchHistoryList.splice(index, 1)
      }

      // 将热词 加入 历史记录
      this.searchHistoryList.push(this.searchText)
      this.isResultShow = true
    },

    onCancel () {
      this.$router.back()
    },

    clearLocalStorageFun () {
      this.searchHistoryList = []
    }
  },
  components: {
    SearchResult,
    SearchHistrory,
    SearchSuggestion
  },

  watch: {
    searchHistoryList: {
      handler () {
        // localStorage.setItem('searchHistory', JSON.stringify(this.searchHistoryList))
        setItem('searchHistory', this.searchHistoryList)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
