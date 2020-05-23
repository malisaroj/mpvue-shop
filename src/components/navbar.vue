<template>
  <div class="nav-item is-tab">
    <div class="field is-grouped">
      <div @click="goToCart">
        <span class="icon"></span>
        <span>Checkout ({{itemsInCart}})</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    goToCart() {
      const url = "../cart/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    }
  },

  computed: {
    itemsInCart() {
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0);
    }
  }
};
</script>

<style>
</style>