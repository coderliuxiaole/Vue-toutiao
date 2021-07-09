<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onload"
    >
     <van-cell v-for="(item, index) in list" :key="index">
       <span slot="title">{{ item.title }}</span>
     </van-cell>
    </van-list>
  </div>
</template>

<script>
import { getSearchList } from '@/api/search'
export default {
  data () {
    return {
      loading: false,
      finished: false,
      list: [],
      page: 4,
      per_page: 20
    }
  },
  props: {
    // 搜索热词
    searchText: {
      typeof: String,
      require: true
    }
  },
  methods: {
    async onload () {
      const { data } = await getSearchList({
        page: this.page,
        per_page: this.per_page,
        q: this.searchText
      })
      this.list = data.data.results
      console.log(data)
      console.log(this.list)
      // if (data.total_count)
      this.loading = true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
