<template>
  <div class="forgotpassword-page">
    <MainBackground class="background"></MainBackground>
    <Container class="container">
      <div class="forgotpassword-content">
        <h2>Forgot Password</h2>
        <form @submit.prevent="requestResetPassword">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="button-group">
            <button type="submit">Reset Password</button>
            <button type="button" @click="cancel">Cancel</button>
          </div>
        </form>
        <p v-if="showConfirmation">Reset password request has been sent!</p>
      </div>
    </Container>
  </div>
</template>

<script>
import { ref } from 'vue';
import MainBackground from "@/components/MainBackground.vue";
import Container from "@/components/Container.vue";
import { useRouter } from 'vue-router';

export default {
  components: {
    MainBackground,
    Container
  },
  setup() {
    const email = ref('');
    const showConfirmation = ref(false);
    const router = useRouter(); // Initialiseer de router

    const requestResetPassword = () => {
      // Verkrijg het e-mailadres van de gebruiker
      const userEmail = email.value;

      // Implementeer logica om de gebruiker te vinden op basis van het e-mailadres
      const user = findUserByEmail(userEmail);

      if (user) {
        // Genereer een resettoken en koppel het aan het gebruikersaccount
        const resetToken = generateResetToken();

        // Stuur een e-mail naar de gebruiker met een resetlink inclusief het resettoken
        sendResetEmail(userEmail, resetToken);

        // Toon een bericht aan de gebruiker dat het verzoek is verwerkt
        showConfirmation.value = true;
      }
      else {
        // Geef een foutmelding weer als het opgegeven e-mailadres niet is gevonden
        alert('User not found. Please check your email address.');
      }
    };

    const cancel = () => {
      router.push('/signin'); // Leid de gebruiker terug naar het inlogscherm
    };

    return {
      email,
      showConfirmation,
      requestResetPassword,
      cancel
    };
  }
}
</script>

<style scoped>
.forgotpassword-page {
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

.forgotpassword-content {
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
