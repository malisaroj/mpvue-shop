<template>
  <div @click="clickHandle">
    <div>
      <banner></banner>
    </div>
    <div class="userinfo" @click="bindViewTap">
      <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover"
      />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>
    <div>
      <category :productInfo="productInfo"></category>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <div>{{ cart }}</div>
  </div>
</template>

<script>
import card from "@/components/card";
import category from "@/components/category";
import banner from "@/components/banner";

export default {
  data() {
    return {
      motto: "Just For You",
      cart: [],
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      productInfo: [
        {
          id: 1,
          title: "lorem ipsuim",
          thumbnail: "/static/images/user.png",
          price: "1300"
        },
        {
          id: 2,
          title: "lorem ipsuim",
          thumbnail: "/static/images/user.png",
          price: "1300"
        }
      ]
    };
  },

  components: {
    card,
    banner,
    category
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    },
    goToSinglePage() {
      mpvue.navigateTo("/pages/counter/main");
    },
    addToCart(id) {
      this.cart.push(id);
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
