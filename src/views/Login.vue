<template>
  <div class="loginSection d-flex justify-content-center flex-column">
    <h1 class="mb-4">請先登入</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 text-left">
          <form class="form-login mb-3">
            <div class="form-group">
              <label for="loginInputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="loginInputEmail"
                aria-describedby="emailHelp"
                placeholder="example@service.com">
            </div>
            <div class="form-group">
              <label for="loginInputPassword">Password</label>
              <input type="password"
                class="form-control"
                id="loginInputPassword"
                placeholder="password">
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
    return {};
  },
};
</script>

<style lang="scss">
  .loginSection {
    height: 100vh;
  }
</style>
