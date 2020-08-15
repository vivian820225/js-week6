<template>
    <div>
        <div id="nav">
          <router-link to="/">回首頁</router-link> |
          <router-link to="/admin/">Dashboard</router-link> |
          <router-link to="/admin/products">Products List</router-link> |
          <router-link to="/admin/coupon">Coupon</router-link> |
          <router-link to="/admin/orders">Orders</router-link> |
          <router-link to="/admin/imageStorage">ImageStorage</router-link>
        </div>
        <h1>後臺頁面</h1>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>
