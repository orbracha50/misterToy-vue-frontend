<template>
  <div class="container">
    <div v-if="isLogin" class="form-container">
      <h2>Login</h2>
      <div class="form-group">
        <label for="loginEmail">Email:</label>
        <input
          type="email"
          v-model="login.loginEmail"
          placeholder="Enter your email"
        />
      </div>
      <div class="form-group">
        <label for="loginPassword">Password:</label>
        <input
          type="password"
          v-model="login.loginPassword"
          placeholder="Enter your password"
        />
      </div>
      <div class="form-group">
        <button @click="handleLogin">Login</button>
      </div>
      <div class="toggle-btn">
        <p>
          Don't have an account?
          <a href="#" @click.prevent="toggleForm">Sign up</a>
        </p>
      </div>
    </div>

    <div v-else class="form-container">
      <h2>Sign Up</h2>
      <div class="form-group">
        <label for="signupName">Name:</label>
        <input
          type="text"
          v-model="signUp.signupName"
          placeholder="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="signupEmail">Email:</label>
        <input
          type="email"
          v-model="signUp.signupEmail"
          placeholder="Enter your email"
        />
      </div>
      <div class="form-group">
        <label for="signupPassword">Password:</label>
        <input
          type="password"
          v-model="signUp.signupPassword"
          placeholder="Enter your password"
        />
      </div>
      <div class="form-group">
        <button @click="handleSignup">Sign Up</button>
      </div>
      <div class="toggle-btn">
        <p>
          Already have an account?
          <a href="#" @click.prevent="toggleForm">Login</a>
        </p>
      </div>
    </div>
  </div>
  <UserMsg/>
</template>

<script>
import userService from "@/services/user/user.service.js";
import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service';
import UserMsg from '@/cmps/UserMsg.vue';
export default {
  data() {
    return {
      login: {
        loginEmail: "",
        loginPassword: "",
      },
      signUp: {
        signupName: "",
        signupEmail: "",
        signupPassword: "",
      },
      isLogin: true,
    };
  },
  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
    },
    async handleLogin() {
      try {
        await userService.login({
          email: this.login.loginEmail,
          password: this.login.loginPassword,
        });
        this.$store.dispatch({ type: "loadUser" });
        this.$router.push("/");
      } catch (err) {
        showErrorMsg("Something went wrong...");
        console.log(err);
      }
    },
    async handleSignup() {
      try {
        await userService.signup({
          email: this.signUp.signupEmail,
          password: this.signUp.signupPassword,
          username: this.signUp.signupName,
          fullname: this.signUp.signupName,
        });
        this.$store.dispatch({ type: "loadUser" });
        this.$router.push("/");
      } catch (err) {
        showErrorMsg("Something went wrong...");
        console.log(err);
      }
    },
  },
  components: {
    UserMsg
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  top: 30vh;
  left: 22vw;
  width: 90%;
  max-width: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.form-container {
  padding: 20px;
}
.form-container h2 {
  margin: 0 0 20px;
  text-align: center;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.form-group button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: orange;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: 0.5s;
}
.form-group button:hover {
  background-color: orangered;
}
.toggle-btn {
  text-align: center;
  margin-top: 10px;
}
.toggle-btn a {
  color: orange;
  font-weight: bold;
  text-decoration: none;
}
.toggle-btn a:hover {
  text-decoration: underline;
}
</style>