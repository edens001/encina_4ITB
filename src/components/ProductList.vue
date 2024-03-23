<template>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product">
        <h3>{{ product.name }}</h3>
        <p>Price: ${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['products'],
    methods: {
      addToCart(product) {
        this.$emit('add-to-cart', product);
      }
    }
  }
  </script>