<template>
  <div class="category">
    <div class="row">
      <div class="column category-col">
        <div
          class="product"
          v-for="product in productInfo"
          :key="product.id"
          @click="goToSinglePage"
        >
          <img :src="product.thumbnail" alt class="category-image" />
          <div class="meta">
            <div class="title">{{ product.title }}</div>
            <div class="price">${{ product.price }}</div>
          </div>
          <button class="cart" @click="addToCart(product.id)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['productInfo']
}
</script>

<style>
/* Create four equal columns that sits next to each other */

.column {
  padding: 0 4rpx;
}

.category-col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8);
  grid-gap: 30rpx;
}

.category-image {
  width: 300rpx;
  height: 300rpx;
  border-radius: 30rpx;
}

.post-container {
  background-color: white;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  padding: 20rpx;
}

.column image {
  margin-top: 8rpx;
  vertical-align: middle;
  max-width: 500rpx;
}

.thumbnail {
  height: 250rpx;
  width: 250rpx;
  border-radius: 10rpx;
  margin-right: 10px;
}

.column-category {
  width: 100%;
  padding-top: 20rpx;
}

.category {
  color: black;
  font-family: 'Trebuchet MS',
                 'Lucida Sans Unicode',
                 'Lucida Grande',
                 'Lucida Sans',
                 Arial,
                 sans-serif;
  font-size: 30rpx;
  background-color: rgb(216, 170, 185);
  padding: 20rpx;
  border-radius: 20rpx;
  font-weight: 700;
}

</style>