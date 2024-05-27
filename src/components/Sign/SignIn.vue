<template>
  <div class="signin-page">
    <MainBackground class="background"></MainBackground>
    <Container class="container">
      <div class="signin-content">
        <h2>Sign In</h2>
        <form @submit.prevent="signIn">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <div class="button-group">
            <button type="submit">Sign In</button>
            <button type="button" @click="forgotPassword">Forgot Password</button>
          </div>
        </form>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import MainBackground from "@/components/MainBackground.vue";
import Container from "@/components/Container.vue";

const store = useStore();
const router = useRouter();

const username = ref('');
const password = ref('');

const signIn = () => {
  // Simuleer succesvolle sign-in
  store.commit('auth/setLoggedIn', true);
  store.commit('auth/setUsername', 'John Doe');

  // Redirect naar de profielpagina
  router.push('/profile');
};

const forgotPassword = () => {
  router.push('/forgotpassword');
};
</script>

<style scoped>
.signin-page {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -2;
}

.signin-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
}

input {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: black;
}

.button-group {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #00aa55;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  transition: background-color 0.3s ease;
  flex: 1;
}

button:hover {
  background-color: white;
  color: black;
}
</style>
