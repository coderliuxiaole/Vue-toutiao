<template>
  <div class="channel-edit">
    <van-cell title="我的频道" :border="false">
      <van-button
        class="edit-btn"
        type="danger"
        plain
        round
        size="mini"
        @click="isEditBtn = !isEditBtn"
      >{{ isEditBtn ? '完成' : '编辑'}}</van-button>
    </van-cell>
    <van-grid :gutter="10" class="my-grid">
      <van-grid-item
        class="channel-item"
        v-for="(item,index) in editList"
        :key="index"
        text="文字"
        @click="itemClick(item, index)"
      >
      <!-- 根据编辑按钮的状态显示icon -->
       <van-icon
         v-show="isEditBtn && !fiexdChannels.includes(item.id)"
          slot="icon"
          name="clear"
        ></van-icon>
      <span slot="text" class="text" :class="{ active : isAtive === index}" > {{ item.name }}</span>
      </van-grid-item>
    </van-grid>
    <van-cell title="频道推荐" :border="false"></van-cell>
    <van-grid :gutter="10" class="recommend-grid">
      <van-grid-item
        class="grid-item"
        v-for="item in allArtList"
        :key="item.id"
        icon="plus"
        :text="item.name"
        @click="addChannel(item)"
      >
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getAllChannels, addUserChannel } from '@/api/channel'
// import { setItem } from '@/utils/storage'
import { mapState } from 'vuex'
export default {
  name: 'ChannelEdit',
  data () {
    return {
      newAllArtList: [],
      fiexdChannels: [0],
      isEditBtn: false
    }
  },
  props: {
    editList: {
      type: Array,
      require: true
    },
    isAtive: {
      type: Number,
      require: true
    }
  },
  computed: {
    allArtList () {
      return this.newAllArtList.filter(channel => {
        return !this.editList.find(myChannel => {
          return myChannel.id === channel.id
        })
      })
    },
    ...mapState(['user'])
  },
  created () {
    this.getAllArtList()
  },
  methods: {
    async getAllArtList () {
      try {
        const { data } = await getAllChannels()
        this.newAllArtList = data.data.channels
      } catch (err) {
        console.log('数据请求失败!', err)
      }
    },

    addChannels (item) {
      this.editList.push(item)
    },

    itemClick (item, index) {
      if (this.isEditBtn) {
        // 当按钮处于编辑状态下执行的事件

        // 如果查询到id 在 受保护的数组里则不对其操作
        if (this.fiexdChannels.includes(item.id)) {
          return
        }
        // 删除本地数据
        this.editList.splice(index, 1)

        // 判断数据如果小于isAtive的话 让当前被选中的元素 - 1
        if (index <= this.isAtive) {
          // isShow true  不关闭弹出层 false 关闭弹出层
          this.$emit('updataActive', this.isAtive - 1, true)
        }
      } else {
        // 当按钮处于非编辑状态下执行的事件
        this.$emit('updataActive', index, false)
      }
    },

    async addChannel (item) {
      this.editList.push(item)
      if (this.user) {
        try {
          await addUserChannel({
            id: item.id,
            seq: this.editList.length
          })
        } catch (err) {
          this.$toast('频道数据保存请求失败!')
        }
      } else {
        console.log('未登录')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.channel-edit {
  padding: 85px 0;
}
.channel-item {
  font-size: 16px;
  .text {
    font-size: 20px;
  }
  .active {
    color: red;
  }
}
.van-grid-item__content {
  position: relative;
}
/deep/.van-grid-item__icon-wrapper {
  .van-icon-clear {
     position: absolute;
        right: -90px;
        top: -30px;
        font-size: 30px;
        color: #cacaca;
        z-index: 2;
  }
}

  .edit-btn {
    width: 104px;
    height: 48px;
    font-size: 26px;
    color: #f85959;
    border: 1px solid #f85959;
  }
  /deep/ .grid-item {
    width: 160px;
    height: 86px;
    .van-grid-item__content {
      white-space: nowrap;
      background-color: #f4f5f6;
      .van-grid-item__text, .text {
        font-size: 22px;
        color: #222;
        margin-top: 0;
      }
      .active {
        color: red;
      }
      .van-grid-item__icon-wrapper {
        position: unset;
      }
    }
  }

   /deep/ .my-grid {
    .grid-item {
      .van-icon-clear {
        position: absolute;
        right: -10px;
        top: -10px;
        font-size: 30px;
        color: #cacaca;
        z-index: 2;
      }
    }
  }
    /deep/ .recommend-grid {
    .grid-item {
      .van-grid-item__content {
        flex-direction: row;
        .van-icon-plus {
          font-size: 28px;
          margin-right: 6px;
        }
      }
    }
  }
</style>
