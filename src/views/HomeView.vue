<template>
  <div>
      <h1>Shopping Page</h1>
      <ProductList :products="products" @add-to-cart="addToCart" />
      <ShoppingCart :cart="cart" @remove-from-cart="removeFromCart" @update-quantity="updateQuantity" />
      <br>
      <div>
        <button type="button" @click="handleLogout">Logout</button>
      </div>
      
  </div> 
</template>

<script>

import ProductList from '@/components/ProductList.vue'


import ShoppingCart from '@/components/ShoppingCart.vue'


export default {

components: {
  ProductList,
  ShoppingCart
},
data() {
  return {
    products: [
      { id: 1, name: 'Pants', price: 50 },
      { id: 2, name: 'T-Shirts', price: 100 },
      // Other product data...
    ],
    cart: []
  }
},

  methods: {
handleLogout() {
        localStorage.removeItem('token');
        this.$router.push('/login');
},

  addToCart(product) {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cart[index].quantity++;
      this.cart[index].total = this.cart[index].quantity * product.price;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        total: product.price
      });
    }
  },
  removeFromCart(index) {
    this.cart.splice(index, 1);
  },
  updateQuantity({ item, index }) {
    item.total = item.quantity * item.price;
    this.cart[index] = item; // Directly assign item to the array element
  }
}
}
</script>