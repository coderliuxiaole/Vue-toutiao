<template>
  <div class="search-history">
    <van-cell title="搜索历史">
      <div v-if="searchHistoryBtn">
        <span
        @click="$emit('clearLocalStorage')">全部删除</span>
        &nbsp;
        <span @click="searchHistoryBtn=false">完成</span>
      </div>
      <van-icon name="delete" v-else @click="searchHistoryBtn = true"/>
    </van-cell>
    <van-cell v-for="(item, index) in searchHistoryList"
     :key="index"
     :title="item"
     @click="onSearchItemClick(item, index)">
      <van-icon name="close"  v-show="searchHistoryBtn"/>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'searchHistroy',
  data () {
    return {
      searchHistoryBtn: false
    }
  },
  props: {
    searchHistoryList: {
      type: Array,
      require: true
    }
  },

  methods: {
    onSearchItemClick (item, index) {
      // console.log(item, index)
      if (this.searchHistoryBtn) {
        // 删除状态
        this.searchHistoryList.splice(index, 1)
      } else {
        // 非删除状态
        this.$emit('historySearch', item)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
