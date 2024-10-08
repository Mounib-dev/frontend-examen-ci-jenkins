<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-navigation-drawer app permanent :width="200">
      <v-list-item link title="Accueil" to="/" prepend-icon="mdi-dashboard"> </v-list-item>
      <v-list-item link title="Config" to="/Config" prepend-icon="mdi-dashboard"> </v-list-item>
      <v-list-item link title="Groupes" to="/Groupes" prepend-icon="mdi-dashboard"> </v-list-item>
      <v-list-item link title="Membres" to="/Membres" prepend-icon="mdi-dashboard"> </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <RouterView />
    </v-main>
    <v-footer app
      ><div class="text-center align-center w-100">
        Mounib & Yasmine <v-icon color="green">mdi-copyright</v-icon> 2024
      </div>
    </v-footer>
  </v-app>
</template>

<style scoped></style>
