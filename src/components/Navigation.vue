<template>
  <div class="topnav">
    <div class="topnavleft">
      <div class="topnavleft1">
        <h1><RouterLink to="/">ZIPPE</RouterLink></h1>
      </div>
    </div>
    <div class="topnavright">
      <div class="topnavright1" v-if="!isLoggedIn"> <!-- Als de gebruiker niet is ingelogd -->
        <button @click="redirectToSignIn">Sign In</button>
        <button @click="redirectToSignUp">Sign Up</button>
      </div>
      <div class="topnavright2" v-else> <!-- Als de gebruiker is ingelogd -->
        <div class="flexcolumn">
        <h2>Welkom {{ username }} !</h2> <!-- Gebruikersnaam tonen -->
        </div>
        <div class="flexrow">
        <button @click="redirectToProfile">Profile</button>
        <button @click="redirectToCart">Cart</button>
        <button @click="signOut">Sign Out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { RouterLink, useRouter } from 'vue-router';

const store = useStore();
const router = useRouter(); // Instantieer de router
const isLoggedIn = computed(() => store.state.auth.isLoggedIn);
const username = computed(() => store.state.auth.username);

const signOut = () => {
  store.commit('auth/setLoggedIn', false);
  store.commit('auth/setUsername', null);
};

const redirectToSignIn = () => {
  router.push('/signin');
};

const redirectToSignUp = () => {
  router.push('/signup');
};

const redirectToProfile = () => {
  router.push('/profile');
};

const redirectToCart = () => {
  router.push('/cart');
};
</script>


<style scoped>
.topnav {
  background: #00aa55;
  width: 100vw;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.topnav h1 {
  font-size: 50px;
  padding: 20px;
  font-weight: bold;
}

.topnavleft {
  display: flex;
  flex-direction: column;
}

.topnavleft1 {
  display: flex;
  justify-content: flex-start;
}

.topnavleft2 a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
  transition: color 0.5s ease;
  cursor: pointer;
}

.topnavleft2 a:hover {
  color: red;
}

.topnavleft2 p {
  margin: 0 10px;
  color: white;
}

.topnavright {
  display: flex;
  align-items: center;
}

.topnavright1 {
  display: flex;
}

.topnavright1 button {
  background-color: gray;
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.topnavright1 button:hover {
  background-color: black;
}

.topnavright2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.topnavright2 button {
  background-color: gray;
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  flex: 1;
}

.topnavright2 button:hover {
  background-color: black;
}

.flexcolumn h2
{
  margin: 20px;
  color: #181818;
  font-weight: bold;
}

</style>
