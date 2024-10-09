<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
        <v-alert v-else-if="error" type="error" dismissible>
          {{ error }}
        </v-alert>
        <Groups v-else :users="users" @invite="handleInvite" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import Groups from '../components/Groups.vue'

export default defineComponent({
  components: {
    Groups
  },
  data() {
    return {
      users: [],
      loading: false,
      error: null as string | null
    }
  },
  mounted() {
    this.fetchUsersWithoutGroup()
  },
  methods: {
    async fetchUsersWithoutGroup() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('http://localhost:3000/api/v1/groups/users-without-group')
        this.users = response.data
      } catch (err) {
        this.error = 'Failed to fetch users without groups'
      } finally {
        this.loading = false
      }
    },
    handleInvite(user: any) {
      // Handle the invite logic here, e.g., send an invitation email or update the user.
      console.log('Inviting user:', user)
    }
  }
})
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
