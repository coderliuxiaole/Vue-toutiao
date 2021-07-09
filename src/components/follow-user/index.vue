<template>
  <van-button
    v-if="isFollowed"
    class="follow-btn"
    round
    size="small"
    :loading="loading"
    @click="onFollow"
  >已关注</van-button>
  <van-button
    v-else
    class="follow-btn"
    type="info"
    color="#3296fa"
    round
    size="small"
    icon="plus"
    :loading="loading"
    @click="onFollow"
  >关注</van-button>
</template>

<script>
// 导入关注请求方法
import { addFollowUser, deleteFollowUser } from '@/api/user'
export default {
  name: 'followUserIndex',
  data () {
    return {
      loading: false
    }
  },
  props: {
    aut_id: {
      type: Number,
      require: true
    },
    isFollowed: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    async onFollow () {
      this.loading = true
      let msg = ''
      try {
        // 判断关注当前状态
        if (this.isFollowed) {
          // 取消关注
          await deleteFollowUser(this.aut_id)
          msg = '取消关注用户成功!'
        } else {
          // 关注
          await addFollowUser(this.aut_id)
          msg = '关注用户成功!'
        }
        // 成功之后才更新关注用户状态
        this.$emit('updata-isFollowed', !this.isFollowed)
      } catch (err) {
        if (err.response && err.response.status === 400) {
          msg = '你不能关注自己!'
        }
      }
      if (msg === '你不能关注自己!') {
        this.$toast.fail(msg)
      } else {
        this.$toast.suess(msg)
      }
      this.loading = false
    }
  },
  model: {
    prop: 'isFollowed', // v-model 的 value
    event: 'updata-isFollowed'
  }
}
</script>

<style lang="scss" scoped>

</style>
