<template>
  <v-toolbar-title>Application Configuration</v-toolbar-title>

  <v-container>
    <config-form @submit-config="config_submit"></config-form>
  </v-container>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue'

import ConfigForm from '@/components/ConfigForm.vue'
import axios from 'axios'

export default {
  components: {
    ConfigForm
  },
  
  data() {
    return {
      config: [],
     
    }
  },

  methods: {
    async config_submit(config) {
    
        const body = config
        const response = await axios.post('https://localhost:3000/api/v1/config/set', config)
        console.log(response)
        
    },
}
</script>
  
 