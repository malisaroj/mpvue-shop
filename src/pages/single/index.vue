<template>
  <div>
    <div class="product" v-for="product in productInfo" :key="product.id">
      <img :src="product.thumbnail" alt class="category-image" />
      <div class="meta">
        <div class="title">{{ product.title }}</div>
        <div class="price">${{ product.price }}</div>
      </div>

      <button class="cart" @click="addToCart(product.id)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>