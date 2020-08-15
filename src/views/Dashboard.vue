<template>
    <div>
        <div id="nav">
          <router-link to="/admin/">Dashboard</router-link> |
          <router-link to="/admin/products">Products List</router-link> |
          <router-link to="/admin/coupon">Coupon</router-link> |
          <router-link to="/admin/orders">Orders</router-link> |
          <router-link to="/admin/imageStorage">ImageStorage</router-link> ||
          <a class="btn text-muted" @click.prevent="logout">登出</a>
        </div>
        <h1>後臺頁面</h1>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      token: '',
      checkSuccess: false,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      // 取得 token 的 cookies
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
      this.axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;

      const api = `${process.env.VUE_APP_APIPATH}api/auth/check`;

      // eslint-disable-next-line
      this.axios.post(api, {'api_token': this.token}).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.checkSuccess = true;
        }
      }).catch(() => {
        // console.log(res);
        this.$router.push('/login');
      });
    },
    logout() {
      // 清除存入 cookie 的 token
      document.cookie = 'token=; expired=;';
      this.$router.push('/login');
      console.log('token 已清除');
    },
  },

};
</script>
