<template>
  <div>
    <p>User ID: {{ userId }}</p>
    <p>User Role: {{ userRole }}</p>
  </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/stores/auth'

export default {
  setup() {
    const authStore = useAuthStore()
    const userId = authStore.userId
    const userRole = authStore.userRole

    return {
      userId,
      userRole
    }
  }
}
</script>
