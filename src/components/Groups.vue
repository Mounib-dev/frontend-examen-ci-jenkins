<template>
  <h1><center>List of Users Without Groups</center></h1>
  <v-card>
    <v-card-title></v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="users"
        class="elevation-1"
        :items-per-page="5"
        item-key="_id"
      >
        <!-- Colonne pour le bouton Inviter -->
        <template v-slot:[`item.action`]="{ item }">
          <v-btn color="primary" @click="inviteUser(item)"> Inviter </v-btn>
        </template>
      </v-data-table>

      <!-- Alerte si aucun utilisateur n'est trouvé -->
      <v-alert v-if="!users.length" type="info"> No users found without a group. </v-alert>
    </v-card-text>
  </v-card>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    users: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      // Définition des en-têtes du tableau
      headers: [
        { text: 'First Name', value: 'firstname' },
        { text: 'Last Name', value: 'lastname' },
        { text: 'Action', value: 'action', sortable: false }
      ]
    }
  },
  methods: {
    inviteUser(user: any) {
      // Emit the invite event to the parent component
      this.$emit('invite', user)
    }
  }
})
</script>
  
  <style scoped>
.user-item {
  margin-bottom: 10px;
}
</style>
  