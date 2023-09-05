<template>
  <div>
    <form method="post" @submit.prevent="loginHandler">
      <div class="form-container">
        <header>
          <h2>Log In</h2>
        </header>
        <div style="width: 100%;">
          <div>
            <label v-bind:class="(email) ? 'form-label' : 'display-none'">Email</label>
            <input class="form-input" type="text" placeholder="Email" v-model="email">
            <span class="error-msg" v-if="this.errors['email']">{{ this.errors["email"] }}</span>
          </div>
          <div>
            <label v-bind:class="(password) ? 'form-label' : 'display-none'">Password</label>
            <input class="form-input" type="password" placeholder="Password" name="password" v-model="password">
            <span class="error-msg" v-if="this.errors['password']">{{ this.errors["password"] }}</span>
          </div>
          <div style="text-align: center;">
            <button class="log-in"> Log In</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
  
<script>

export default {
  name: 'LoginPage',
  head: {
    title: 'Login'
  },
  layout: "empty",
  data() {
    return {
      email: '',
      password: '',
      errors: { "email": "", "password": "" },
    };
  },
  methods: {
    async loginHandler() {
      try {
        await this.$auth.loginWith('local', {
          data: { "email": this.email, "password": this.password }
        });
        this.$router.push('/');
        this.errors = { "email": "", "password": "" }
      } catch (error) {
        this.errors = { ...error?.response?.data?.first_errors }
      }
    }
  },
}
</script>
<style scoped>
@import "~/assets/styles/login.scss";
</style>
