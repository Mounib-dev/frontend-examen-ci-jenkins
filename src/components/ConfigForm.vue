<template>
  <v-container>
    <v-form @submit.prevent="submitForm" ref="form" lazy-validation>
      <!-- Users Number Field -->
      <v-text-field
        v-model="form.usersNumber"
        label="Number of Users"
        type="number"
        required
      ></v-text-field>

      <!-- Groups Number Field -->
      <v-text-field
        v-model="form.groupsNumber"
        label="Number of Groups"
        type="number"
        required
      ></v-text-field>

      <!-- Last Group Option Selector -->
      <v-select
        v-model="form.lastGroupOptions"
        :items="lastGroupOptions"
        label="Select Group Option"
        required
      ></v-select>

      <!-- Submit Button -->
      <v-btn type="submit" color="green" variant="text"> Save </v-btn>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios' // Assurez-vous d'importer axios

export default defineComponent({
  data() {
    return {
      form: {
        usersNumber: '',
        groupsNumber: '',
        lastGroupOptions: '' // Doit être soit "Smaller", soit "Bigger"
      },
      lastGroupOptions: ['Smaller', 'Bigger']
    }
  },

  methods: {
    async submitForm() {
      try {
        // Vérifiez que lastGroupOptions a une valeur valide
        if (!this.form.lastGroupOptions) {
          console.error('Veuillez sélectionner une option pour le dernier groupe.')
          return // Ne soumettez pas si aucune option n'est sélectionnée
        }

        const configData = {
          usersNumber: this.form.usersNumber,
          groupsNumber: this.form.groupsNumber,
          lastGroupOptions: this.form.lastGroupOptions // Envoie de la bonne valeur
        }

        // Appel POST à l'API
        const response = await axios.post('http://localhost:3000/api/v1/config/set', configData)

        if (response.status === 201) {
          console.log('Configuration enregistrée avec succès :', response.data)
          // Réinitialiser le formulaire après soumission réussie
          this.form = {
            usersNumber: '',
            groupsNumber: '',
            lastGroupOptions: ''
          }
        }
      } catch (error) {
        console.error('Erreur lors de la soumission de la configuration :', error)
      }
    }
  }
})
</script>
