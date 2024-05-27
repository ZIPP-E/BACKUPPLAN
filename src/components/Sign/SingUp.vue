<template>
  <div class="signup-page">
    <MainBackground class="background"></MainBackground>
    <Container class="container">
      <div class="signup-content">
        <h2>Sign Up</h2>
        <form @submit.prevent="signUp">
          <div class="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" v-model="firstName" required>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" v-model="lastName" required>
          </div>
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label>Birth Date:</label>
            <div class="birth-date-inputs">
              <input type="number" v-model="birthDay" placeholder="Day" min="1" max="31" required>
              <input type="number" v-model="birthMonth" placeholder="Month" min="1" max="12" required>
              <input type="number" v-model="birthYear" placeholder="Year" :max="maxYear" required>
            </div>
          </div>
          <div class="form-group">
            <label for="gender">Gender:</label>
            <select id="gender" v-model="gender" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
          </div>
          <div class="button-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import MainBackground from "@/components/MainBackground.vue";
import Container from "@/components/Container.vue";

export default defineComponent({
  name: "SignUp",
  components: { Container, MainBackground },
  setup() {
    const store = useStore();
    const router = useRouter();

    // Define all form fields
    const firstName = ref('');
    const lastName = ref('');
    const username = ref('');
    const email = ref('');
    const birthDay = ref<number | null>(null);
    const birthMonth = ref<number | null>(null);
    const birthYear = ref<number | null>(null);
    const gender = ref('');
    const password = ref('');
    const confirmPassword = ref('');

    const maxYear = new Date().getFullYear() - 18;

    const signUp = () => {
      if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        return;
      }

      if (birthDay.value === null || birthMonth.value === null || birthYear.value === null) {
        alert('Please complete your birth date');
        return;
      }

      const birthDate = new Date(birthYear.value, birthMonth.value - 1, birthDay.value);
      const age = getAge(birthDate);

      if (age < 18) {
        alert('You must be at least 18 years old to sign up');
        return;
      }

      // Simuleer succesvolle aanmelding
      store.commit('auth/setLoggedIn', true);
      store.commit('auth/setUsername', username.value);
      store.commit('auth/setProfile', {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        birthDate: birthDate.toISOString(),
        gender: gender.value
      });

      // Redirect naar de profielpagina
      router.push('/profile');
    };

    const getAge = (birthDate: Date) => {
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };

    return {
      firstName,
      lastName,
      username,
      email,
      birthDay,
      birthMonth,
      birthYear,
      gender,
      password,
      confirmPassword,
      maxYear,
      signUp
    };
  }
});
</script>

<style scoped>
.signup-page {
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

.signup-content {
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

input, select {
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: black;
}

.birth-date-inputs {
  display: flex;
  gap: 10px;
}

input[type="number"] {
  width: 100px;
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
}

button:hover {
  background-color: white;
  color: black;
}
</style>
