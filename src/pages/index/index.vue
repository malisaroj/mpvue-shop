<template>
  <div @click="clickHandle">
    <div class="navbar">
      <div class="userinfo" @click="bindViewTap">
        <img
          class="userinfo-avatar"
          v-if="userInfo.avatarUrl"
          :src="userInfo.avatarUrl"
          background-size="cover"
        />
        <img class="userinfo-avatar" v-else src="/static/images/user.png" background-size="cover" />

        <div class="userinfo-nickname">
          <card :text="userInfo.nickName"></card>
        </div>
      </div>
      <div class="cart">
        <navbar></navbar>
      </div>
    </div>

    <div class="banner">
      <banner></banner>
    </div>
    <div class="product">
      <product></product>
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
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import card from "@/components/card";
import banner from "@/components/banner";
import product from "@/components/product";

export default {
  data() {
    return {
      motto: "Just For You",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "/static/images/user.png"
      }
    };
  },

  components: {
    navbar,
    card,
    banner,
    product
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
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-between;
  justify-content: space-around;
}

.userinfo {
  display: flex;
  flex-direction: row;
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

.banner {
  margin-bottom: 50rpx;
}
</style>
