<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    :error="error"
    error-text="加载失败，请点击重试"
    :immediate-check="false"
    @load="onLoad"
  >
  <comment-item
    v-for="(item, index) in list"
    :key="index"
    :comment="item"
  ></comment-item>
  </van-list>
</template>

<script>
import { getComments } from '@/api/comment'
import commentItem from '../components/comment-item'
export default {
  name: 'ArticleList',
  data () {
    return {
      loading: false,
      finished: false,
      offset: null,
      limit: 10,
      error: false
    }
  },
  methods: {
    async onLoad () {
      const { data } = await getComments({
        type: 'a',
        source: 1,
        offset: this.offset,
        limit: this.limit
      })
      const { results } = data.data
      this.list.push(...results)
      this.$emit('onload-success', data.data)
    }
  },
  created () {
    this.onLoad()
  },
  props: {
    artId: {
      type: [Number, Object],
      require: true
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    commentItem
  }
}
</script>

<style lang="scss" scoped>

</style>
