<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'
import router from './router'

export default {
  setup() {
    const authStore = useAuthStore()
    const userId = computed(() => authStore.userId)
    const userRole = computed(() => authStore.userRole)
    const isAuthenticated = computed(() => {
      return userId.value && userRole.value
    })

    const logout = async () => {
      await authStore.clearUser()
      router.push('/login')
    }

    return {
      userId,
      userRole,
      isAuthenticated,
      logout
    }
  }
}
</script>

<template>
  <v-app>
    <v-navigation-drawer app permanent :width="200">
<<<<<<< HEAD
      <v-list-item link title="login" to="/login" prepend-icon="mdi-dashboard"> </v-list-item>
      <v-list-item link title="Accueil" to="/" prepend-icon="mdi-dashboard"> </v-list-item>
      <v-list-item link title="Config" to="/Config" prepend-icon="mdi-dashboard"> </v-list-item>
      <v-list-item link title="Groups" to="/Groups" prepend-icon="mdi-dashboard"> </v-list-item>
=======
      <v-list-item
        v-if="!isAuthenticated"
        link
        title="Login"
        to="/login"
        prepend-icon="mdi-dashboard"
      >
      </v-list-item>
      <v-btn v-if="isAuthenticated" @click="logout">Déconnecter</v-btn>

      <v-list-item v-if="isAuthenticated" link title="Accueil" to="/" prepend-icon="mdi-dashboard">
      </v-list-item>
      <v-list-item
        v-if="isAuthenticated && userRole === 'admin'"
        link
        title="Config"
        to="/Config"
        prepend-icon="mdi-dashboard"
      >
      </v-list-item>
      <v-list-item v-if="userId" link title="Groupes" to="/Groupes" prepend-icon="mdi-dashboard">
      </v-list-item>
>>>>>>> 9adc14c (Conditionnal rendering depending on user is authenticated or not)
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
