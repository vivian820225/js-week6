<template>
  <div class="home">
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/products">ProductsList</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/payment">Payment</router-link> |
      <router-link to="/order">Order</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <h1>前臺頁面</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
