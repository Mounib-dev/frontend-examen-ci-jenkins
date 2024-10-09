<template>
  <v-container> <login-form></login-form></v-container>
</template>
  
  <script>
import { defineComponent } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
export default defineComponent({
  components: { LoginForm }
})
</script>
  