<template>
  <!-- Titre de la barre d'outils -->
  <v-toolbar-title>Application Configuration</v-toolbar-title>

  <!-- Conteneur principal pour le formulaire de configuration -->
  <v-container>
    <config-form @submit-config="handleConfigSubmit"></config-form>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConfigForm from '../components/ConfigForm.vue' // Import du formulaire de configuration

export default defineComponent({
  components: {
    ConfigForm // Déclaration du composant enfant
  },

  methods: {
    handleConfigSubmit(configData: Record<string, any>) {
      // Ici, tu peux faire des actions avec les données soumises, comme les envoyer à une API
      console.log('Configuration soumise:', configData)
    }
  }
})
</script>
