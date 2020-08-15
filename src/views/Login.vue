<template>
  <div class="loginSection d-flex justify-content-center flex-column">
    <h1 class="mb-4">請先登入</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 text-left">
          <form class="form-login mb-3" @submit.prevent="login">
            <div class="form-group">
              <label for="loginInputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="loginInputEmail"
                v-model="user.email"
                aria-describedby="emailHelp"
                placeholder="example@service.com"
                required autofocus>
            </div>
            <div class="form-group">
              <label for="loginInputPassword">Password</label>
              <input
                type="password"
                class="form-control"
                id="loginInputPassword"
                v-model="user.password"
                placeholder="password"
                required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">登入</button>
          </form>
          <a class="text-muted text-decoration-none" href="/">返回首頁</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      token: '',
    };
  },
  methods: {
    login() {
      const api = `${process.env.VUE_APP_APIPATH}api/auth/login`;

      this.axios.post(api, this.user).then((res) => {
        const { token } = res.data;
        const { expired } = res.data;
        // 寫入 cookie token
        // expires 設置有效時間
        document.cookie = `token = ${token}; expired = ${new Date(expired * 1000)};`;
        // 將頁面導向至後台
        this.$router.push('/admin');
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style lang="scss">
  .loginSection {
    height: 100vh;
  }
</style>
