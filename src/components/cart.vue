<template>
  
</template>

<script>
import { Store } from "../store/Store";
export default {
  computed: {
    cart() {
      return Store.$data.cart;
    }
  },
  methods: {
    removeFromCart(sku) {
      Store.removeFromCart(sku);
    },
    addToCart(product) {
      Store.addToCart(product);
    }
  }
};
</script>

<style>
</style>