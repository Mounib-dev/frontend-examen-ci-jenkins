<template>
  <v-col cols="6">
    <h2><center>Connexion</center></h2>
    <v-card>
      <v-card-title> </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="email" label="Email" required type="email"></v-text-field>

          <v-text-field
            v-model="password"
            label="Mot de passe"
            required
            type="password"
          ></v-text-field>

          <v-btn :disabled="!valid" class="center" color="primary" @click="login"> Connexion </v-btn
          ><br />

        <v-snackbar v-model="snackbar" :timeout="3000">
          {{ snackbarMessage }}
          <!-- <template #action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"> Fermer </v-btn>
          </template> -->
        </v-snackbar>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router' // Importation de vue-router

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const email = ref('')
    const password = ref('')
    const valid = ref(false)
    const snackbar = ref(false)
    const snackbarMessage = ref('')

    const router = useRouter() // Utilisation de vue-router

    const login = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
          email: email.value,
          password: password.value
        })

        // Gérer la connexion réussie
        snackbarMessage.value = response.data.message
        snackbar.value = true

        // Redirection vers /config
        router.push('/config') // Rediriger vers la page /config

        // Optionnel : afficher des informations supplémentaires
        console.log("ID de l'utilisateur :", response.data.userId)
        console.log("Rôle de l'utilisateur :", response.data.userRole)
      } catch (error: any) {
        if (error.response) {
          // Gérer l'erreur venant du serveur
          snackbarMessage.value = error.response.data.message || 'Échec de la connexion'
        } else {
          // Gérer les erreurs réseau ou autres
          snackbarMessage.value = 'Échec de la connexion : ' + error.message
        }
        snackbar.value = true
      }
    }

    return {
      email,
      password,
      valid,
      snackbar,
      snackbarMessage,
      login
    }
  }
})
</script>

<style scoped>
.v-card {
  max-width: 400px;
  margin: auto;
}
</style>
