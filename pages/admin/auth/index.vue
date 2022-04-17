<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="submit">
        <AppControlInput type="email" v-model="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? "Login" : "Sign Up" }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Signup" : "Login" }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppControlInput from "../../../components/UI/AppControlInput.vue";
import AppButton from "../../../components/UI/AppButton.vue";

export interface Data {
  isLogin: boolean;
  email: string;
  password: string;
}

interface Methods {
  submit(): void;
}

interface Computed {}

interface Props {}

export default Vue.extend<Data, Methods, Computed, Props>({
  name: "AdminAuthPage",
  // @ts-ignore
  layout: "admin",
  // @ts-ignore
  middleware: ["init-token-state", "auth"],
  components: {
    AppControlInput,
    AppButton,
  },
  data() {
    return {
      isLogin: true,
      password: "",
      email: "",
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("submit", {
        email: this.email,
        password: this.password,
        isLogin: this.isLogin,
        returnSecureToken: true,
      });
    },
  },
});
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
