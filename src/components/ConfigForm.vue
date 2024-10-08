<template>
  <v-container>
    <v-form @submit.prevent="submitForm" ref="form" lazy-validation>
      <v-text-field label="Number of Users" type="number" required> </v-text-field>

      <v-text-field label="Number of Groups" type="number" required> </v-text-field>

      <v-select
        label="Select Group Option"
        v-model="form.lastGroupOptions"
        :items="lastGroupOptions"
        required
      >
      </v-select>
      <v-btn type="submit" color="green" variant="text"> Save </v-btn>
    </v-form>
  </v-container>
</template>

    <script lang = "ts" >
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      form: {
        usersNumber: '',
        groupsNumber: '',
        lastGroup: null,
        valid: false,
        lastGroupOptions: ''
      },
      lastGroupOptions: ['Smaller', 'Bigger'],
      successDialog: false,
      errors: {}
    }
  },
  methods: {
    async submitForm() {
      this.$emit('submit-config', this.form)
      this.form = {
        usersNumber: '',
        groupsNumber: '',
        lastGroup: null,
        valid: false,
        lastGroupOptions: ''
      }
    }
  }
})
</script>

