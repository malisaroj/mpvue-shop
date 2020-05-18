<template>
  <VueSlickCarousel :arrows="true" :dots="true">
    <div>
      <h3>1</h3>
    </div>/*...*/
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
    // optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
   data() {
      return {
        settings: {
          arrows: true,
          dots: true,
        },
      }

    },
    name: 'MyComponent',
    components: { VueSlickCarousel },
}


</script>

<style>

</style>