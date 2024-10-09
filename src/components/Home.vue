<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <h2><center>Admin Configuration</center></h2>
        <br />
        <v-card>
          <v-card-title> </v-card-title>
          <v-card-text v-for="config in configs" :key="config">{{ config }} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      configs: [],

      configHeaders: [
        { text: 'usersNumber', value: 'usersNumber' },
        { text: 'groupNumber', value: 'groupNumber' }
      ]
    }
  },
  mounted() {
    this.fetchConfigs()
  },
  methods: {
    async fetchConfigs() {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/config/')
        this.configs = [
          'Total Users: ' + response.data.usersNumber,
          'Total Groups: ' + response.data.groupsNumber,
          'Last Group was :' + (response.data.lastMin ? 'Smaller' : 'Bigger')
        ]
      } catch (error) {
        console.error('Error fetching configs:', error)
      }
    }
  }
})
</script>
  
  <style scoped>
.v-toolbar-title {
  font-size: 18px;
}
</style>
  