<template>
  <div class="cart">
    <h1 class="title">Your Cart</h1>
    <p v-show="!products.length">
      <i>Your cart is empty!</i>
      <router-link to="/">Go shopping</router-link>
    </p>
    <table class="table is-striped" v-show="products.length">
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>${{ product.price }}</td>
          <td>{{ product.quantity }}</td>
          <td><button class="button is-primary" @click="removeFromCart(product)">x</button></td>
        </tr>
        <tr>
          <td>
            <b>Total:</b>
          </td>
          <td></td>
          <td>
            <b>${{ total }}</b>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      <button v-show="products.length" class="button is-primary" @click="checkout">Checkout</button>

    </p>
  </div>
</template>
<script>
// Use Vuex
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
  },
  computed: {
    ...mapGetters({
      products: "cartProducts"
    }),
    total() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity;
      }, 0);
    }
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    checkout() {
      alert("Pay us $" + this.total);
    }
  }
};
</script>
<style scoped>
.table {
  width: 90%;
}

tr {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>>